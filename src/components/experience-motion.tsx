"use client";

import { useEffect } from "react";

const ease = "cubic-bezier(.22,1,.36,1)";

export function ExperienceMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const story = document.querySelector<HTMLElement>("[data-story]");
    const storyArt = story?.querySelector<HTMLElement>("[data-story-art]");
    const animations: Animation[] = [];
    let frame = 0;

    function play(element: Element, keyframes: Keyframe[], duration: number, delay = 0) {
      if (reduced.matches) return;
      const animation = element.animate(keyframes, { duration, delay, easing: ease, fill: "backwards" });
      animations.push(animation);
    }

    if (performance.now() < 1600) {
      document.querySelectorAll("[data-opening]").forEach((element, index) => {
        play(element, [{ opacity: 0, transform: "translateY(-8px)" }, { opacity: 1, transform: "none" }], 700, 60 + index * 65);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const image = entry.target.getAttribute("data-reveal") === "image";
        play(entry.target, image
          ? [{ clipPath: "inset(0 7% 0 7%)", opacity: 0.66 }, { clipPath: "inset(0 0 0 0)", opacity: 1 }]
          : [{ clipPath: "inset(0 0 100% 0)", transform: "translateY(16px)" }, { clipPath: "inset(0 0 0 0)", transform: "none" }],
        image ? 1050 : 900);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

    function updateStory() {
      frame = 0;
      if (!story || reduced.matches || !desktop.matches) return;
      const { top, height } = story.getBoundingClientRect();
      if (top > window.innerHeight || top + height < 0) return;
      const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.67 - top) / (height + window.innerHeight * 0.1)));
      if (storyArt) storyArt.style.transform = `translateY(${(progress - 0.5) * 44}px) scale(1.09)`;
    }

    function queueStory() {
      if (!frame && desktop.matches && !reduced.matches) frame = window.requestAnimationFrame(updateStory);
    }

    function reset() {
      storyArt?.style.removeProperty("transform");
    }

    function preferenceChanged() {
      if (reduced.matches) animations.forEach((animation) => animation.cancel());
      reset();
      queueStory();
    }

    window.addEventListener("scroll", queueStory, { passive: true });
    window.addEventListener("resize", queueStory);
    reduced.addEventListener("change", preferenceChanged);
    desktop.addEventListener("change", preferenceChanged);
    queueStory();

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      animations.forEach((animation) => animation.cancel());
      window.removeEventListener("scroll", queueStory);
      window.removeEventListener("resize", queueStory);
      reduced.removeEventListener("change", preferenceChanged);
      desktop.removeEventListener("change", preferenceChanged);
      reset();
    };
  }, []);

  return null;
}
