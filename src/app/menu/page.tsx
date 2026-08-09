import { BrandHeader } from "@/components/public/BrandHeader";
import { CategoryNav } from "@/components/public/CategoryNav";
import { FeaturedProductCard } from "@/components/public/FeaturedProductCard";
import { ProductCard } from "@/components/public/ProductCard";
import { SaucesInfo } from "@/components/public/SaucesInfo";
import { WhatsAppCTA } from "@/components/public/WhatsAppCTA";
import { getPublicMenu } from "@/modules/catalog/read-model";

export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const menu = await getPublicMenu();
  const featured = menu.categories.flatMap((category) => category.products.filter((product) => product.featured)).slice(0, 2);
  return <main className="public-menu"><BrandHeader businessName={menu.settings.businessName} /><CategoryNav categories={menu.categories} />
    <div className="public-menu__content">
      <div className="public-menu__intro"><p className="eyebrow">Menú digital</p><h1>Elegí tu próximo antojo</h1></div>
      {featured.length > 0 && <section className="menu-section menu-section--featured" aria-labelledby="featured-heading"><h2 id="featured-heading">Favoritos de la casa</h2>{featured.map((product) => <FeaturedProductCard key={product.id} product={product} />)}</section>}
      {menu.categories.map((category) => <section className="menu-section" id={`category-${category.id}`} key={category.id} aria-labelledby={`heading-${category.id}`}><h2 id={`heading-${category.id}`}>{category.name}</h2><div className="product-list">{category.products.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>)}
      <SaucesInfo />
    </div><WhatsAppCTA href={menu.settings.whatsappUrl} />
  </main>;
}
