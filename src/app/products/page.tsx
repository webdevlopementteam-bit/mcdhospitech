import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { CategoryCard } from "@/components/category-card";
import { getIcon } from "@/lib/icon-map";
import { categories } from "@/lib/products";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse MCD Hospitech's full product catalogue — hospital beds, medical furniture, LED operating lights, operating tables and modular operation theatres.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-saffron-400">
            Product Catalogue
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Every Product Your Hospital Needs, Under One Roof
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Five integrated product families — from ward beds to turnkey
            modular operation theatres.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {categories.map((category, idx) => {
        const Icon = getIcon(category.icon);
        return (
          <section
            key={category.slug}
            className={idx % 2 === 0 ? "bg-navy-50 py-20" : "py-20"}
          >
            <Container>
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-2xl font-bold text-navy-900">
                      {category.name}
                    </h2>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                    {category.description}
                  </p>
                </div>
                <Button href={`/products/${category.slug}`} variant="ghost">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/products/${category.slug}/${sub.slug}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-saffron-500 hover:text-saffron-600"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
