"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { categories } from "@/lib/products";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 px-8 py-16 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-600" />
        <h3 className="font-display mt-4 text-xl font-bold text-navy-900">
          Thank you — we&apos;ve received your enquiry
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Our team will get back to you within 1 business day with a
          detailed quotation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-navy-900" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Dr. Ramesh Kumar"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-saffron-500 focus:outline-none focus:ring-2 focus:ring-saffron-100"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-navy-900" htmlFor="organisation">
            Hospital / Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            placeholder="City Care Hospital"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-saffron-500 focus:outline-none focus:ring-2 focus:ring-saffron-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-navy-900" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="you@hospital.com"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-saffron-500 focus:outline-none focus:ring-2 focus:ring-saffron-100"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-navy-900" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            placeholder="+91 98765 43210"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-saffron-500 focus:outline-none focus:ring-2 focus:ring-saffron-100"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-navy-900" htmlFor="category">
          Product of Interest
        </label>
        <select
          id="category"
          name="category"
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 focus:border-saffron-500 focus:outline-none focus:ring-2 focus:ring-saffron-100"
        >
          <option value="">Select a product category</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-navy-900" htmlFor="message">
          Your Requirement
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your requirement — quantity, specifications, timeline..."
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 focus:border-saffron-500 focus:outline-none focus:ring-2 focus:ring-saffron-100"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-saffron-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm shadow-saffron-500/20 transition-colors hover:bg-saffron-600 sm:w-auto"
      >
        Submit Enquiry
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
