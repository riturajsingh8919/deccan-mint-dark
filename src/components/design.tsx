import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

export const container = "mx-auto w-full max-w-[1480px] px-5 sm:px-10 lg:px-14 2xl:px-16";
export const display = "font-(family-name:--font-editorial) font-medium";
export const button = "inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors sm:px-6";
export const primaryButton = `${button} bg-[#dbb77a] text-[#1c160e] hover:bg-[#f0d39e]`;
export const textLink = "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#e2bb81] underline decoration-[#e2bb81]/35 underline-offset-8 transition-colors hover:text-[#fff1d7] hover:decoration-current";

export const navigation = [
  { label: "Our story", href: "#story" },
  { label: "Gold & silver", href: "#collection" },
  { label: "Coin guide", href: "#guide" },
];

export const business = {
  phoneLabel: "+91 90306 09236",
  phone: "tel:+919030609236",
  email: "info@deccanmint.com",
  whatsapp: "https://wa.me/919030609236",
};

export function Brand({ className = "", onClick }: { className?: string; onClick?: MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <Link href="/#home" onClick={onClick} aria-label="Deccan Mint home" className={`inline-flex shrink-0 ${className}`}>
      <Image
        src="/logo.png"
        alt=""
        width={1000}
        height={187}
        unoptimized
        className="h-auto w-full"
      />
    </Link>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium tracking-[0.19em] text-[#e0b980] uppercase">
      <span aria-hidden="true" className="h-px w-7 shrink-0 bg-[#c3922e]" />
      {children}
    </p>
  );
}
