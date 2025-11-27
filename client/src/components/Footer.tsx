import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";

const footerCopy: Record<
  Locale,
  {
    introLabel: string;
    introBody: string;
    coordLabel: string;
    coordBody: string;
    coordTime: string;
    rights: string;
  }
> = {
  it: {
    introLabel: "Saba-to-build",
    introBody: "Per chi non smette di inseguire l'impossibile. Ci vediamo ogni due settimane.",
    coordLabel: "Coordinate",
    coordBody: "Via Bolzano 20 · 38030 Molina di Fiemme",
    coordTime: "sabato 8:00 — 18:00 · ogni due settimane",
    rights: "Tutti i diritti riservati · costruiamo con cura.",
  },
  en: {
    introLabel: "Saba-to-build",
    introBody: "For anyone chasing the impossible. See you every other Saturday.",
    coordLabel: "Coordinates",
    coordBody: "Via Bolzano 20 · 38030 Molina di Fiemme",
    coordTime: "Saturday 8:00 — 18:00 · every other week",
    rights: "All rights reserved · we build with care.",
  },
};

export default function Footer({ locale }: { locale: Locale }) {
  const copy = footerCopy[locale];

  return (
    <footer className="border-t border-white/10 bg-[#010103] py-12 text-slate-300">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">{copy.introLabel}</p>
            <p className="mt-3 text-lg text-white">{copy.introBody}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">{copy.coordLabel}</p>
            <p className="mt-3">{copy.coordBody}</p>
            <p className="mt-1">{copy.coordTime}</p>
          </motion.div>

          <motion.div
            className="text-left md:text-right"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">© {new Date().getFullYear()}</p>
            <p className="mt-3">{copy.rights}</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
