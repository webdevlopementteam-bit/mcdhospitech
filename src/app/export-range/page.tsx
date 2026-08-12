import type { Metadata } from "next";
import { CheckCircle2, Globe2, PackageCheck, Ship, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Export Range",
  description:
    "MCD Hospitech exports hospital furniture, operating tables and LED operating lights internationally, with full documentation and export-grade packaging.",
};

const exportCategories = categories.filter((c) =>
  ["medical-beds", "medical-furniture", "operating-tables", "operating-lights"].includes(c.slug)
);

const highlights = [
  {
    icon: ShieldCheck,
    title: "Compliance Documentation",
    description:
      "CE certification, ISO documentation and product datasheets prepared for international regulatory submissions.",
  },
  {
    icon: PackageCheck,
    title: "Export-Grade Packaging",
    description:
      "Fumigated wooden crating, shock-indicators and moisture barriers to protect equipment across long transit routes.",
  },
  {
    icon: Ship,
    title: "Logistics Coordination",
    description:
      "FOB, CIF and door-delivery shipping terms supported, with full container load (FCL) and LCL options.",
  },
  {
    icon: Globe2,
    title: "After-Sales Support",
    description:
      "Installation guidance, spare parts supply and remote technical support for overseas healthcare partners.",
  },
];

const process = [
  "Requirement study & product configuration",
  "Formal proforma invoice & documentation",
  "Manufacturing & pre-shipment quality inspection",
  "Export-grade packing & container loading",
  "Shipping, customs documentation & delivery",
];

export default function ExportRangePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-saffron-400">
            Export Range
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Hospital Infrastructure, Manufactured in India for the World
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            We package and ship hospital furniture, operating tables and LED
            operating lights to healthcare providers and distributors
            internationally, with complete compliance documentation.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Request Export Catalogue
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Export Ready"
            title="Product Families Available for Export"
            description="Our export range spans core hospital infrastructure categories, each configurable to destination-market voltage, language and regulatory requirements."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {exportCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="Built for International Delivery"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-7 shadow-sm shadow-navy-900/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-5 text-base font-bold text-navy-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Export Process"
              title="From Enquiry to Your Port of Entry"
            />
            <ol className="mt-8 space-y-5">
              {process.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron-500 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-slate-600">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[2rem] bg-navy-900 p-10 text-white">
            <h3 className="font-display text-xl font-bold">
              Ready to import from MCD Hospitech?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Share your country, product requirements and estimated
              quantities — our export team will respond with a formal quote
              and lead time.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Dedicated export account manager",
                "Flexible FOB / CIF shipping terms",
                "Custom voltage & regulatory configuration",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="primary" className="mt-8">
              Get Export Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
