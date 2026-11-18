"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { Brand } from "./design";

function scrollToSection(event: MouseEvent<HTMLAnchorElement>, beforeScroll?: () => void) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;

  const hash = event.currentTarget.hash;
  const section = document.getElementById(hash.slice(1));
  if (!hash || !section) return;

  event.preventDefault();
  beforeScroll?.();

  if (window.location.hash !== hash) window.history.pushState(null, "", hash);

  const heading = section.querySelector<HTMLElement>("h1, h2") ?? section;
  heading.tabIndex = -1;
  heading.focus({ preventScroll: true });
  section.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    block: "start",
  });
}

type HeaderAnchorProps = ComponentPropsWithoutRef<"a"> & { beforeScroll?: () => void };

export function HeaderAnchor({ beforeScroll, ...props }: HeaderAnchorProps) {
  return <a {...props} onClick={(event) => scrollToSection(event, beforeScroll)} />;
}

export function HeaderBrand({ className, beforeScroll }: { className?: string; beforeScroll?: () => void }) {
  return <Brand className={className} onClick={(event) => scrollToSection(event, beforeScroll)} />;
}
