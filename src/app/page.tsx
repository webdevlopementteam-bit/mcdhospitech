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

      <section className="relative overflow-hidden bg-[#f4f8fa] py-20 sm:py-24 lg:py-28">
        {/* =========================================================
      BACKGROUND
  ========================================================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#dceff1] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#fff0dc] blur-3xl" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#123f8a 1px, transparent 1px), linear-gradient(90deg, #123f8a 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <Container>
          <div className="relative">
            {/* =====================================================
          TOP HEADER
      ===================================================== */}
            <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-5 inline-flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#34acb1]" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#34acb1]">
                    Get In Touch
                  </span>
                </div>

                <h2 className="font-display max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-[#0b326d] sm:text-5xl lg:text-[3.6rem]">
                  Let's Build the Right
                  <span className="relative ml-2 inline-block text-[#34acb1]">
                    Hospital Solution.
                    <span className="absolute -bottom-2 left-0 h-1 w-1/2 rounded-full bg-[#ff9933]" />
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-slate-500 lg:pb-2 lg:text-base">
                Product specifications, bulk pricing, custom configurations and
                export enquiries — tell us what your hospital needs and our team
                will help you find the right solution.
              </p>
            </div>

            {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
            <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.5fr]">
              {/* ===================================================
            LEFT — CONTACT INFORMATION
        =================================================== */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#0b326d] p-7 text-white shadow-2xl shadow-[#0b326d]/15 sm:p-9">
                {/* Decorative shape */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/[0.04]" />

                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#34acb1]/10 blur-2xl" />

                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffb15c]">
                    Talk To Our Team
                  </p>

                  <h3 className="font-display mt-3 max-w-sm text-2xl font-bold leading-tight sm:text-3xl">
                    We're here to help with your hospital requirements.
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/55">
                    Connect with our team for product details, quotations,
                    availability and customised hospital equipment solutions.
                  </p>

                  {/* -----------------------------------------------
                CONTACT ITEMS
            ----------------------------------------------- */}
                  <div className="mt-9 space-y-3">
                    {contactCards.map(({ icon: Icon, title, value, href }) => (
                      <a
                        key={title}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-[#34acb1]/40 hover:bg-white/[0.09]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#34acb1]/15 text-[#63d2d5] transition-all duration-300 group-hover:bg-[#34acb1] group-hover:text-white">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/35">
                            {title}
                          </p>

                          <p className="mt-1 truncate text-sm font-medium text-white/85">
                            {value}
                          </p>
                        </div>

                        <span className="ml-auto text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-[#ff9933]">
                          →
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* -----------------------------------------------
                BUSINESS HOURS MINI PANEL
            ----------------------------------------------- */}
                  <div className="mt-7 border-t border-white/10 pt-7">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb15c]">
                          Working Hours
                        </p>

                        <p className="mt-2 text-sm font-semibold text-white">
                          Monday – Saturday
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-bold text-white">9:30 AM</p>

                        <p className="text-xs text-white/40">to 6:30 PM</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute h-full w-full animate-ping rounded-full bg-[#34acb1] opacity-60" />
                        <span className="relative h-2 w-2 rounded-full bg-[#34acb1]" />
                      </span>

                      <span className="text-[11px] text-white/45">
                        Our sales team is available during working hours
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs text-white/40">Sunday</span>

                      <span className="rounded-full bg-white/5 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white/35">
                        Closed
                      </span>
                    </div>
                  </div>

                  {/* -----------------------------------------------
                TRUST LINE
            ----------------------------------------------- */}
                  <div className="mt-7 flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/10" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                      Hospital Equipment
                    </span>

                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                </div>
              </div>

              {/* ===================================================
            RIGHT — ENQUIRY FORM
        =================================================== */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-[#0b326d]/5 sm:p-10">
                {/* Top color bar */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#34acb1] via-[#123f8a] to-[#ff9933]" />

                {/* Decorative corner */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#34acb1]/5" />

                <div className="relative">
                  {/* Form Heading */}
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f6f7] px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#34acb1]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#247f83]">
                          Send An Enquiry
                        </span>
                      </div>

                      <h3 className="font-display mt-4 text-2xl font-bold text-[#0b326d] sm:text-3xl">
                        Tell Us What You Need
                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                        Share your requirements and our team will get back to
                        you with suitable products and pricing.
                      </p>
                    </div>

                    {/* Small badge */}
                    <div className="hidden rounded-2xl border border-[#ff9933]/20 bg-[#fff7ed] px-4 py-3 text-right sm:block">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#c66a00]">
                        Response
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#0b326d]">
                        Within 1 Business Day
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-100" />

                    <div className="flex gap-1">
                      <span className="h-1 w-6 rounded-full bg-[#34acb1]" />
                      <span className="h-1 w-2 rounded-full bg-[#ff9933]" />
                    </div>

                    <div className="h-px flex-1 bg-slate-100" />
                  </div>

                  {/* Form */}
                  <ContactForm />

                  {/* Bottom note */}
                  <div className="mt-7 flex items-start gap-3 border-t border-slate-100 pt-5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#e8f6f7] text-[#34acb1]">
                      ✓
                    </div>

                    <p className="text-xs leading-5 text-slate-400">
                      Your enquiry is handled by our sales team. We can assist
                      with product specifications, bulk orders, customised
                      configurations and export requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
          BOTTOM CTA STRIP
      ===================================================== */}
            <div className="relative mt-8 overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-slate-900/5">
              <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0dc] text-[#ff9933]">
                    <MessageCircle className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#0b326d]">
                      Need an immediate response?
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Chat directly with our sales team on WhatsApp.
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff9933] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#ff9933]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f28b20] hover:shadow-xl"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Bottom accent */}
              <div className="flex h-1">
                <div className="flex-1 bg-[#34acb1]" />
                <div className="w-24 bg-[#123f8a]" />
                <div className="w-16 bg-[#ff9933]" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
