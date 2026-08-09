import { AppError } from "@/lib/errors";
import { db } from "@/lib/db";
import type { OrderStatus } from "@/modules/orders/model";

export type OrderListFilter = { status?: OrderStatus; query?: string };

function parseOrderNumber(query: string) {
  const value = query.replace(/^tl-/i, "").trim();
  const number = Number(value);
  return Number.isSafeInteger(number) && number > 0 ? number : null;
}

export const orderRepository = {
  async list(filter: OrderListFilter = {}) {
    const query = filter.query?.trim() ?? "";
    const orderNumber = query ? parseOrderNumber(query) : null;
    return db.order.findMany({
      where: {
        ...(filter.status ? { status: filter.status } : {}),
        ...(query ? { OR: [{ customerName: { contains: query, mode: "insensitive" } }, { customerPhone: { contains: query, mode: "insensitive" } }, ...(orderNumber ? [{ orderNumber }] : [])] } : {}),
      },
      include: { lines: true, createdBy: { select: { email: true } } },
      orderBy: [{ createdAt: "desc" }],
      take: 100,
    });
  },
  async findById(id: string) {
    const order = await db.order.findUnique({
      where: { id },
      include: { lines: true, createdBy: { select: { email: true } }, updatedBy: { select: { email: true } }, events: { include: { actor: { select: { email: true } } }, orderBy: { createdAt: "asc" } } },
    });
    if (!order) throw new AppError("ORDER_NOT_FOUND", "Pedido no encontrado.", 404);
    return order;
  },
};
