"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { display, navigation, primaryButton } from "./design";
import { HeaderAnchor, HeaderBrand } from "./header-navigation";

export function MobileMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const followingLink = useRef(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches && dialog.current?.open) dialog.current.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function closeForNavigation() {
    followingLink.current = true;
    dialog.current?.close();
  }

  return (
    <div className="lg:hidden">
      <button
        ref={trigger}
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#e2c291]/45 text-[#f5ead9] transition-colors hover:border-[#e2c291]"
        onClick={() => {
          const menu = dialog.current;
          if (!menu) return;
          menu.showModal();
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            menu.animate(
              [{ opacity: 0, transform: "translateY(-22px)" }, { opacity: 1, transform: "none" }],
              { duration: 520, easing: "cubic-bezier(.22,1,.36,1)" },
            );
          }
        }}
      >
        <Menu aria-hidden="true" size={21} strokeWidth={1.5} />
      </button>
      <dialog
        ref={dialog}
        id="mobile-menu"
        aria-labelledby="menu-title"
        onClose={() => {
          if (!followingLink.current) trigger.current?.focus({ preventScroll: true });
          followingLink.current = false;
        }}
        className="fixed inset-0 m-0 max-h-dvh w-full max-w-none overflow-y-auto border-b border-[#a98351]/50 bg-[#1b1713] p-5 text-[#f3ede1] backdrop:bg-black/75 sm:p-10"
      >
        <div className="mb-8 flex items-center justify-between">
          <p id="menu-title" className="sr-only">Deccan Mint navigation</p>
          <HeaderBrand className="w-[169px]" beforeScroll={closeForNavigation} />
          <button
            type="button"
            aria-label="Close menu"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/25"
            onClick={() => dialog.current?.close()}
          >
            <X aria-hidden="true" size={21} strokeWidth={1.5} />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map(({ label, href }) => (
            <HeaderAnchor
              key={href}
              href={href}
              beforeScroll={closeForNavigation}
              className={`flex min-h-17 items-center justify-between border-t border-white/15 text-4xl hover:text-[#e2bb81] ${display}`}
            >
              {label}
              <ArrowUpRight aria-hidden="true" size={17} />
            </HeaderAnchor>
          ))}
          <HeaderAnchor href="#contact" beforeScroll={closeForNavigation} className={`mt-6 w-full ${primaryButton}`}>
            Make an enquiry <ArrowUpRight aria-hidden="true" size={16} />
          </HeaderAnchor>
        </nav>
      </dialog>
    </div>
  );
}
