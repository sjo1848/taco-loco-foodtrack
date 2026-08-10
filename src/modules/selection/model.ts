export type SelectionModifier = { group: string; option: string };

export type SelectionLine = {
  id: string;
  productId: string;
  name: string;
  priceAmount: number;
  quantity: number;
  modifiers: SelectionModifier[];
};

export function lineId(productId: string, modifiers: SelectionModifier[]) {
  return `${productId}:${JSON.stringify(modifiers)}`;
}

export function addSelectionLine(lines: SelectionLine[], line: Omit<SelectionLine, "id" | "quantity">) {
  const id = lineId(line.productId, line.modifiers);
  const existing = lines.find((item) => item.id === id);
  if (existing) return lines.map((item) => item.id === id ? { ...item, quantity: Math.min(item.quantity + 1, 20) } : item);
  return [...lines, { ...line, id, quantity: 1 }];
}

export function removeSelectionLine(lines: SelectionLine[], id: string) {
  return lines.filter((item) => item.id !== id);
}

export function updateSelectionQuantity(lines: SelectionLine[], id: string, quantity: number) {
  if (quantity <= 0) return lines.filter((item) => item.id !== id);
  return lines.map((item) => item.id === id ? { ...item, quantity: Math.min(quantity, 20) } : item);
}

export function selectionTotal(lines: SelectionLine[]) {
  return lines.reduce((total, line) => total + line.priceAmount * line.quantity, 0);
}

export function selectionCount(lines: SelectionLine[]) {
  return lines.reduce((total, line) => total + line.quantity, 0);
}

export function buildWhatsAppMessage(lines: SelectionLine[], businessName: string) {
  const rows = lines.map((line) => {
    const modifiers = line.modifiers.length > 0 ? ` (${line.modifiers.map((modifier) => `${modifier.group}: ${modifier.option}`).join(", ")})` : "";
    return `- ${line.quantity} x ${line.name}${modifiers}`;
  });
  return [`Hola ${businessName}, quiero hacer este pedido:`, ...rows, "", "Total informativo: consultar al local.", "", "¿Me confirman disponibilidad y total final?"] .join("\n");
}
