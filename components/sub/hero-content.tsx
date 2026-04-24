"use client";

import {
  ArrowDownTrayIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

import { OrbitalScene } from "@/components/main/orbital-scene";
import { CURRENT_FOCUS, HERO_METRICS, LINKS } from "@/constants";

export const HeroContent = () => {
  return (
    <div className="section-shell relative flex min-h-screen items-center pt-28 pb-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="Welcome-box border border-cyan-300/20 px-4 py-2 text-sm text-cyan-100/90">
            <SparklesIcon className="mr-3 h-5 w-5 text-cyan-200" />
            <span className="tracking-[0.28em] text-[11px] uppercase">
              Computer Science Student | Graduating 2027
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Full-Stack Developer |
            <span className="text-gradient block">
              AI & Cloud Engineer
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I build across the full technology stack — from training ML models for computer vision and cybersecurity to architecting cloud infrastructure, shipping full-stack web applications, and designing embedded systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {CURRENT_FOCUS.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#projects" className="button-primary">
              View Projects
              <ArrowLongRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="button-secondary"
            >
              Download Resume
              <ArrowDownTrayIcon className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + index * 0.08,
                  ease: "easeOut",
                }}
                className="panel panel-hover p-5"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/75">
                  {metric.label}
                </p>
                <p className="mt-3 font-display text-3xl text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {metric.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          className="relative"
        >
          <OrbitalScene />

          <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-4 py-3 backdrop-blur md:left-6 md:top-6">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-100/70">
              Live Signal
            </p>
            <p className="mt-2 font-display text-lg text-white">CPU-Ready ML</p>
          </div>

          <div className="pointer-events-none absolute bottom-4 right-4 rounded-2xl border border-amber-300/20 bg-slate-950/70 px-4 py-3 backdrop-blur md:bottom-6 md:right-6">
            <p className="text-[10px] uppercase tracking-[0.35em] text-amber-100/70">
              Core Build
            </p>
            <p className="mt-2 font-display text-lg text-white">AI + Web + Cloud</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
