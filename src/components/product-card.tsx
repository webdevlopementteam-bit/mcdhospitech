import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getCategory, type Subcategory } from "@/lib/products";

export function ProductCard({
  categorySlug,
  subcategory,
}: {
  categorySlug: string;
  subcategory: Subcategory;
}) {
  const { product } = subcategory;
  const category = getCategory(categorySlug);
  const image = product?.image ?? category?.image;

  return (
    <Link
      href={`/products/${categorySlug}/${subcategory.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <div className="relative h-60 overflow-hidden bg-slate-50">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-saffron-600">
          {subcategory.name}
        </p>

        <h3 className="font-display mt-1.5 text-base font-bold text-navy-900">
          {product.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {subcategory.blurb}
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-saffron-600">
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
