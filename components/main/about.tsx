"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { SectionHeading } from "@/components/sub/section-heading";
import { ABOUT_POINTS, CURRENT_FOCUS, FOCUS_AREAS } from "@/constants";

export const About = () => {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        label="Mission Profile"
        title="Building across the full technology stack — from AI models to cloud infrastructure to embedded systems."
        description="My work spans computer vision, cybersecurity ML, full-stack web applications, and hardware-software integration. The goal is building intelligent systems that solve real problems with practical deployment in mind."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="panel panel-hover p-6 sm:p-8"
        >
          <ul className="space-y-4 text-base leading-7 text-slate-200">
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <span key={area} className="tag">
                {area}
              </span>
            ))}
          </div>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="panel panel-hover overflow-hidden p-6"
        >
          <div className="relative h-full rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-900/70">
                <Image
                  src="/t.jpg"
                  alt="Teejan Teepee"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                  Explorer ID
                </p>
                <h3 className="mt-2 font-display text-2xl text-white">
                  Teejan Teepee
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Computer Science student graduating in 2027.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-amber-300/15 bg-amber-300/5 p-5">
              <p className="text-xs uppercase tracking-[0.32em] text-amber-200/85">
                Anchor Project
              </p>
              <h4 className="mt-3 text-xl font-semibold text-white">
                ASL Vision
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Accessibility-focused sign language recognition with fast
                response time, CPU-friendly inference, and a backend ready for
                real-time use.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
                Current Orbit
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CURRENT_FOCUS.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};
