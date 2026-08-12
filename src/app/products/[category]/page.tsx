import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { getIcon } from "@/lib/icon-map";
import { categories, getCategory } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) notFound();
  const Icon = getIcon(category.icon);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <Container className="relative">
          <nav className="flex items-center gap-1.5 text-xs text-white/50">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/80">{category.name}</span>
          </nav>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-500 text-white">
              <Icon className="h-7 w-7" />
            </span>
            <div>
              <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-1 text-sm font-medium text-saffron-400">
                {category.tagline}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-white/70">{category.description}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={`${category.subcategories.length} Product Lines`}
            title="Browse the Range"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.subcategories.map((sub) => (
              <ProductCard
                key={sub.slug}
                categorySlug={category.slug}
                subcategory={sub}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16">
        <Container>
          <SectionHeading
            eyebrow="Explore More"
            title="Other Product Families"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:border-saffron-500 hover:text-saffron-600"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
