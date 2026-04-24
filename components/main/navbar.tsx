"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="#hero"
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 font-display text-sm text-cyan-100">
              TT
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Teejan Teepee</p>
              <p className="text-xs text-slate-400">
                AI & Cloud Engineer | Full-Stack Developer
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-cyan-300/25 hover:text-white"
                aria-label={name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}

            <Link
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="button-secondary !px-4 !py-2.5 text-sm"
            >
              Resume
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-cyan-300/20 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/90 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.5)] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl border border-transparent px-4 py-3 text-slate-200 transition hover:border-cyan-300/20 hover:bg-cyan-300/5"
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="mt-5 flex flex-wrap gap-3">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}

              <Link
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setIsMobileMenuOpen(false)}
                className="button-secondary !px-4 !py-2.5 text-sm"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
