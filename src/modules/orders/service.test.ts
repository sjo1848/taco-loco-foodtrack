import { describe, expect, it } from "vitest";
import { transitionOrderData, transitionOrderInputSchema } from "./service";

describe("order transition service", () => {
  it("requires a reason for cancellation at the input boundary", () => {
    expect(transitionOrderInputSchema.safeParse({ orderId: "123e4567-e89b-12d3-a456-426614174000", toStatus: "CANCELLED" }).success).toBe(false);
    expect(transitionOrderInputSchema.safeParse({ orderId: "123e4567-e89b-12d3-a456-426614174000", toStatus: "CANCELLED", reason: "Sin disponibilidad" }).success).toBe(true);
  });

  it("sets confirmation and closing timestamps according to the target state", () => {
    const now = new Date("2026-08-09T19:30:00.000Z");
    expect(transitionOrderData("CONFIRMED", null, now)).toMatchObject({ status: "CONFIRMED", confirmedAt: now, closedAt: undefined });
    expect(transitionOrderData("DELIVERED", null, now)).toMatchObject({ status: "DELIVERED", closedAt: now });
    expect(transitionOrderData("CANCELLED", "Sin disponibilidad", now)).toMatchObject({ status: "CANCELLED", cancellationReason: "Sin disponibilidad", closedAt: now });
  });
});
