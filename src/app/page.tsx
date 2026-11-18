import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Brand, business, container, display, navigation, primaryButton, textLink } from "@/components/design";
import { EnquiryForm } from "@/components/enquiry-form";
import { ExperienceMotion } from "@/components/experience-motion";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeaderAnchor, HeaderBrand } from "@/components/header-navigation";
import { Hero } from "@/components/hero";
import { MetalViewer } from "@/components/metal-viewer";
import { MobileMenu } from "@/components/mobile-menu";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const label = "text-[11px] leading-relaxed font-semibold tracking-[0.21em] uppercase sm:text-xs";
const heading = `${display} leading-[0.9] tracking-[-0.052em]`;

const guide = [
  { title: "Metal and fineness", description: "Check the stated fineness and identify the mint or manufacturer of the specific coin." },
  { title: "Weight and design", description: "Consider how the weight and design suit the occasion or the collection you’re building." },
  { title: "Price and documentation", description: "Ask for the full price, any applicable charges and the supporting product documents before you buy." },
];

const questions = [
  { question: "Can I buy coins online?", answer: "Our online catalogue is in development. Contact us about availability, current pricing and how to purchase." },
  { question: "What coins can I enquire about?", answer: "Our focus is gold and silver coins. Ask our team about available designs and weights." },
  { question: "How do I confirm a coin’s purity?", answer: "Check the coin’s stated fineness, manufacturer or mint details, and any supporting product documentation or verification markings." },
  { question: "Can you help me choose a coin for a gift?", answer: "Yes. Tell us about the occasion and whether you’re considering gold or silver. We’ll discuss the available options with you." },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#f2d4a5]/17 bg-[#14110e]/95">
      <div className={`${container} flex min-h-[68px] items-center justify-between gap-6 md:min-h-[79px] lg:grid lg:grid-cols-[1fr_auto_1fr]`}>
        <div data-opening>
          <HeaderBrand className="w-[169px] md:w-[209px] lg:justify-self-start" />
        </div>
        <nav data-opening aria-label="Main navigation" className="hidden items-center gap-9 lg:flex xl:gap-12">
          {navigation.map(({ href, label: name }) => (
            <HeaderAnchor key={href} href={href} className="group relative inline-flex min-h-11 items-center text-sm text-[#ded4c5] transition-colors hover:text-[#f0c687]">
              {name}
              <span aria-hidden="true" className="absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-[#d8ad70] motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </HeaderAnchor>
          ))}
        </nav>
        <HeaderAnchor data-opening href="#contact" className="hidden min-h-11 items-center gap-4 rounded-full border border-[#e3b878]/45 px-4.5 text-sm font-medium text-[#f6d9ab] transition-colors hover:border-[#e3b878] hover:bg-[#e3b878] hover:text-[#201710] lg:inline-flex lg:justify-self-end">
          Make an enquiry <ArrowUpRight aria-hidden="true" size={16} />
        </HeaderAnchor>
        <MobileMenu />
      </div>
    </header>
  );
}

function Story() {
  return (
    <section id="story" data-story aria-labelledby="story-title" className="bg-[#dfcfb6] text-[#211912]">
      <div className={`${container} pt-12 pb-10 sm:pt-17 sm:pb-13 lg:pt-21 lg:pb-16`}>
        <div className="grid gap-3 border-t border-[#4d3725]/34 pt-6 md:grid-cols-[1.45fr_1fr] md:items-end md:gap-12 md:pt-8">
          <div>
            <p className={`${label} mb-4 text-[#62442d]`}>The Deccan story</p>
            <h2 id="story-title" data-reveal="text" className={`${heading} pb-3 text-[clamp(3.35rem,7.25vw,7.75rem)]`}>Rooted in <em className="inline-block text-[#795136]">the Deccan.</em></h2>
          </div>
          <p className="max-w-[405px] pb-1 text-base leading-[1.8] text-[#483528] md:pb-3">
            The region gave us our name. Its stone forts, layered plateaus, and living traditions shape how we think about the things people choose to keep.
          </p>
        </div>

        <figure data-reveal="image" className="mt-6 sm:mt-9">
          <div className="relative isolate aspect-[1.45] overflow-hidden bg-[#6f583c] sm:aspect-[2.02] lg:aspect-[2.58]">
            <div data-story-art className="absolute -inset-3 transform-gpu scale-[1.045]">
              <Image
                src="/images/deccan-heritage.jpg"
                alt="The arched stone ramparts and approach to Golconda Fort in Hyderabad"
                fill
                sizes="(min-width: 1480px) 1352px, 100vw"
                className="object-cover object-[center_63%] brightness-[.89] saturate-[.57] sepia-[.22]"
              />
            </div>
          </div>
          <figcaption className="mt-3 flex items-center gap-2 text-xs font-medium text-[#5a4130] sm:mt-4">
            <span aria-hidden="true" className="h-px w-6 bg-[#795136]/70" />
            Golconda Fort, Hyderabad
          </figcaption>
        </figure>

        <div className="mt-6 grid gap-2 border-t border-[#4d3725]/25 pt-5 md:mt-8 md:grid-cols-[1.45fr_1fr] md:items-baseline md:gap-12 md:pt-6">
          <h3 className={`${display} text-3xl leading-tight tracking-[-0.025em] sm:text-4xl`}>A tradition in good hands.</h3>
          <p className="max-w-[455px] text-sm leading-[1.8] text-[#483528] sm:text-base">Deccan Mint, a brand by Sai Surya Gold, honours the place of gold and silver in Indian homes through coins for collecting, gifting, and passing on.</p>
        </div>
      </div>
    </section>
  );
}

