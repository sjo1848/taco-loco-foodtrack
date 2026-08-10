"use client";

import { useEffect, useMemo, useState } from "react";
import { BrandHeader } from "@/components/public/BrandHeader";
import { CategoryNav } from "@/components/public/CategoryNav";
import { FeaturedProductCard } from "@/components/public/FeaturedProductCard";
import { ProductCard } from "@/components/public/ProductCard";
import { SaucesInfo } from "@/components/public/SaucesInfo";
import { filterCatalog } from "@/modules/catalog/discovery";
import { buildWhatsAppMessage, addSelectionLine, lineId, removeSelectionLine, selectionCount, selectionTotal, updateSelectionQuantity, type SelectionLine } from "@/modules/selection/model";

type Product = { id: string; name: string; description: string | null; priceAmount: number; available: boolean; featured: boolean; imageKey: string | null; imageAlt: string | null; modifiers: Array<{ name: string; required: boolean; minSelections: number | null; maxSelections: number | null; options: string[] }> };
type Menu = { settings: { businessName: string; whatsappUrl: string; operatingContext: { isOpen: boolean; label: string; detail: string } }; categories: Array<{ id: string; name: string; slug: string; products: Product[] }> };

function formatPrice(amount: number) { return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(amount); }

export function MenuExperience({ menu }: { menu: Menu }) {
  const [lines, setLines] = useState<SelectionLine[]>([]);
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({});
  const [editingLineId, setEditingLineId] = useState<string | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [selectionError, setSelectionError] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const visibleCategories = filterCatalog(menu.categories, searchQuery);
  const featured = visibleCategories.flatMap((category) => category.products.filter((product) => product.featured)).slice(0, 2);
  const count = selectionCount(lines);
  const total = selectionTotal(lines);
  const whatsappHref = useMemo(() => lines.length > 0 ? `https://wa.me/?text=${encodeURIComponent(buildWhatsAppMessage(lines, menu.settings.businessName))}` : menu.settings.whatsappUrl, [lines, menu.settings.businessName, menu.settings.whatsappUrl]);

  useEffect(() => {
    let timer: number | undefined;
    try {
      const saved = window.sessionStorage.getItem("taco-loco-selection");
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) timer = window.setTimeout(() => setLines(parsed as SelectionLine[]), 0);
      }
    } catch {
      // La selección es opcional: si storage está bloqueado, el menú sigue funcionando.
    }
    return () => { if (timer) window.clearTimeout(timer); };
  }, []);

  useEffect(() => {
    try { window.sessionStorage.setItem("taco-loco-selection", JSON.stringify(lines)); } catch {
      // La selección en memoria continúa disponible durante la navegación actual.
    }
  }, [lines]);

  useEffect(() => {
    if (!pendingProduct && !showSummary) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setPendingProduct(null);
      setEditingLineId(null);
      setShowSummary(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [pendingProduct, showSummary]);

  function addProduct(product: Product) {
    if (!product.available) return;
    if (product.modifiers.length > 0) {
      setPendingProduct(product);
      setSelectedOptions({});
      setSelectionError("");
      return;
    }
    setLines((current) => addSelectionLine(current, { productId: product.id, name: product.name, priceAmount: product.priceAmount, modifiers: [] }));
    setFeedbackMessage(`${product.name} agregado al pedido.`);
    flashAdded(product.id);
  }

  function flashAdded(productId: string) {
    setAddedProductId(productId);
    window.setTimeout(() => setAddedProductId((current) => current === productId ? null : current), 900);
  }

  function editLine(line: SelectionLine) {
    const product = menu.categories.flatMap((category) => category.products).find((item) => item.id === line.productId);
    if (!product) return;
    setPendingProduct(product);
    setEditingLineId(line.id);
    setSelectedOptions(Object.fromEntries(product.modifiers.map((group) => [group.name, line.modifiers.filter((modifier) => modifier.group === group.name).map((modifier) => modifier.option)])));
    setSelectionError("");
    setShowSummary(false);
  }

  function toggleOption(group: Product["modifiers"][number], option: string) {
    setSelectedOptions((current) => {
      const selected = current[group.name] ?? [];
      const exists = selected.includes(option);
      const max = group.maxSelections ?? 1;
      const next = exists ? selected.filter((item) => item !== option) : max === 1 ? [option] : [...selected, option].slice(0, max);
      return { ...current, [group.name]: next };
    });
    setSelectionError("");
  }

  function confirmProduct() {
    if (!pendingProduct) return;
    const modifiers = pendingProduct.modifiers.flatMap((group) => (selectedOptions[group.name] ?? []).map((option) => ({ group: group.name, option })));
    const missingRequired = pendingProduct.modifiers.some((group) => group.required && (selectedOptions[group.name] ?? []).length < (group.minSelections ?? 1));
    if (missingRequired) { setSelectionError("Completá las opciones obligatorias para continuar."); return; }
    setLines((current) => {
      const nextLine = { productId: pendingProduct.id, name: pendingProduct.name, priceAmount: pendingProduct.priceAmount, modifiers };
      if (!editingLineId) return addSelectionLine(current, nextLine);
      const previous = current.find((line) => line.id === editingLineId);
      if (!previous) return current;
      return current.map((line) => line.id === editingLineId ? { ...nextLine, id: lineId(nextLine.productId, nextLine.modifiers), quantity: previous.quantity } : line);
    });
    flashAdded(pendingProduct.id);
    setFeedbackMessage(editingLineId ? `${pendingProduct.name} actualizado.` : `${pendingProduct.name} agregado al pedido.`);
    setSelectionError("");
    setPendingProduct(null);
    setEditingLineId(null);
  }

  function removeLine(line: SelectionLine) {
    setLines((current) => removeSelectionLine(current, line.id));
    setFeedbackMessage(`${line.name} quitado del pedido.`);
  }

  function clearSelection() {
    setLines([]);
    setFeedbackMessage("Pedido vacío.");
  }

  return <main className="public-menu"><BrandHeader businessName={menu.settings.businessName} /><CategoryNav categories={visibleCategories} /><p className="sr-only" aria-live="polite">{feedbackMessage || (addedProductId ? "Producto agregado al pedido" : "")}</p>
    <div className="public-menu__content"><div className="public-menu__intro"><p className="eyebrow">Menú digital</p><h1>Elegí tu próximo antojo</h1></div>
      <section className={`operating-status operating-status--${menu.settings.operatingContext.isOpen ? "open" : "closed"}`} aria-live="polite"><strong>{menu.settings.operatingContext.label}</strong><span>{menu.settings.operatingContext.detail}</span></section>
      <label className="menu-search">Buscar en el menú<input type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Ej.: taco, pizza, bebida…" /></label>
      {searchQuery.trim() && visibleCategories.length === 0 && <p className="search-empty" role="status">No encontramos productos con “{searchQuery}”. Probá con otro término.</p>}
      {featured.length > 0 && <section className="menu-section menu-section--featured" aria-labelledby="featured-heading"><h2 id="featured-heading">Favoritos de la casa</h2>{featured.map((product) => <FeaturedProductCard key={product.id} product={product} onAdd={addProduct} added={addedProductId === product.id} />)}</section>}
      {visibleCategories.map((category) => <section className="menu-section" id={`category-${category.id}`} key={category.id} aria-labelledby={`heading-${category.id}`}><h2 id={`heading-${category.id}`}>{category.name}</h2><div className="product-list">{category.products.map((product) => <ProductCard key={product.id} product={product} onAdd={addProduct} added={addedProductId === product.id} />)}</div></section>)}
      <SaucesInfo />
    </div>
    {count > 0 && <button className="selection-bar" type="button" onClick={() => setShowSummary(true)}><span>Pedido · {count} {count === 1 ? "producto" : "productos"}</span><strong>{formatPrice(total)}</strong></button>}
    <div className="whatsapp-cta"><a className={`whatsapp-cta__button${menu.settings.operatingContext.isOpen ? "" : " whatsapp-cta__button--closed"}`} href={whatsappHref} rel="noreferrer" target="_blank"><span aria-hidden="true">◉</span><span>{count > 0 ? menu.settings.operatingContext.isOpen ? "Enviar pedido por WhatsApp" : "Consultar selección por WhatsApp" : menu.settings.operatingContext.isOpen ? "Pedir por WhatsApp" : "Consultar disponibilidad"}</span></a></div>
    {pendingProduct && <div className="selection-overlay" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) { setPendingProduct(null); setEditingLineId(null); } }}><section className="selection-sheet" role="dialog" aria-modal="true" aria-labelledby="selection-title"><div className="selection-sheet__header"><div><p className="eyebrow">Personalizá tu pedido</p><h2 id="selection-title">{pendingProduct.name}</h2></div><button className="selection-close" type="button" onClick={() => { setPendingProduct(null); setEditingLineId(null); }} aria-label="Cerrar">×</button></div>{pendingProduct.modifiers.map((group) => <fieldset className="modifier-group" key={group.name}><legend>{group.name}{group.required ? " · obligatorio" : ""}</legend><div className="modifier-options">{group.options.map((option) => { const checked = (selectedOptions[group.name] ?? []).includes(option); return <button className={`modifier-option${checked ? " modifier-option--selected" : ""}`} type="button" aria-pressed={checked} key={option} onClick={() => toggleOption(group, option)}>{option}</button>; })}</div></fieldset>)}{selectionError && <p className="selection-error" role="alert">{selectionError}</p>}<button className="button selection-confirm" type="button" onClick={confirmProduct}>{editingLineId ? "Guardar cambios" : "Agregar al pedido"} · {formatPrice(pendingProduct.priceAmount)}</button></section></div>}
    {showSummary && <div className="selection-overlay" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setShowSummary(false); }}><section className="selection-sheet" role="dialog" aria-modal="true" aria-labelledby="summary-title"><div className="selection-sheet__header"><div><p className="eyebrow">Tu selección</p><h2 id="summary-title">Revisá tu pedido</h2></div><button className="selection-close" type="button" onClick={() => setShowSummary(false)} aria-label="Cerrar">×</button></div>{lines.length === 0 ? <p className="selection-empty">Todavía no agregaste productos.</p> : <><div className="selection-lines">{lines.map((line) => <div className="selection-line" key={line.id}><div><strong>{line.name}</strong>{line.modifiers.length > 0 && <small>{line.modifiers.map((modifier) => `${modifier.group}: ${modifier.option}`).join(" · ")}</small>}<span>{formatPrice(line.priceAmount)} c/u</span></div><div className="selection-line__actions"><button className="selection-edit" type="button" onClick={() => editLine(line)}>Editar</button><button className="selection-remove" type="button" onClick={() => removeLine(line)} aria-label={`Quitar ${line.name} del pedido`}>Quitar</button><div className="quantity-control" aria-label={`Cantidad de ${line.name}`}><button type="button" onClick={() => setLines((current) => updateSelectionQuantity(current, line.id, line.quantity - 1))} aria-label={`Quitar una unidad de ${line.name}`}>−</button><strong>{line.quantity}</strong><button type="button" onClick={() => setLines((current) => updateSelectionQuantity(current, line.id, line.quantity + 1))} aria-label={`Agregar una unidad de ${line.name}`}>+</button></div></div></div>)}</div><button className="selection-clear" type="button" onClick={clearSelection}>Vaciar pedido</button></>}<div className="selection-summary"><span>Total informativo</span><strong>{formatPrice(total)}</strong></div><div className="selection-actions"><button className="button button--secondary" type="button" onClick={() => setShowSummary(false)}>Seguir viendo el menú</button><a className="button" href={whatsappHref} rel="noreferrer" target="_blank">{menu.settings.operatingContext.isOpen ? "Enviar por WhatsApp" : "Consultar por WhatsApp"}</a></div></section></div>}
  </main>;
}
