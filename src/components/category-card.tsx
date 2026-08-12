import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icon-map";
import type { AccentColor, Category } from "@/lib/products";
import { cn } from "@/lib/cn";

const themes: Record<
  AccentColor,
  { card: string; icon: string; count: string; button: string }
> = {
  blue: {
    card: "from-blue-50 to-white border-blue-100",
    icon: "bg-white text-blue-600",
    count: "text-blue-600",
    button:
      "bg-white text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
  },
  green: {
    card: "from-green-50 to-white border-green-100",
    icon: "bg-white text-green-600",
    count: "text-green-600",
    button:
      "bg-white text-green-600 group-hover:bg-green-600 group-hover:text-white",
  },
  orange: {
    card: "from-orange-50 to-white border-orange-100",
    icon: "bg-white text-orange-600",
    count: "text-orange-600",
    button:
      "bg-white text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  },
  purple: {
    card: "from-purple-50 to-white border-purple-100",
    icon: "bg-white text-purple-600",
    count: "text-purple-600",
    button:
      "bg-white text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
  },
  teal: {
    card: "from-teal-50 to-white border-teal-100",
    icon: "bg-white text-teal-600",
    count: "text-teal-600",
    button:
      "bg-white text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
  },
  pink: {
    card: "from-pink-50 to-white border-pink-100",
    icon: "bg-white text-pink-600",
    count: "text-pink-600",
    button:
      "bg-white text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
  },
};

export function CategoryCard({ category }: { category: Category }) {
  const Icon = getIcon(category.icon);
  const theme = themes[category.color];

  return (
    <Link
      href={`/products/${category.slug}`}
      className={cn(
        "group relative flex h-80 flex-col overflow-hidden rounded-2xl border bg-gradient-to-br p-7 shadow-sm shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10",
        theme.card
      )}
    >
      <div
        className={cn(
          "relative z-10 flex h-11 w-11 items-center justify-center rounded-xl shadow-sm shadow-navy-900/5",
          theme.icon
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="relative z-10 mt-5 max-w-[62%]">
        <h3 className="font-display text-xl font-bold text-navy-900">
          {category.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {category.tagline}
        </p>
      </div>

      <div className="relative z-10 mt-auto flex items-end justify-between">
        <span className={cn("text-sm font-bold", theme.count)}>
          {category.subcategories.length} product lines
        </span>
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-md shadow-navy-900/10 transition-colors duration-300",
            theme.button
          )}
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-[85%] w-[62%]">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="320px"
          className="object-contain object-bottom mix-blend-multiply"
        />
      </div>
    </Link>
  );
}
