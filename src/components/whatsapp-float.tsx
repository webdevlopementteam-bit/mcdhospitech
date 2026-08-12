import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
          <path d="M16.02 3C9.4 3 4.03 8.36 4.03 15c0 2.23.6 4.32 1.66 6.12L3 29l8.1-2.63A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.64 28 15S22.64 3 16.02 3Zm0 21.7c-1.93 0-3.75-.5-5.33-1.4l-.38-.22-4.8 1.56 1.57-4.68-.25-.4A9.65 9.65 0 0 1 5.35 15c0-5.9 4.78-10.68 10.67-10.68 5.9 0 10.68 4.78 10.68 10.68 0 5.9-4.78 10.7-10.68 10.7Zm5.87-8.02c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.5-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.7.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.02-.55-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.72-.55h-.61c-.21 0-.55.08-.84.4-.28.32-1.1 1.08-1.1 2.62 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.76.33 1.35.52 1.81.67.76.24 1.45.2 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.21-.61-.37Z" />
        </svg>
      </a>
      <a
        href={site.phoneHref}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-white shadow-lg shadow-navy-900/30 transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
