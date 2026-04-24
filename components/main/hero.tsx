import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(103,232,249,0.16),_transparent_28%),radial-gradient(circle_at_80%_12%,_rgba(251,191,36,0.12),_transparent_20%),linear-gradient(180deg,rgba(2,6,23,0.2)_0%,rgba(2,6,23,0.84)_72%,rgba(1,4,9,1)_100%)]" />
      </div>

      <div className="absolute left-[-12rem] top-16 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="absolute right-[-10rem] top-24 h-[24rem] w-[24rem] rounded-full bg-amber-300/10 blur-[120px]" />

      <HeroContent />
    </section>
  );
};
