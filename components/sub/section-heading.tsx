"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
  centered?: boolean;
  className?: string;
};

export const SectionHeading = ({
  label,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      <span className="eyebrow">{label}</span>
      <h2 className="mt-5 font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
};
