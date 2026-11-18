"use client";

import { ArrowUpRight, Maximize2, Minimize2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { display, textLink } from "./design";

const metals = [
  {
    id: "gold",
    label: "Gold",
    interest: "Gold coins",
    description: "From family traditions to personal milestones, gold has long been chosen to mark what matters. Explore available designs and weights with us.",
    alt: "Gold-toned coin study with a finely milled rim and a stepped contour engraved on its face",
    image: "/images/study-gold.webp",
    accent: "text-[#e7bb77]",
  },
  {
    id: "silver",
    label: "Silver",
    interest: "Silver coins",
    description: "A silver coin can start a collection, add to one, or make a considered gift. Tell us what you have in mind and we’ll share the available options.",
    alt: "Silver-toned coin study with concentric engraving and a stepped contour in relief",
    image: "/images/study-silver.webp",
    accent: "text-[#c7d5e1]",
  },
] as const;

export function MetalViewer() {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeMetal = metals[selected];

  function select(index: number) {
    setSelected(index);
    setZoomed(false);
  }

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
        next = (index + 1) % metals.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = metals.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    select(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] md:gap-8 lg:gap-14">
      <div role="tablist" aria-label="Choose a precious metal" className="grid grid-cols-2 self-end border-b border-white/20 md:col-start-2 md:row-start-1">
        {metals.map((metal, index) => (
          <button
            key={metal.id}
            ref={(element) => { tabs.current[index] = element; }}
            type="button"
            role="tab"
            id={`tab-${metal.id}`}
            aria-selected={index === selected}
            aria-controls={`panel-${metal.id}`}
            tabIndex={index === selected ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(event) => handleKey(event, index)}
            className={`flex min-h-13 cursor-pointer items-center justify-center gap-2 border-b-2 px-3 text-sm font-medium transition-colors hover:text-[#fde9c6] ${index === selected ? "border-[#e7bb77] text-[#f3ead9]" : "border-transparent text-[#bcb2a3]"}`}
          >
            <span aria-hidden="true" className={`size-2 rounded-full ${index === 0 ? "bg-[#d5a75f]" : "bg-[#bdc7d0]"}`} />
            {metal.label}
          </button>
        ))}
      </div>

      <div className="relative isolate aspect-[1.2] overflow-hidden bg-[#221c16] sm:aspect-[1.48] md:col-start-1 md:row-span-2 md:row-start-1 md:aspect-auto md:min-h-[380px] lg:min-h-[530px]">
        {metals.map((metal, index) => (
          <Image
            key={metal.id}
            src={metal.image}
            alt={metal.alt}
            aria-hidden={index !== selected}
            fill
            sizes="(min-width: 1480px) 880px, (min-width: 768px) 62vw, 100vw"
            className={`object-cover object-center motion-safe:transition-[transform,opacity] motion-safe:duration-700 motion-safe:ease-out ${index === selected ? "opacity-100" : "pointer-events-none opacity-0"} ${index === selected && zoomed ? "scale-[1.26]" : "scale-100"}`}
          />
        ))}
        <span className="absolute bottom-4 left-4 bg-[#151412]/90 px-2.5 py-1.5 text-[11px] leading-tight text-[#f1e7d6] sm:bottom-6 sm:left-6">Illustrative coin study</span>
        <button
          type="button"
          aria-label={zoomed ? "Reset coin zoom" : "Inspect coin detail"}
          aria-pressed={zoomed}
          onClick={() => setZoomed(!zoomed)}
          className="absolute right-4 bottom-4 grid size-11 cursor-pointer place-items-center border border-white/50 bg-[#141311]/85 text-white transition-colors hover:bg-[#f0e3ca] hover:text-[#191512] sm:right-6 sm:bottom-6"
        >
          {zoomed ? <Minimize2 aria-hidden="true" size={18} /> : <Maximize2 aria-hidden="true" size={18} />}
        </button>
      </div>

      <div className="md:col-start-2">
        {metals.map((metal) => (
          <div
            key={metal.id}
            id={`panel-${metal.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${metal.id}`}
            hidden={metal.id !== activeMetal.id}
            className="max-w-[395px] pb-3 md:pt-4"
          >
            <h3 className={`${display} ${metal.accent} text-[clamp(3.4rem,6vw,6.1rem)] leading-[0.9] tracking-[-.05em]`}>{metal.interest}.</h3>
            <p className="mt-5 text-base leading-[1.85] text-[#c4b9ab]">{metal.description}</p>
            <a href="#contact" data-interest={metal.interest} className={`mt-5 ${textLink}`}>
              Enquire about {metal.label.toLowerCase()} <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
