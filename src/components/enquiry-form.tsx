"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { business, primaryButton, textLink } from "./design";

const interests = ["General enquiry", "Gold coins", "Silver coins", "Gifting"] as const;
const field = "mt-2 min-h-12 w-full min-w-0 border border-[#a8a096]/45 bg-[#161411] px-3.5 py-3 text-base text-[#f3ede1] transition-colors placeholder:text-[#a69d90] hover:border-[#d8b784]/70";
const label = "block min-w-0 text-sm font-medium text-[#eee3d1]";

export function EnquiryForm() {
  const [interest, setInterest] = useState<(typeof interests)[number]>("General enquiry");
  const [reviewLink, setReviewLink] = useState("");

  useEffect(() => {
    function selectInterest(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const value = event.target.closest<HTMLAnchorElement>("a[data-interest]")?.dataset.interest;
      const selected = interests.find((option) => option === value);

      if (selected) {
        setInterest(selected);
        setReviewLink("");
      }
    }

    document.addEventListener("click", selectInterest);
    return () => document.removeEventListener("click", selectInterest);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name")).trim();
    const phone = String(data.get("phone")).trim();
    const message = String(data.get("message")).trim();
    const nameInput = event.currentTarget.elements.namedItem("name") as HTMLInputElement;

    if (!name) {
      nameInput.setCustomValidity("Enter your name.");
      nameInput.reportValidity();
      return;
    }

    const lines = [
      `Hello Deccan Mint, my name is ${name}.`,
      `I'm interested in: ${interest}.`,
      ...(phone ? [`My phone number is ${phone}.`] : []),
      ...(message ? ["", message] : []),
    ];
    const url = `${business.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;

    setReviewLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      aria-label="Coin enquiry"
      className="grid gap-5"
      onSubmit={submit}
      onChange={() => setReviewLink("")}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <label className={label}>
          Your name
          <input className={field} name="name" autoComplete="name" required maxLength={120} onInput={(event) => event.currentTarget.setCustomValidity("")} />
        </label>
        <label className={label}>
          Phone <span className="font-normal text-[#b9afa0]">(optional)</span>
          <input className={field} name="phone" type="tel" autoComplete="tel" maxLength={32} />
        </label>
      </div>
      <label className={label}>
        I’m interested in
        <span className="relative block">
          <select
            name="interest"
            className={`${field} appearance-none pr-10`}
            value={interest}
            onChange={(event) => {
              const selected = interests.find((option) => option === event.currentTarget.value);
              if (selected) setInterest(selected);
            }}
          >
            {interests.map((option) => <option key={option}>{option}</option>)}
          </select>
          <ChevronDown aria-hidden="true" size={16} className="pointer-events-none absolute right-4 bottom-4 text-[#e2bb81]" />
        </span>
      </label>
      <label className={label}>
        Message <span className="font-normal text-[#b9afa0]">(optional)</span>
        <textarea className={`${field} min-h-24 resize-y`} name="message" rows={3} maxLength={1500} placeholder="Tell us about the coin or occasion you have in mind." />
      </label>
      <button type="submit" className={`${primaryButton} cursor-pointer justify-self-start`}>
        Continue on WhatsApp <ArrowUpRight aria-hidden="true" size={16} />
      </button>
      <p className="text-sm leading-relaxed text-[#b9afa0]">
        Review your message in WhatsApp before sending.{" "}
        <Link href="/privacy" className="underline underline-offset-4 hover:text-[#f3ede1]">Privacy notice</Link>
      </p>
      {reviewLink && (
        <p role="status" className="text-sm text-[#f3ede1]">
          Your message is ready.{" "}
          <a href={reviewLink} target="_blank" rel="noreferrer" className={textLink}>Open it in WhatsApp</a>
        </p>
      )}
    </form>
  );
}
