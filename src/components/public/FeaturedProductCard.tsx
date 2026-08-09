import { ProductCard } from "@/components/public/ProductCard";

type Featured = Parameters<typeof ProductCard>[0]["product"];

export function FeaturedProductCard({ product, onAdd }: { product: Featured; onAdd?: (product: Featured) => void }) { return <ProductCard product={product} featured onAdd={onAdd} />; }
