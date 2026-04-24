import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer id="contact" className="section-shell pb-10 pt-6">
      <div className="panel overflow-hidden p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="mt-5 font-display text-3xl leading-tight text-white sm:text-4xl">
              Open to internships, collaborations, and open source.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              If you&apos;re hiring for AI/ML, full-stack development, cloud engineering,
              or embedded systems, I&apos;d love to connect.
            </p>
          </div>

          {FOOTER_DATA.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm uppercase tracking-[0.35em] text-cyan-200/75">
                {column.title}
              </h3>
              <div className="mt-5 flex flex-col gap-3">
                {column.data.map(({ name, link }) => {
                  const isExternal =
                    link.startsWith("http") ||
                    link.startsWith("mailto:") ||
                    link.endsWith(".pdf");

                  return (
                    <Link
                      key={`${column.title}-${name}`}
                      href={link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer noopener" : undefined}
                      className="text-base text-slate-300 transition hover:text-white"
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Teejan Teepee. All rights reserved.</p>
          <p>Built with Next.js, motion, and a space-inspired AI portfolio system.</p>
        </div>
      </div>
    </footer>
  );
};
