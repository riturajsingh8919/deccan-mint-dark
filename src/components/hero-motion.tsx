"use client";

import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export function HeroMotion() {
  useLayoutEffect(() => {
    const hero = document.getElementById("campaign-hero");
    const drift = hero?.querySelector<HTMLElement>("[data-hero-drift]");
    const stage = drift?.parentElement;
    if (!hero || !drift || !stage) return;

    const preferences = gsap.matchMedia();
    let playedIntro = false;

    preferences.add("(prefers-reduced-motion: no-preference)", () => {
      if (playedIntro || performance.now() > 1600 || hero.getBoundingClientRect().bottom <= 0) return;
      playedIntro = true;

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .fromTo("[data-hero-shot]", { scale: 1.06, opacity: 0.58 }, { scale: 1, opacity: 1, duration: 1.05, clearProps: "transform,opacity" }, 0)
        .fromTo("[data-hero-eyebrow]", { opacity: 0, y: 7 }, { opacity: 1, y: 0, duration: 0.45, clearProps: "transform,opacity" }, 0.07)
        .fromTo("[data-hero-line]", { yPercent: 98, rotate: 2 }, { yPercent: 0, rotate: 0, stagger: 0.11, duration: 0.8, clearProps: "transform" }, 0.14)
        .fromTo("[data-hero-footer], [data-hero-signature]", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6, clearProps: "transform,opacity" }, 0.36);
    }, hero);

    preferences.add("(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const x = gsap.quickTo(drift, "x", { duration: 0.62, ease: "power3.out" });
      const y = gsap.quickTo(drift, "y", { duration: 0.62, ease: "power3.out" });
      const stageElement = stage;

      function move(event: PointerEvent) {
        const bounds = stageElement.getBoundingClientRect();
        x(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
        y(((event.clientY - bounds.top) / bounds.height - 0.5) * 10);
      }

      function reset() {
        x(0);
        y(0);
      }

      stage.addEventListener("pointermove", move);
      stage.addEventListener("pointerleave", reset);
      return () => {
        stage.removeEventListener("pointermove", move);
        stage.removeEventListener("pointerleave", reset);
      };
    }, hero);

    return () => preferences.revert();
  }, []);

  return null;
}
