"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { site } from "@/lib/site";
import { categories } from "@/lib/products";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="hidden bg-navy-900 text-white lg:block">
        <Container className="flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6 text-white/80">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <span className="h-3 w-px bg-white/20" />
            <a href={site.phoneHref} className="hover:text-white">
              {site.phone}
            </a>
          </div>
          <p className="text-white/60">
            ISO 9001 &amp; CE Certified Manufacturer · Made in India
          </p>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt={site.name}
            width={56}
            height={56}
            className="h-12 w-12 rounded-md object-contain sm:h-14 sm:w-14"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-bold text-navy-900">
              MCD Hospitech
            </span>
            <span className="text-[11px] font-medium tracking-wide text-slate-500">
              Innovative Medilife Technologies
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) =>
            item.label === "Products" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-saffron-600",
                    pathname.startsWith("/products") && "text-saffron-600"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {productsOpen ? (
                  <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4">
                    <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-navy-900/10">
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/products/${cat.slug}`}
                          className="rounded-xl px-4 py-3 transition-colors hover:bg-navy-50"
                        >
                          <p className="text-sm font-semibold text-navy-900">
                            {cat.name}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500">
                            {cat.subcategories.length} product lines
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold text-slate-700 hover:text-saffron-600",
                  pathname === item.href && "text-saffron-600"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-navy-800"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700">
              <Phone className="h-4 w-4" />
            </span>
            {site.phone}
          </a>
          <Button href="/contact" className="ml-2">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy-900 hover:bg-navy-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-1 gap-1 border-t border-slate-100 pt-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="rounded-lg px-3 py-2 text-xs font-medium text-slate-500 hover:bg-navy-50 hover:text-navy-800"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <Button href="/contact" className="mt-3 w-full">
              Request a Quote
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
