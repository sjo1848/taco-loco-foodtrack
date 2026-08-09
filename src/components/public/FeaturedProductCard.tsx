import { ProductCard } from "@/components/public/ProductCard";

type Featured = Parameters<typeof ProductCard>[0]["product"];

export function FeaturedProductCard({ product }: { product: Featured }) { return <ProductCard product={product} featured />; }
