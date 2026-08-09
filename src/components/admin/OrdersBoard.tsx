"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type OrderStatus = "RECEIVED" | "CONFIRMED" | "IN_PREPARATION" | "READY" | "DELIVERED" | "CANCELLED";
type Order = { id: string; orderNumber: number; status: OrderStatus; fulfillment: "PICKUP" | "DINE_IN"; customerName: string | null; customerPhone: string | null; totalAmount: number; createdAt: string; lines: Array<unknown> };

const statusLabels: Record<OrderStatus, string> = { RECEIVED: "Recibido", CONFIRMED: "Confirmado", IN_PREPARATION: "En preparación", READY: "Listo", DELIVERED: "Entregado", CANCELLED: "Cancelado" };
function orderCode(orderNumber: number) { return `TL-${String(orderNumber).padStart(4, "0")}`; }
function formatMoney(amount: number) { return `$${amount.toLocaleString("es-AR")}`; }

export function OrdersBoard({ orders }: { orders: Order[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"ALL" | OrderStatus>("ALL");
  const filtered = useMemo(() => orders.filter((order) => {
    const haystack = `${orderCode(order.orderNumber)} ${order.customerName ?? ""} ${order.customerPhone ?? ""}`.toLowerCase();
    return (status === "ALL" || order.status === status) && haystack.includes(query.trim().toLowerCase());
  }), [orders, query, status]);
  return <section className="admin-panel orders-board"><div className="admin-toolbar"><label className="sr-only" htmlFor="order-search">Buscar pedido</label><input id="order-search" placeholder="Buscar TL-0001, cliente o teléfono…" value={query} onChange={(event) => setQuery(event.target.value)} /><label className="sr-only" htmlFor="order-status">Filtrar estado</label><select id="order-status" value={status} onChange={(event) => setStatus(event.target.value as "ALL" | OrderStatus)}><option value="ALL">Todos los estados</option>{Object.entries(statusLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div><div className="orders-board__summary"><span>{filtered.length} pedido{filtered.length === 1 ? "" : "s"}</span><span>Más recientes primero</span></div><div className="orders-list">{filtered.map((order) => <Link className="order-row" href={`/admin/orders/${order.id}`} key={order.id}><div><div className="order-row__title"><strong>{orderCode(order.orderNumber)}</strong><span className={`order-status order-status--${order.status.toLowerCase()}`}>{statusLabels[order.status]}</span></div><p>{order.customerName || "Sin nombre"} · {order.fulfillment === "PICKUP" ? "Retiro" : "Consumo local"}</p><small>{new Date(order.createdAt).toLocaleString("es-AR")} · {order.lines.length} línea{order.lines.length === 1 ? "" : "s"}</small></div><strong className="order-row__total">{formatMoney(order.totalAmount)}</strong></Link>)}{filtered.length === 0 && <p className="admin-empty">No hay pedidos que coincidan con el filtro.</p>}</div></section>;
}
