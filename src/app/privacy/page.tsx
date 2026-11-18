import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Brand, business, container, display, textLink } from "@/components/design";

export const metadata: Metadata = { title: "Privacy notice", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <main className={`${container} py-10 sm:py-16`}>
      <Brand className="w-[210px]" />
      <div className="mt-8 max-w-[640px]">
        <Link href="/#contact" className={textLink}><ArrowLeft aria-hidden="true" size={16} /> Back to enquiries</Link>
        <h1 className={`${display} mt-5 text-5xl tracking-tight sm:text-7xl`}>Privacy notice</h1>
        <div className="mt-7 space-y-7 text-base leading-relaxed text-[#cbbfaf]">
          <section>
            <h2 className="mb-2 font-medium text-[#f3ede1]">Preparing an enquiry</h2>
            <p>This website uses the information you enter to prepare a WhatsApp message in your browser. The website does not store your form entries or send the message for you. In WhatsApp, you can review the message and choose whether to send it.</p>
          </section>
          <section>
            <h2 className="mb-2 font-medium text-[#f3ede1]">Contacting Deccan Mint</h2>
            <p>We use the information you choose to share to respond and discuss your enquiry. If you have a question about the information you shared, email <a className="text-[#e2bb81] underline underline-offset-4" href={`mailto:${business.email}`}>{business.email}</a>.</p>
          </section>
          <section>
            <h2 className="mb-2 font-medium text-[#f3ede1]">Third-party services</h2>
            <p>WhatsApp handles information under its own <a className="text-[#e2bb81] underline underline-offset-4" href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">privacy policy</a>. Hosting providers may process standard technical request information to serve and protect the site.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
