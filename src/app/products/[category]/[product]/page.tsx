import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/button";
import { getIcon } from "@/lib/icon-map";
import { categories, getSubcategory } from "@/lib/products";
import { site } from "@/lib/site";
import Image from "next/image";

export function generateStaticParams() {
  return categories.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, product: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category, product } = await params;
  const { subcategory } = getSubcategory(category, product);

  if (!subcategory) return {};
  return {
    title: subcategory.product.name,
    description: subcategory.product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const { category, subcategory } = getSubcategory(categorySlug, productSlug);
  if (!category || !subcategory) notFound();

  const item = subcategory.product;
  // console.log("item", item);

  const image = category.image;
  // console.log("img", image);

  return (
    <>
      <section className="border-b border-slate-100 bg-navy-50 py-6">
        <Container>
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-navy-800">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="hover:text-navy-800">
              Products
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href={`/products/${category.slug}`}
              className="hover:text-navy-800"
            >
              {category.name}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy-800">{subcategory.name}</span>
          </nav>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] bg-white border border-slate-200">
            <div className="bg-grid absolute inset-0 opacity-30" />

            <Image
              src={image}
              alt={item.name}
              fill
              className="relative z-10 object-contain p-8"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 via-transparent to-transparent" />

            <span className="absolute left-6 top-6 z-20 rounded-full bg-navy-800/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              {category.name}
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-saffron-600">
              {subcategory.name}
            </p>
            <h1 className="font-display mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
              {item.name}
            </h1>
            <p className="mt-2 text-base font-medium text-slate-500">
              {item.tagline}
            </p>
            <p className="mt-6 leading-relaxed text-slate-600">
              {item.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Request a Quote
              </Button>
              <Button
                href={`https://wa.me/${site.whatsapp}`}
                variant="ghost"
                target="_blank"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Enquiry
              </Button>
              <Button href={site.phoneHref} variant="ghost">
                <Phone className="h-4 w-4" />
                {site.phone}
              </Button>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-100 p-6">
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-navy-900">
                Key Features
              </h2>
              <ul className="mt-4 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* <section className="bg-navy-50 py-16">
        <Container>
          <SectionHeading eyebrow="Technical Data" title="Specifications" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {item.specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-navy-50/50"}
                  >
                    <th className="w-1/3 px-6 py-4 font-semibold text-navy-900">
                      {spec.label}
                    </th>
                    <td className="px-6 py-4 text-slate-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Specifications indicative — configurations can be customised to your
            facility&apos;s requirements. Contact us for a detailed technical
            datasheet.
          </p>
        </Container>
      </section> */}

      {/* {related.length > 0 ? (
        <section className="py-16">
          <Container>
            <SectionHeading
              eyebrow={category.name}
              title="More From This Range"
            />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((sub) => (
                <ProductCard
                  key={sub.slug}
                  categorySlug={category.slug}
                  subcategory={sub}
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null} */}
    </>
  );
}
