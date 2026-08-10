import { describe, expect, it } from "vitest";
import { addSelectionLine, buildWhatsAppMessage, removeSelectionLine, selectionCount, selectionTotal, updateSelectionQuantity, type SelectionLine } from "@/modules/selection/model";

const taco: Omit<SelectionLine, "id" | "quantity"> = { productId: "taco", name: "Taco x2", priceAmount: 5000, modifiers: [{ group: "Salsa", option: "Picante" }] };

describe("selection model", () => {
  it("combines equal lines and calculates count and total", () => {
    const once = addSelectionLine([], taco);
    const twice = addSelectionLine(once, taco);
    expect(selectionCount(twice)).toBe(2);
    expect(selectionTotal(twice)).toBe(10000);
  });

  it("removes a line when quantity reaches zero and builds a WhatsApp message", () => {
    const line = addSelectionLine([], taco)[0];
    expect(updateSelectionQuantity([line], line.id, 0)).toEqual([]);
    expect(buildWhatsAppMessage([line], "Taco Loco")).toContain("Salsa: Picante");
  });

  it("removes a complete line explicitly and caps repeated additions", () => {
    const line = { productId: "p1", name: "Taco", priceAmount: 100, modifiers: [] };
    const capped = Array.from({ length: 20 }, () => line).reduce((lines) => addSelectionLine(lines, line), [] as SelectionLine[]);
    expect(capped[0].quantity).toBe(20);
    expect(removeSelectionLine(capped, capped[0].id)).toEqual([]);
  });
});
