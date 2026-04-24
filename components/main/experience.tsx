"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sub/section-heading";
import { EXPERIENCE } from "@/constants";

export const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        label="Experience"
        title="Industry internships that strengthened practical skills and cloud exposure."
        description="From Microsoft Azure & AI to real-world IT operations — these experiences added depth to technical execution and deployment familiarity."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {EXPERIENCE.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{
              duration: 0.55,
              delay: index * 0.07,
              ease: "easeOut",
            }}
            className="panel panel-hover p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">
                  {item.type}
                </p>
                <h3 className="mt-4 font-display text-2xl text-white sm:text-3xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-base text-slate-300">{item.company}</p>
              </div>

              <span className="tag">{item.focus}</span>
            </div>

            <ul className="mt-8 space-y-3 text-slate-200">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(252,211,77,0.9)]" />
                  <span className="leading-7">{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
