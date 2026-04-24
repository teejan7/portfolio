"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sub/section-heading";
import { ACHIEVEMENTS, CERTIFICATION } from "@/constants";

export const Proof = () => {
  return (
    <section id="proof" className="section-shell">
      <SectionHeading
        label="Proof of Work"
        title="Hackathon wins, competitive participation, and AI/cloud certifications."
        description="From NASA Space Apps to national hackathon prizes to 15+ certifications across AI, cloud, and generative intelligence — consistent building and learning across multiple domains."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="panel panel-hover p-6 sm:p-7"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl text-white sm:text-3xl">
              Achievements
            </h3>
            <span className="tag">Competitive</span>
          </div>

          <div className="mt-6 space-y-4">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/65 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-100/85">
                    {item.label}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="panel panel-hover p-6 sm:p-7"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl text-white sm:text-3xl">
              Certifications
            </h3>
            <span className="tag">Grouped</span>
          </div>

          <div className="mt-6 rounded-[1.6rem] border border-amber-300/15 bg-amber-300/5 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-100/80">
              {CERTIFICATION.provider}
            </p>
            <h4 className="mt-4 text-2xl font-semibold text-white">
              {CERTIFICATION.title}
            </h4>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {CERTIFICATION.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {CERTIFICATION.focusAreas.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              {CERTIFICATION.note}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
