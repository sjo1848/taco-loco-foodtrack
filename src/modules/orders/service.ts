import { AppError } from "@/lib/errors";
import { db } from "@/lib/db";
import { assertValidTransition, orderStatusSchema, type OrderStatus } from "@/modules/orders/model";
import { z } from "zod";

export const transitionOrderInputSchema = z.object({
  orderId: z.uuid(),
  toStatus: orderStatusSchema,
  reason: z.string().trim().max(500).nullable().optional(),
}).superRefine((input, context) => {
  if (input.toStatus === "CANCELLED" && !input.reason) context.addIssue({ code: "custom", path: ["reason"], message: "El motivo de cancelación es obligatorio." });
});

export type TransitionOrderInput = z.infer<typeof transitionOrderInputSchema>;

export function transitionOrderData(toStatus: OrderStatus, reason: string | null | undefined, now = new Date()) {
  return {
    status: toStatus,
    confirmedAt: toStatus === "CONFIRMED" ? now : undefined,
    closedAt: ["DELIVERED", "CANCELLED"].includes(toStatus) ? now : undefined,
    cancellationReason: toStatus === "CANCELLED" ? reason : undefined,
  };
}

export async function transitionOrder(input: unknown, actorId: string) {
  const parsed = transitionOrderInputSchema.parse(input);
  return db.$transaction(async (tx: { order: typeof db.order; orderEvent: typeof db.orderEvent }) => {
    const current = await tx.order.findUnique({ where: { id: parsed.orderId } });
    if (!current) throw new AppError("ORDER_NOT_FOUND", "Pedido no encontrado.", 404);

    try {
      assertValidTransition(current.status, parsed.toStatus);
    } catch {
      throw new AppError("INVALID_ORDER_TRANSITION", "El pedido no puede pasar a ese estado.", 409);
    }

    const result = await tx.order.updateMany({
      where: { id: parsed.orderId, status: current.status },
      data: { ...transitionOrderData(parsed.toStatus, parsed.reason), updatedById: actorId },
    });
    if (result.count !== 1) throw new AppError("ORDER_CHANGED", "El pedido cambió mientras lo actualizabas. Recargá e intentá de nuevo.", 409);

    const event = await tx.orderEvent.create({ data: { orderId: parsed.orderId, fromStatus: current.status, toStatus: parsed.toStatus, reason: parsed.reason ?? null, actorId } });
    const order = await tx.order.findUniqueOrThrow({ where: { id: parsed.orderId }, include: { lines: true, events: { orderBy: { createdAt: "asc" } } } });
    return { order, event };
  });
}
