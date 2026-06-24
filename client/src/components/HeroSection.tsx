import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";

const instagramUrl = "https://www.instagram.com/saba_to_build/";

const heroCopy: Record<
  Locale,
  {
    season: string;
    location: string;
    title: string;
    accent: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    meta: string;
    note: string;
  }
> = {
  it: {
    season: "Prossimo incontro",
    location: "Val di Fiemme",
    title: "Per chi costruisce.",
    accent: "Per i sognatori.",
    subtitle: "Persone. Idee. Movimento.",
    primaryCta: "Programma",
    secondaryCta: "DM Instagram",
    meta: "Sabato 26 · 14:00 → 20:00",
    note: "Arriva con un'idea, esci con qualcosa che si muove. Dalle 18 il ritmo diventa piu leggero.",
  },
  en: {
    season: "Next meetup",
    location: "Val di Fiemme",
    title: "For the ones who build.",
    accent: "For the dreamers.",
    subtitle: "People. Ideas. Movement.",
    primaryCta: "Schedule",
    secondaryCta: "DM Instagram",
    meta: "Saturday 26th · 14:00 → 20:00",
    note: "Arrive with an idea, leave with something in motion. From 18:00, the rhythm gets lighter.",
  },
};

export default function HeroSection({ locale }: { locale: Locale }) {
  const copy = heroCopy[locale];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };
  const openInstagram = () => window.open(instagramUrl, "_blank", "noopener,noreferrer");

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#03050f] py-28 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_rgba(255,255,255,0.1),_transparent_58%)] opacity-70" />
      </div>

      <div className="relative mx-auto w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
            {copy.season} · {copy.location}
          </p>
          <h1 className="mt-8 font-heading text-5xl leading-tight sm:text-6xl lg:text-7xl">
            {copy.title}
            <span className="block text-primary">{copy.accent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">{copy.subtitle}</p>
          <p className="mt-5 text-sm uppercase tracking-[0.25em] text-slate-500">{copy.meta}</p>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300">{copy.note}</p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              className="h-12 bg-primary px-7 text-xs text-white font-heading tracking-[0.18em] uppercase sm:text-sm"
              onClick={() => scrollToSection("orari")}
            >
              {copy.primaryCta}
            </Button>
            <Button
              variant="outline"
              className="h-12 border-white/30 px-7 text-xs text-white font-heading tracking-[0.18em] uppercase hover:bg-white/10 sm:text-sm"
              onClick={openInstagram}
            >
              {copy.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