function Collection() {
  return (
    <section id="collection" aria-labelledby="collection-title" className="bg-[#151411]">
      <div className={`${container} py-14 sm:py-20 lg:py-26`}>
        <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#b2946a]/30 pb-6 md:mb-10 md:flex-row md:items-end md:pb-8">
          <div>
            <p className={`${label} mb-4 text-[#dcaf73]`}>The metals</p>
            <h2 id="collection-title" data-reveal="text" className={`${heading} pb-2 text-[clamp(3.8rem,8.05vw,8.3rem)]`}>Gold <em className="text-[#e6c292]">&amp;</em> silver</h2>
          </div>
          <p className="max-w-[310px] text-base leading-[1.7] text-[#c9bdac] md:pb-2">Explore both metals, then ask us about available coins, weights, and designs.</p>
        </div>
        <MetalViewer />
      </div>
    </section>
  );
}

function Gifting() {
  return (
    <section id="gifting" aria-labelledby="gifting-title" className="border-y border-[#e4c79a]/15 bg-[#171312]">
      <div className={`${container} py-12 sm:py-17 lg:py-21`}>
        <div className="grid overflow-hidden border border-[#dfb486]/23 bg-[#2c1c19] lg:grid-cols-[1.18fr_1fr]">
          <div className="flex flex-col items-start justify-center px-5 py-8 sm:px-9 sm:py-10 lg:col-start-2 lg:row-start-1 lg:px-[clamp(2.25rem,4vw,4.5rem)]">
            <p className={`${label} mb-4 text-[#e5b88d]`}>Coins for gifting</p>
            <h2 id="gifting-title" data-reveal="text" className={`${heading} pb-3 text-[clamp(3.1rem,5.3vw,6.1rem)]`}>
              A gift worth<br /><em className="text-[#ebc18f]">keeping.</em>
            </h2>
            <p className="mt-3 max-w-[390px] text-base leading-[1.75] text-[#e1cfc2]">For a wedding, a festival, or a new beginning, choose a gold or silver coin with the person and the occasion in mind.</p>
            <a href="#contact" data-interest="Gifting" className={`mt-6 ${primaryButton}`}>Discuss a gift <ArrowUpRight aria-hidden="true" size={17} /></a>
          </div>
          <figure data-reveal="image" className="group relative aspect-[1.4] overflow-hidden bg-[#351913] lg:col-start-1 lg:row-start-1 lg:aspect-auto lg:min-h-[450px]">
            <Image
              src="/images/gifting-atelier.webp"
              alt="An illustrative gold-toned coin in an open burgundy velvet case with a champagne ribbon"
              fill
              sizes="(min-width: 1480px) 730px, (min-width: 1024px) 53vw, 100vw"
              className="object-cover object-[center_53%] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.035]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent px-4 pt-8 pb-3 text-xs text-[#f4e5d5] sm:px-6 sm:pb-4">
              Illustrative gifting concept
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function CoinGuide() {
  return (
    <section id="guide" aria-labelledby="guide-title" className={`${container} py-14 sm:py-19 lg:py-25`}>
      <div className="grid gap-8 border-t border-[#c9a46b]/35 pt-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-15 lg:pt-8">
        <div>
          <p className={`${label} mb-4 text-[#dcaf73]`}>The coin guide</p>
          <h2 id="guide-title" data-reveal="text" className={`${heading} max-w-[530px] pb-3 text-[clamp(3.3rem,6.85vw,7rem)]`}>The details<br /><em className="text-[#e2b780]">worth asking.</em></h2>
        </div>
        <dl>
          {guide.map(({ title, description }) => (
            <div key={title} className="grid gap-2 border-b border-[#c9a46b]/28 py-4 sm:grid-cols-[.95fr_1.1fr] sm:gap-5 sm:py-5 lg:first:pt-0">
              <dt className={`${display} text-3xl leading-tight text-[#f1e6d4] md:text-[2.15rem]`}>{title}</dt>
              <dd className="text-base leading-relaxed text-[#c9bdac]">{description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div id="faq" className="mt-10 grid gap-4 lg:mt-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-15">
        <h3 className={`${label} pt-4 text-[#dcaf73]`}>Frequently asked questions</h3>
        <FaqAccordion questions={questions} />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden border-y border-[#ddb581]/25 bg-[#261b13]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_6%_20%,#564022_0%,transparent_54%)]" />
      <div className={`${container} grid gap-9 py-14 sm:py-18 lg:grid-cols-[1.03fr_.97fr] lg:gap-18 lg:py-24`}>
        <div>
          <p className={`${label} mb-5 text-[#efd2a5]`}>The invitation</p>
          <h2 id="contact-title" data-reveal="text" className={`${heading} pb-4 text-[clamp(3.85rem,8.3vw,8.9rem)]`}>Let’s talk<br /><em className="text-[#f2c78e]">coins.</em></h2>
          <p className="mt-2 max-w-[370px] text-base leading-[1.75] text-[#e2d1bb]">Ask us about current availability, pricing, or a coin for someone special.</p>
          <div className="mt-4 flex flex-wrap gap-x-7">
            <a href={business.phone} className={textLink}>{business.phoneLabel}</a>
            <a href={`mailto:${business.email}`} className={textLink}>{business.email}</a>
          </div>
        </div>
        <div className="border-t border-[#e7bb7d]/36 pt-6 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-11">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const footerLink = "inline-flex min-h-10 items-center gap-2 text-sm text-[#ded1c0] transition-colors hover:text-[#f3c98e]";
  const footerTitle = `${label} mb-2 text-[#e2b878]`;

  return (
    <footer className="bg-[#11100e]">
      <div className={`${container} pt-10 sm:pt-13 lg:pt-15`}>
        <div className="grid gap-x-8 gap-y-7 pb-8 sm:grid-cols-2 sm:pb-10 lg:grid-cols-[1.35fr_0.8fr_1.05fr]">
          <div className="border-b border-[#d4ae74]/22 pb-6 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:pb-0">
            <Brand className="w-[190px] sm:w-[225px]" />
            <p className="mt-3 max-w-[280px] text-sm leading-[1.7] text-[#c7b9a6]">Gold and silver coins for collecting, gifting, and passing on.</p>
          </div>

          <div>
            <h2 className={footerTitle}>Explore</h2>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-3 lg:grid-cols-1">
                {[...navigation, { label: "Gifting", href: "#gifting" }].map(({ href, label: name }) => (
                  <li key={href}><a href={href} className={footerLink}>{name}</a></li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className={footerTitle}>Get in touch</h2>
            <ul>
              <li><a href={business.phone} className={footerLink}><Phone size={15} aria-hidden="true" className="text-[#d4aa75]" />{business.phoneLabel}</a></li>
              <li><a href={`mailto:${business.email}`} className={footerLink}><Mail size={15} aria-hidden="true" className="text-[#d4aa75]" />{business.email}</a></li>
              <li><a href={business.whatsapp} target="_blank" rel="noreferrer" className={footerLink}><MessageCircle size={15} aria-hidden="true" className="text-[#d4aa75]" />Chat on WhatsApp <ArrowUpRight size={13} aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6 border-t border-[#d4ae74]/27 py-3 text-xs text-[#c3b5a2] sm:py-4">
          <p>© 2026 Deccan Mint. All rights reserved.</p>
          <Link href="/privacy" className="inline-flex min-h-10 items-center hover:text-[#f6daad]">Privacy notice</Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div id="home">
      <a href="#main" className="sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#edc485] focus:px-4 focus:py-3 focus:text-[#1c160e] focus:not-sr-only">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Collection />
        <Gifting />
        <CoinGuide />
        <Contact />
      </main>
      <Footer />
      <ExperienceMotion />
    </div>
  );
}
