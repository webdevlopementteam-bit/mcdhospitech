import type { Metadata } from "next";
import Image from "next/image";
import {
  Baby,
  BadgeCheck,
  Building2,
  Gauge,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Wind,
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MCD Hospitech is a New Delhi based medical technology manufacturer established in 2011, specialising in neonatal & NICU equipment, LED surgical lights, operating tables and modular operation theatres.",
};

const yearsActive = new Date().getFullYear() - Number(site.founded);

const milestones = [
  {
    year: site.founded,
    title: "A Name Rooted in Care",
    description:
      "Founded in New Delhi and named in honour of Maa Chandrakala Devi, the founder's mother — carrying her care into every product we build.",
  },
  {
    year: "MSME",
    title: "Registered as a Micro, Small & Medium Enterprise",
    description:
      "Built as a lean, focused MSME, bringing together a decade of hands-on expertise in medical equipment manufacturing, installation and commissioning.",
  },
  {
    year: "Expansion",
    title: "From Neonatology into Full Critical-Care Infrastructure",
    description:
      "Grew from our core neonatal & NICU specialty into LED surgical lighting, operating tables, hospital furniture and modular operation theatres.",
  },
  {
    year: "Today",
    title: "New Delhi HQ, Mumbai Operations",
    description:
      "Headquartered in New Delhi with an operations and warehousing base in Mumbai, serving hospitals and medical institutions nationwide.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every product — from an infant warmer's thermal control to an LED light's focus mechanism — is engineered to exact tolerances.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Before Delivery",
    description:
      "We believe quality is best in the market — every unit passes rigorous checks before it leaves for a hospital or institution.",
  },
  {
    icon: HeartHandshake,
    title: "Unwavering Support",
    description:
      "We commit to being available to healthcare institutions when it matters, with after-sales response within 48 hours of contact.",
  },
  {
    icon: Lightbulb,
    title: "Breakthrough Technology",
    description:
      "We continuously search for innovative treatments and technologies that can replace outdated procedures in patient care.",
  },
];

const competencies = [
  { icon: Baby, label: "Neonatal & NICU Equipment" },
  { icon: Building2, label: "Modular Operating Theatres" },
  { icon: Wind, label: "Medical Gas Pipeline Systems" },
  { icon: Lightbulb, label: "HD-LED Surgical Lighting" },
];

const capabilities = [
  { icon: BadgeCheck, label: "ISO 9001 compliant" },
  { icon: ShieldCheck, label: "CE certified products" },
  { icon: Gauge, label: "48-hour after-sales response" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-saffron-400">
            About MCD Hospitech
          </span>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Innovative Medilife Technologies, Manufactured with Purpose
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            For {yearsActive}+ years, MCD Hospitech has manufactured,
            installed and commissioned the neonatal, ICU, gynaecology and
            operating theatre equipment that healthcare teams rely on every
            single day.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Engineering Reliable Infrastructure for Healthcare"
            />
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                MCD Hospitech was founded in August {site.founded} in New
                Delhi as a Micro, Small &amp; Medium Enterprise (MSME). The
                company is named in honour of{" "}
                <span className="font-semibold text-navy-800">
                  Maa Chandrakala Devi
                </span>
                , the founder&apos;s mother — a name that reflects the same
                trust and care we bring to every hospital we equip.
              </p>
              <p>
                Our mission is guided by the Sanskrit slogan{" "}
                <em>
                  &ldquo;ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः&rdquo;
                </em>{" "}
                — &ldquo;may all be happy, may all be healthy&rdquo; — and
                centres on contributing our knowledge of medical procedures
                to hospitals and medical institutions, while introducing
                innovative treatments to replace outdated ones.
              </p>
              <p>
                We specialise in neonatal intensive care (NICU), modular
                operating theatres and medical gas pipeline systems, and
                have since expanded into HD-LED surgical lighting with
                near-perfect colour rendition, operating tables, hospital
                furniture and full turnkey operation theatre environments.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {capabilities.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-800"
                >
                  <Icon className="h-4 w-4 text-saffron-600" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-saffron-100 via-transparent to-emerald-100 blur-2xl" />
            <div className="relative flex items-center justify-center rounded-[2rem] border border-slate-100 bg-navy-50 p-16 shadow-sm">
              <Image
                src="/logo.jpeg"
                alt="MCD Hospitech"
                width={320}
                height={320}
                className="h-auto w-full max-w-xs"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-24">
        <Container>
          <SectionHeading
            eyebrow="Core Competencies"
            title="What We Specialise In"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {competencies.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-sm shadow-navy-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-4 text-sm font-bold text-navy-900">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Journey"
            title="How We Got Here"
            align="center"
          />
          <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <div
                key={m.title}
                className="relative rounded-2xl border border-slate-100 p-7 shadow-sm shadow-navy-900/5"
              >
                <span className="font-display text-3xl font-extrabold text-navy-100">
                  0{i + 1}
                </span>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-saffron-600">
                  {m.year}
                </p>
                <h3 className="font-display mt-2 text-base font-bold text-navy-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-24">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            description="Principles that shape every product line, from the first sketch to final installation."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-7 shadow-sm shadow-navy-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
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

      <section className="py-24">
        <Container>
          <div className="flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-navy-900 px-8 py-14 text-center sm:px-16 lg:flex-row lg:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Want to know more about our certifications & facility?
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                Reach out to {site.name} for detailed product catalogues,
                certifications and facility documentation.
              </p>
            </div>
            <Button href="/contact" variant="primary" className="shrink-0">
              Contact Our Team
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
