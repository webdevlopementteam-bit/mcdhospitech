import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Building2,
  Calendar,
  Clock,
  Factory,
  Globe2,
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  Phone,
  Quote,
  Settings,
  ShieldCheck,
  Users,
  Wind,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { ContactForm } from "@/components/contact-form";
import { categories, getSubcategory } from "@/lib/products";
import { site } from "@/lib/site";

const featured = [
  ["medical-beds", "icu-bed"],
  ["neonatal-nicu-care", "baby-incubator"],
  ["operating-lights", "80-series-led"],
  ["operating-tables", "electro-hydraulic-operating-table"],
  ["neonatal-nicu-care", "infant-radiant-warmer"],
  ["medical-furniture", "stretcher-trolleys"],
  ["modular-ots", "laminar-ahu"],
  ["operating-lights", "examination-lights"],
  ["medical-furniture", "autoclaves"],
] as const;

const yearsActive = new Date().getFullYear() - Number(site.founded);

const competencies = [
  { icon: Baby, label: "NICU & Neonatal Care" },
  { icon: Building2, label: "Modular Operating Theatres" },
  { icon: Wind, label: "Medical Gas Pipeline Systems" },
  { icon: Lightbulb, label: "HD-LED Surgical Lighting" },
];

const snapshot = [
  { icon: Calendar, label: "Established", value: site.founded },
  { icon: MapPin, label: "Head Office", value: "New Delhi" },
  { icon: Building2, label: "Operations & Warehouse", value: "Mumbai" },
  { icon: Users, label: "Team Strength", value: "11–25 Specialists" },
  { icon: ShieldCheck, label: "Certifications", value: "ISO 9001 & CE" },
];

const aboutStats = [
  { icon: ShieldCheck, value: `${yearsActive}+`, label: "Years of Experience" },
  { icon: Handshake, value: "500+", label: "Hospitals Equipped" },
  { icon: MapPinned, value: "25+", label: "States Served" },
  { icon: Settings, value: "100%", label: "Customer Commitment" },
];

const whyUs = [
  {
    icon: Factory,
    title: "Decade-Long Manufacturing Expertise",
    description:
      "Over a decade of experience manufacturing, installing and commissioning medical equipment across neonatology, ICU and OT departments.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Quality",
    description:
      "Products built to ISO 9001 aligned processes, with many lines carrying CE certification and rigorous pre-dispatch quality checks.",
  },
  {
    icon: Wrench,
    title: "Custom Engineering",
    description:
      "From bed dimensions to modular OT layouts, our team configures products around your facility's exact requirements.",
  },
  {
    icon: Globe2,
    title: "Rapid After-Sales Support",
    description:
      "A committed 48-hour after-sales response window, backed by our New Delhi head office and Mumbai operations base.",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Share your facility requirements — we recommend the right product configuration.",
  },
  {
    step: "02",
    title: "Engineering & Quote",
    description:
      "Detailed technical drawings, specifications and a transparent quotation.",
  },
  {
    step: "03",
    title: "Manufacturing",
    description:
      "Built under quality checkpoints, from raw material to final assembly.",
  },
  {
    step: "04",
    title: "Install & Support",
    description:
      "On-site installation, staff training and ongoing after-sales service.",
  },
];

const contactCards = [
  { icon: Phone, title: "Call Us", value: site.phone, href: site.phoneHref },
  {
    icon: Mail,
    title: "Email Us",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with our team",
    href: `https://wa.me/${site.whatsapp}`,
  },
  { icon: MapPin, title: "Visit Us", value: site.address, href: "/contact" },
];

