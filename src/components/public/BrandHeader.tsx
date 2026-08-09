export function BrandHeader({ businessName }: { businessName: string }) {
  return <header className="brand-header"><div className="brand-mark" aria-hidden="true">TL</div><div><p className="brand-name">{businessName}</p><p className="brand-tagline">Sabor que te vuelve loco</p></div></header>;
}
