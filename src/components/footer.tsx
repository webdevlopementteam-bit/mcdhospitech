import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { site } from "@/lib/site";
import { categories } from "@/lib/products";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt={site.name}
              width={52}
              height={52}
              className="h-12 w-12 rounded-md object-contain"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold text-white">
                MCD Hospitech
              </span>
              <span className="text-[10px] font-medium tracking-wide text-white/50">
                Innovative Medilife Technologies
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Designing and manufacturing hospital furniture, LED operating
            lights, operating tables and turnkey modular operation theatres
            for healthcare providers across India and beyond.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: LinkedinIcon, href: site.social.linkedin, label: "LinkedIn" },
              { icon: FacebookIcon, href: site.social.facebook, label: "Facebook" },
              { icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
              { icon: YoutubeIcon, href: site.social.youtube, label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-saffron-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
            Product Range
          </h3>
          <ul className="mt-5 space-y-3">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-saffron-400"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "All Products", href: "/products" },
              { label: "Export Range", href: "/export-range" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-saffron-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-saffron-400" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-saffron-400" />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-saffron-400" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} MCD Hospitech. All rights reserved.
          </p>
          <p>Designed for healthcare that never stops.</p>
        </Container>
      </div>
    </footer>
  );
}
