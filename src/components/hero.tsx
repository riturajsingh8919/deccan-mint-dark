import { ArrowUpRight } from "lucide-react";
import { getImageProps } from "next/image";
import Link from "next/link";
import { container, display } from "./design";
import { HeroMotion } from "./hero-motion";

const description = "Gold- and silver-toned coin studies with fine topographic engraving, resting on dark stone";

export function Hero() {
  const wide = getImageProps({
    src: "/images/hero-metals.webp",
    alt: description,
    width: 1536,
    height: 854,
    sizes: "(min-width: 1024px) 900px, 90vw",
  }).props;
  const compact = getImageProps({
    src: "/images/hero-metals-compact.webp",
    alt: description,
    width: 1274,
    height: 810,
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
  }).props;

  return (
    <section id="campaign-hero" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#131315] pt-[68px] md:pt-[79px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_48%,#242529_0%,#131315_73%)]" />

      <div className={`${container} pt-8 sm:pt-11 lg:pt-12`}>
        <div className="relative z-10 text-center">
          <p data-hero-eyebrow className="mb-3 text-[10px] leading-relaxed font-semibold tracking-[0.25em] text-[#dfb480] uppercase sm:mb-4 sm:text-xs">The Deccan Mint collection</p>
          <h1 id="hero-title" className={`${display} mx-auto pb-2 text-[clamp(3.15rem,14.2vw,6rem)] leading-[0.86] tracking-[-0.056em] sm:text-[clamp(3.75rem,8.55vw,8rem)]`}>
            <span className="block overflow-hidden pb-[0.11em] sm:inline-block sm:px-[0.02em]">
              <span data-hero-line className="inline-block">Gold <em className="text-[#e9be86]">&amp;</em> silver</span>
            </span>{" "}
            <span className="-mt-1 block overflow-hidden pb-[0.1em] sm:mt-0 sm:inline-block sm:px-[0.04em]">
              <span data-hero-line className="inline-block italic text-[#e8ddcd]">coins.</span>
            </span>
          </h1>
        </div>

        <figure className="relative -mx-5 -mt-3 sm:mx-0 sm:-mt-5 lg:-mt-8">
          <div className="relative mx-auto aspect-[1.48] w-full max-w-[920px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:aspect-[1.95] sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:aspect-[2.07]">
            <div data-hero-drift className="absolute -inset-1 sm:-inset-3">
              <picture data-hero-shot className="block h-full w-full [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_83%,transparent)]">
                <source media="(min-width: 640px)" srcSet={wide.srcSet} sizes={wide.sizes} />
                <img {...compact} alt={description} className="h-full w-full object-cover object-[center_52%] saturate-[0.91]" />
              </picture>
            </div>
          </div>
          <div aria-hidden="true" data-hero-signature className="pointer-events-none absolute inset-x-0 top-[48%] hidden justify-between text-xs font-medium tracking-[0.22em] uppercase lg:flex">
            <span className="flex items-center gap-3 text-[#e4bc87]">Gold <span className="h-px w-5 bg-current/50 xl:w-11" /></span>
            <span className="flex items-center gap-3 text-[#cdd2d7]"><span className="h-px w-5 bg-current/50 xl:w-11" /> Silver</span>
          </div>
          <figcaption className="-mt-4 relative z-10 text-center">
            <Link href="/credits" className="inline-flex min-h-9 items-center px-2 text-[11px] text-[#bfb7ad] underline decoration-white/30 underline-offset-4 hover:text-white">
              Illustrative coin study
            </Link>
          </figcaption>
        </figure>

        <div data-hero-footer className="mt-3 flex flex-col gap-4 border-t border-[#eed2ac]/22 pt-4 pb-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:pt-5 sm:pb-8">
          <p className="max-w-[420px] text-sm leading-[1.7] text-[#d2c7ba] sm:text-base">Gold and silver coins for personal collections, meaningful gifts, and milestones.</p>
          <a href="#collection" className="group inline-flex min-h-12 items-center justify-between gap-7 self-start rounded-full bg-[#e8c38f] py-2.5 pr-3 pl-5 text-sm font-semibold text-[#241a11] transition-colors hover:bg-[#f5d9ad] sm:shrink-0 sm:self-auto sm:pl-6">
            Explore the collection
            <span className="grid size-8 place-items-center rounded-full border border-current/35"><ArrowUpRight size={16} aria-hidden="true" className="motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" /></span>
          </a>
        </div>
      </div>
      <HeroMotion />
    </section>
  );
}