export default function Home() {
  return (
    <>
      <section className="relative w-full">
        <Image
          src="/bannerdesktop.webp"
          alt="MCD Hospitech — Innovating Care, Enhancing Life"
          width={2006}
          height={784}
          priority
          sizes="100vw"
          className="hidden h-auto w-full md:block"
        />
        <Image
          src="/bannermobile.webp"
          alt="MCD Hospitech — Innovating Care, Enhancing Life"
          width={1122}
          height={1402}
          priority
          sizes="100vw"
          className="block h-auto w-full md:hidden"
        />
      </section>

      <section className="py-15">
        <Container className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-saffron-600">
              <span className="h-px w-6 bg-current" />
              About MCD Hospitech
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {yearsActive}+ Years of Engineering Trusted{" "}
              <span className="text-navy-400">Neonatal, ICU &amp;</span> OT
              Equipment
            </h2>
            <span className="mt-5 block h-1 w-16 rounded-full bg-saffron-500" />

            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in August {site.founded} in New Delhi, MCD Hospitech has
                spent over a decade manufacturing, installing and commissioning
                medical equipment for neonatology, ICU, gynaecology and
                operating theatres across India — as a registered Micro, Small
                &amp; Medium Enterprise (MSME).
              </p>
              <p>
                The company is named in honour of{" "}
                <span className="font-semibold text-navy-800">
                  Maa Chandrakala Devi
                </span>
                , the founder&apos;s mother — a name that carries the same care
                and trust we bring to every hospital we equip.
              </p>
            </div>

            <blockquote className="relative mt-6 rounded-2xl border-l-4 border-saffron-500 bg-navy-50 p-6 pl-10">
              <Quote
                className="absolute left-4 top-5 h-7 w-7 text-saffron-300"
                strokeWidth={1.5}
              />
              <p className="font-display relative text-base font-bold text-navy-900">
                &ldquo;ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः&rdquo;
              </p>
              <p className="relative mt-2 text-sm text-slate-600">
                &ldquo;May all be happy, may all be healthy&rdquo; — the guiding
                philosophy behind our mission to bring innovative, affordable
                medical technology to hospitals and medical institutions.
              </p>
            </blockquote>
          </div>

          <div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-saffron-100 via-transparent to-emerald-100 blur-2xl" />

              <div className="relative z-10 rounded-2xl border-l-4 border-saffron-500 bg-navy-900 p-8 shadow-2xl shadow-navy-900/30">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron-500/15 text-saffron-400">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white">
                    Company Snapshot
                  </p>
                </div>
                <span className="mt-4 block h-0.5 w-10 rounded-full bg-saffron-500" />
                <dl className="mt-4 divide-y divide-white/10">
                  {snapshot.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3.5"
                    >
                      <dt className="flex items-center gap-2.5 text-sm text-white/60">
                        <item.icon className="h-4 w-4 shrink-0 text-saffron-400" />
                        {item.label}
                      </dt>
                      <dd className="font-display text-sm font-bold text-white">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm shadow-navy-900/5"
                >
                  <Icon className="mx-auto h-6 w-6 text-saffron-500" />
                  <p className="font-display mt-2 text-xl font-extrabold text-navy-900">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <div className="mx-4">
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2  lg:grid-cols-4  sm:mx-4">
            {competencies.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 sm:px-4 sm:py-3.5 text-sm font-semibold text-navy-800 shadow-sm shadow-navy-900/5"
              >
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
          <Button href="/about" variant="secondary">
            Read Our Full Story
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Link
            href="/about"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-navy-800"
          >
            Learn more about our journey
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="bg-navy-50 py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Manufacture"
            title="A Complete Hospital Infrastructure Catalogue"
            description={`${categories.length} integrated product families covering every stage of patient care — from the neonatal nursery to the sterile operating theatre.`}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured Products"
            title="Engineered for the Moments That Matter Most"
            description="A snapshot of our flagship product lines — each one built for durability, safety and everyday clinical performance."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map(([categorySlug, subcategorySlug]) => {
              const { subcategory } = getSubcategory(
                categorySlug,
                subcategorySlug,
              );
              if (!subcategory) return null;
              return (
                <ProductCard
                  key={subcategorySlug}
                  categorySlug={categorySlug}
                  subcategory={subcategory}
                />
              );
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/products" variant="secondary">
              View Full Catalogue
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-24">
        <Container>
          <SectionHeading
            eyebrow="Why MCD Hospitech"
            title="Built on Engineering Discipline"
            description="A manufacturing philosophy focused on durability, compliance and long-term serviceability across every product we ship."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm shadow-navy-900/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
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

      <section className="bg-navy-900 py-24">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="From Enquiry to Installation"
            light
            align="center"
          />
          <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-6 left-0 right-0 hidden h-px bg-white/10 lg:block" />
            {process.map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron-500 font-display text-sm font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-display mt-5 text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Talk About Your Hospital's Requirements"
            description="Product specifications, bulk pricing, custom configurations or export enquiries — our team responds within one business day."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(({ icon: Icon, title, value, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group rounded-2xl border border-slate-100 p-6 shadow-sm shadow-navy-900/5 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-saffron-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-4 text-sm font-bold text-navy-900">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-slate-600">
                  {value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="rounded-[2rem] border border-slate-100 p-8 shadow-sm shadow-navy-900/5 lg:col-span-3">
              <ContactForm />
            </div>

            <div className="rounded-[2rem] bg-navy-900 p-8 text-white lg:col-span-2">
              <h3 className="font-display text-lg font-bold">Business Hours</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-saffron-400" />
                    Monday – Saturday
                  </span>
                  <span>9:30 AM – 6:30 PM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-saffron-400" />
                    Sunday
                  </span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="font-display text-sm font-bold">
                  For Urgent Requirements
                </h4>
                <p className="mt-2 text-sm text-white/70">
                  Reach our sales desk directly on WhatsApp for the fastest
                  response on stock availability and pricing.
                </p>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
