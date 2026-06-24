import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";

const experiences: Record<
  Locale,
  {
    title: string;
    description: string;
    highlights: string[];
    accent: string;
  }[]
> = {
  it: [
    {
      title: "Deep Work Labs",
      description: "Focus-room, VR e hardware condiviso. Blocchi da 90 minuti.",
      highlights: ["Silenzio sacro", "Crew pronta", "Demo immediate"],
      accent: "Sprints",
    },
    {
      title: "Knowledge Drops",
      description: "Skill swap continuo. Meno slide, piu pratica.",
      highlights: ["Mentorship lampo", "Feedback chiaro", "Zero palco"],
      accent: "Learning",
    },
    {
      title: "Movement & Reset",
      description: "BirkenGym, bosco, respiro. Corpo presente, mente lucida.",
      highlights: ["Allenamento breve", "Reset mentale", "Energia sostenibile"],
      accent: "Energy",
    },
    {
      title: "Fuel & Build Stories",
      description: "Pranzo condiviso, storie brevi, accordi presi sul serio.",
      highlights: ["Food collective", "Story tracking", "Accountability"],
      accent: "Community",
    },
  ],
  en: [
    {
      title: "Deep Work Labs",
      description: "Focus rooms, VR, shared hardware. 90-minute blocks.",
      highlights: ["Sacred silence", "Crew on call", "Instant demos"],
      accent: "Sprints",
    },
    {
      title: "Knowledge Drops",
      description: "Constant skill swaps. Fewer slides, more practice.",
      highlights: ["Flash mentorship", "Clear feedback", "Zero stage"],
      accent: "Learning",
    },
    {
      title: "Movement & Reset",
      description: "BirkenGym, woods, breathwork. Body present, mind clear.",
      highlights: ["Short training", "Mental reset", "Sustainable energy"],
      accent: "Energy",
    },
    {
      title: "Fuel & Build Stories",
      description: "Shared lunch, short stories, commitments that matter.",
      highlights: ["Food collective", "Story tracking", "Accountability"],
      accent: "Community",
    },
  ],
};

const activitiesCopy: Record<
  Locale,
  {
    label: string;
    heading: string;
    body: string;
    badge: string;
    closing: string;
  }
> = {
  it: {
    label: "Esperienze",
    heading: "Ogni sabato è un loop completo.",
    body: "Focus, coaching, movimento, condivisione. Scegli il ritmo e costruisci con intenzione.",
    badge: "Bold builders",
    closing: "Porta strumento e curiosita. I moduli nascono da chi partecipa. Il pomeriggio prende forma insieme.",
  },
  en: {
    label: "Experiences",
    heading: "Every Saturday is a full loop.",
    body: "Focus, coaching, movement, sharing. Choose the pace and build with intention.",
    badge: "Bold builders",
    closing: "Bring your gear and curiosity. The modules come from the people in the room. The afternoon takes shape together.",
  },
};

function ExperienceCard({
  title,
  description,
  highlights,
  accent,
  index,
}: {
  title: string;
  description: string;
  highlights: string[];
  accent: string;
  index: number;
}) {
  return (
    <motion.div
      className="relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#070b1b] p-8 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
      <div className="relative flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-400">
        <span>{accent}</span>
        <span className="text-slate-600">/0{index + 1}</span>
      </div>
      <h3 className="relative mt-6 font-heading text-2xl">{title}</h3>
      <p className="relative mt-4 text-slate-300">{description}</p>
      <ul className="relative mt-6 space-y-2 text-sm text-slate-300">
        {highlights.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="text-primary">
              <i className="bx bx-chevron-right text-xl" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ActivitiesSection({ locale }: { locale: Locale }) {
  const copy = activitiesCopy[locale];

  return (
    <section id="attivita" className="bg-[#02040a] py-24 min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{copy.label}</p>
          <h2 className="mt-4 font-heading text-4xl text-white md:text-5xl">{copy.heading}</h2>
          <p className="mt-5 text-lg text-slate-300">{copy.body}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {experiences[locale].map((experience, index) => (
            <ExperienceCard key={experience.title} {...experience} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-3xl border border-primary/30 bg-primary/10 p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="font-heading text-sm uppercase tracking-[0.4em] text-primary">{copy.badge}</p>
          <p className="mt-3 text-xl text-white">{copy.closing}</p>
        </motion.div>
      </div>
    </section>
  );
}
