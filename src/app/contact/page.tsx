import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MCD Hospitech for product enquiries, quotations and export requirements.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: site.phone,
    href: site.phoneHref,
  },
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
  {
    icon: MapPin,
    title: "Visit Us",
    value: site.address,
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 py-20">
        <div className="bg-grid absolute inset-0 opacity-30" />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-saffron-400">
            Contact Us
          </span>
          <h1 className="font-display mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Let&apos;s Talk About Your Hospital&apos;s Requirements
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Product specifications, bulk pricing, custom configurations or
            export enquiries — our team responds within one business day.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(({ icon: Icon, title, value, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeading
                eyebrow="Send an Enquiry"
                title="Request a Product Quotation"
              />
              <div className="mt-8 rounded-[2rem] border border-slate-100 p-8 shadow-sm shadow-navy-900/5">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-[2rem] bg-navy-900 p-8 text-white">
                <h3 className="font-display text-lg font-bold">
                  Business Hours
                </h3>
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
                    Reach our sales desk directly on WhatsApp for the
                    fastest response on stock availability and pricing.
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
          </div>
        </Container>
      </section>
    </>
  );
}
