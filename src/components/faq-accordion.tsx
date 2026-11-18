"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";

type Question = { question: string; answer: string };

export function FaqAccordion({ questions }: { questions: readonly Question[] }) {
  const id = useId();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <div className="border-t border-[#c9a46b]/30">
      {questions.map(({ question, answer }, index) => {
        const open = openQuestion === index;
        const panelId = `${id}-answer-${index}`;

        return (
          <div key={question} className="border-b border-[#c9a46b]/28">
            <h4>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenQuestion((current) => current === index ? null : index)}
                className="group flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-medium text-[#eee3d2] transition-colors hover:text-[#ebc58d] aria-expanded:text-[#ebc58d]"
              >
                {question}
                <Plus aria-hidden="true" size={17} className="shrink-0 text-[#e0b980] motion-safe:transition-transform motion-safe:duration-300 group-aria-expanded:rotate-45" />
              </button>
            </h4>
            <div
              id={panelId}
              aria-hidden={!open}
              className={`grid motion-safe:transition-[grid-template-rows,opacity] motion-safe:duration-300 motion-safe:ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-[540px] pb-5 text-base leading-relaxed text-[#c9bdac]">{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
