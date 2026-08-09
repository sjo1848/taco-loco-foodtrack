import Image from "next/image";

export function BrandHeader({ businessName }: { businessName: string }) {
  return <header className="brand-header"><Image className="brand-logo" src="/brand/logo-taco-loco.jpg" alt="Logo de Taco Loco" width={68} height={68} priority /><div><p className="brand-name">{businessName}</p><p className="brand-tagline">Sabor que te vuelve loco</p></div></header>;
}
