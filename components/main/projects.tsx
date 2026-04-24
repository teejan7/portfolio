"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/sub/section-heading";
import { FEATURED_PROJECT, LINKS, SECONDARY_PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        label="Selected Work"
        title="Projects spanning AI, cybersecurity, full-stack web, and embedded systems."
        description="From real-time computer vision to ML-powered security to hardware-software integration — each project solves a distinct real-world problem."
      />

      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="panel panel-hover mt-12 overflow-hidden p-6 sm:p-8"
      >
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="eyebrow">Flagship AI Project</span>

            <h3 className="mt-6 font-display text-3xl leading-tight text-white sm:text-4xl">
              {FEATURED_PROJECT.title}
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              {FEATURED_PROJECT.subtitle}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              {FEATURED_PROJECT.description}
            </p>

            <ul className="mt-8 space-y-3 text-slate-200">
              {FEATURED_PROJECT.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.85)]" />
                  <span className="leading-7">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {FEATURED_PROJECT.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#experience" className="button-primary">
                See Experience
              </Link>
              <Link
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="button-secondary"
              >
                Download Resume
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(103,232,249,0.24),_transparent_58%)] blur-3xl" />

            <div className="relative space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/55 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {FEATURED_PROJECT.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.4rem] border border-white/10 bg-slate-900/70 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/75">
                      {metric.label}
                    </p>
                    <p className="mt-3 font-display text-3xl text-white">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.6rem] border border-amber-300/15 bg-amber-300/5 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-amber-100/80">
                  Real-Time Inference Flow
                </p>

                <div className="mt-5 grid gap-3">
                  {FEATURED_PROJECT.pipeline.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/65 px-4 py-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                        {index + 1}
                      </span>
                      <span className="text-sm text-slate-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      <div className="mt-10 grid gap-5 xl:grid-cols-3">
        {SECONDARY_PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{
              duration: 0.55,
              delay: index * 0.06,
              ease: "easeOut",
            }}
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              className="panel panel-hover group block h-full overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-cyan-300/20 bg-slate-900/75 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-100/85">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {project.description}
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="mt-1 h-5 w-5 shrink-0 text-cyan-200 transition group-hover:text-white" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
