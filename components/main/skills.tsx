"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sub/section-heading";
import { SKILL_GROUPS } from "@/constants";
import { cn } from "@/lib/utils";

export const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        label="Capability Stack"
        title="A toolkit spanning AI/ML, full-stack web, cloud, and embedded systems."
        description="Skills built through projects, internships, and certifications — covering the full development stack from model training to hardware integration."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {SKILL_GROUPS.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{
              duration: 0.55,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            className={cn(
              "panel panel-hover p-6",
              index === SKILL_GROUPS.length - 1 && "md:col-span-2 xl:col-span-1",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.85)]" />
            </div>

            <h3 className="mt-6 font-display text-xl text-white">
              {group.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {group.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
