import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icon-map";
import type { Subcategory } from "@/lib/products";

export function ProductCard({
  categorySlug,
  subcategory,
}: {
  categorySlug: string;
  subcategory: Subcategory;
}) {
  const Icon = getIcon(subcategory.product.icon);
  return (
    <Link
      href={`/products/${categorySlug}/${subcategory.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900">
        <div className="bg-grid absolute inset-0" />
        <Icon className="relative h-14 w-14 text-white/90" strokeWidth={1.5} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-saffron-600">
          {subcategory.name}
        </p>
        <h3 className="font-display mt-1.5 text-base font-bold text-navy-900">
          {subcategory.product.name}
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
