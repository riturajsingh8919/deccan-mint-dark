import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Brand, container, display, textLink } from "@/components/design";

export const metadata: Metadata = { title: "Photography credits", alternates: { canonical: "/credits" } };

const photographs = [
  { name: "Golconda Fort, Hyderabad", author: "Anand Ramavath", href: "https://unsplash.com/photos/em6e6FJB3oQ" },
];

export default function Credits() {
  return (
    <main className={`${container} py-10 sm:py-16`}>
      <Brand className="w-[210px]" />
      <div className="mt-8 max-w-[640px]">
        <Link href="/" className={textLink}><ArrowLeft aria-hidden="true" size={16} /> Deccan Mint home</Link>
        <h1 className={`${display} mt-5 text-5xl tracking-tight sm:text-7xl`}>Photography credits</h1>
        <p className="mt-6 text-base leading-relaxed text-[#cbbfaf]">The campaign, metal studies, and gifting concept are AI-generated illustrations. The Golconda Fort photograph is credited below. Ask Deccan Mint for imagery of available coins.</p>
        <ul className="mt-6 border-t border-[#d2af76]/25">
          {photographs.map(({ name, author, href }) => (
            <li className="border-b border-[#d2af76]/25 py-2" key={href}>
              <a href={href} target="_blank" rel="noreferrer" className={textLink}>{name} <ArrowUpRight aria-hidden="true" size={14} /></a>
              <p className="pb-2 text-sm text-[#cbbfaf]">{author}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
