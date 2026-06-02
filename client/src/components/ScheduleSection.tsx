import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";

const scheduleItems: Record<
  Locale,
  { time: string; title: string; description: string }[]
> = {
  it: [
    { time: "14:00", title: "Arriva quando vuoi", description: "Porta un'idea, un progetto o anche solo curiosita." },
    { time: "16:00", title: "Build + sport", description: "Si lavora, ci si confronta, ci si muove un po'." },
    { time: "18:00", title: "Drinks", description: "Ci fermiamo, beviamo qualcosa e parliamo senza scaletta." },
  ],
  en: [
    { time: "14:00", title: "Come when you prefer", description: "Bring an idea, a project, or just curiosity." },
    { time: "16:00", title: "Build + sport", description: "Work, compare notes, move a little." },
    { time: "18:00", title: "Drinks", description: "We pause, have something to drink, and talk without a script." },
  ],
};

const principles: Record<Locale, string[]> = {
  it: [
    "Vieni quando preferisci.",
    "Non serve invito.",
    "Se hai dubbi, scrivici su Instagram.",
  ],
  en: [
    "Come whenever you prefer.",
    "No invitation needed.",
    "If you have questions, DM us on Instagram.",
  ],
};

const scheduleCopy: Record<
  Locale,
  {
    label: string;
    heading: string;
    body: string;
    cadence: string;
    location: string;
    principleLabel: string;
    guideLabel: string;
    guideBody: string;
  }
> = {
  it: {
    label: "Programma",
    heading: "Un sabato diverso.",
    body: "14:00 → 22:00. Vieni quando preferisci.",
    cadence: "Prossimo incontro",
    location: "Molina di Fiemme · Via Bolzano 20",
    principleLabel: "Come funziona",
    guideLabel: "Instagram",
    guideBody: "Per controllare il prossimo incontro o chiederci qualcosa, scrivici su @saba_to_build.",
  },
  en: {
    label: "Schedule",
    heading: "A different Saturday.",
    body: "14:00 → 22:00. Come whenever you prefer.",
    cadence: "Next meetup",
    location: "Molina di Fiemme · Via Bolzano 20",
    principleLabel: "How it works",
    guideLabel: "Instagram",
    guideBody: "To check the next meetup or ask anything, DM @saba_to_build.",
  },
};

export default function ScheduleSection({ locale }: { locale: Locale }) {
  const copy = scheduleCopy[locale];

  return (
    <section id="orari" className="bg-[#01030a] py-16 text-white">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{copy.label}</p>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl">{copy.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">{copy.body}</p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[330px,1fr]">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{copy.cadence}</p>
            <p className="mt-4 font-heading text-3xl">14:00 → 22:00</p>
            <p className="mt-2 text-slate-400">{copy.location}</p>
          </motion.div>

          <motion.div
            className="relative border-l border-white/10 pl-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/10 to-transparent" />
            <div className="space-y-8">
              {scheduleItems[locale].map((item, index) => (
                <div key={item.title} className="relative pl-10">
                  <span className="absolute left-0 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[#01030a] font-heading text-xs">
                    {index + 1}
                  </span>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{item.time}</p>
                  <h3 className="mt-2 text-xl font-heading">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-slate-200 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">{copy.principleLabel}</p>
            <ul className="mt-4 space-y-3 text-base text-slate-300">
              {principles[locale].map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-primary/10 to-transparent p-6">
            <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">{copy.guideLabel}</p>
            <p className="mt-4 text-lg text-white">{copy.guideBody}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
