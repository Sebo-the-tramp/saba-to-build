import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";

const scheduleItems: Record<
  Locale,
  { time: string; title: string; description: string }[]
> = {
  it: [
    { time: "08:00", title: "Prime light-in", description: "Caffè e focus check rapido." },
    { time: "09:00", title: "Deep work I", description: "Blocchi da 90’. No meeting inutili." },
    { time: "11:00", title: "Reset & boost", description: "Stretch, run o VR break." },
    { time: "13:00", title: "Fuel collective", description: "Pranzo condiviso, progressi in 60 secondi." },
    { time: "14:30", title: "Knowledge drops", description: "Talk spontanei, mentorship 1:1." },
    { time: "16:00", title: "Deep work II", description: "Altri sprint, in crew o soli." },
    { time: "17:30", title: "Show & Ship", description: "Demo, feedback e commit." },
    { time: "18:00", title: "After build", description: "Reset, prossime mosse, brindisi." },
  ],
  en: [
    { time: "08:00", title: "Prime light-in", description: "Coffee and a quick focus check." },
    { time: "09:00", title: "Deep work I", description: "90-minute blocks. No useless meetings." },
    { time: "11:00", title: "Reset & boost", description: "Stretch, run, or VR break." },
    { time: "13:00", title: "Fuel collective", description: "Shared lunch, 60-second updates." },
    { time: "14:30", title: "Knowledge drops", description: "Spontaneous talks, 1:1 mentorship." },
    { time: "16:00", title: "Deep work II", description: "More sprints, squad or solo." },
    { time: "17:30", title: "Show & Ship", description: "Demos, feedback, commits." },
    { time: "18:00", title: "After build", description: "Reset, next moves, toast." },
  ],
};

const principles: Record<Locale, string[]> = {
  it: [
    "Arrivi quando vuoi, ma se entri, dai tutto.",
    "Prenota il tuo posto: vogliamo curare l'energia del gruppo.",
    "Porta rispetto, curiosità e la voglia di condividere ciò che impari.",
  ],
  en: [
    "Arrive when you want, but once inside you go all in.",
    "Reserve your spot: we curate the room's energy.",
    "Bring respect, curiosity, and the urge to share what you learn.",
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
    heading: "Un sabato, una missione.",
    body: "Focus, reset, sharing, ship. Ripeti.",
    cadence: "Ogni due settimane",
    location: "Molina di Fiemme · Via Bolzano 20",
    principleLabel: "Principi",
    guideLabel: "Linea guida",
    guideBody: "Partecipa? Porti energia. Impari? Condividi. Sogni? Inizia qui.",
  },
  en: {
    label: "Schedule",
    heading: "One Saturday, one mission.",
    body: "Focus, reset, share, ship. Repeat.",
    cadence: "Every other Saturday",
    location: "Molina di Fiemme · Via Bolzano 20",
    principleLabel: "Principles",
    guideLabel: "Guideline",
    guideBody: "Join? Bring energy. Learn? Share it. Dream? Start here.",
  },
};

export default function ScheduleSection({ locale }: { locale: Locale }) {
  const copy = scheduleCopy[locale];

  return (
    <section id="orari" className="bg-[#01030a] py-24 text-white min-h-screen">
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

        <div className="mt-16 grid gap-10 lg:grid-cols-[330px,1fr]">
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{copy.cadence}</p>
            <p className="mt-4 font-heading text-3xl">8:00 — 18:00</p>
            <p className="mt-2 text-slate-400">{copy.location}</p>
            {/* <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="font-heading text-xs uppercase tracking-[0.35em] text-primary">Hardware ready</p>
                <p className="mt-2">Spazi modulari, VR, strumenti per maker, zona sport.</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="font-heading text-xs uppercase tracking-[0.35em] text-primary">Crew</p>
                <p className="mt-2">Feedback continuo, accountability, coach sportivi.</p>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            className="relative border-l border-white/10 pl-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/10 to-transparent" />
            <div className="space-y-10">
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
          className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-slate-200 md:grid-cols-2"
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
