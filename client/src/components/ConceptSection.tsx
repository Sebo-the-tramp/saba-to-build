import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";

const manifesto: Record<
  Locale,
  {
    title: string;
    description: string;
    accent: string;
  }[]
> = {
  it: [
    {
      title: "Build senza permessi",
      description: "La casa diventa laboratorio. Spazi mobili, prototipi rapidi.",
      accent: "Itera",
    },
    {
      title: "Loop di apprendimento",
      description: "Workshop improvvisati, mentorship tra pari, feedback immediati.",
      accent: "Condividi",
    },
    {
      title: "Energia tribale",
      description: "Tecnologia, sport, cibo. Corpo e mente allineati.",
      accent: "Stai sveglio",
    },
  ],
  en: [
    {
      title: "Build without permissions",
      description: "Home becomes lab. Mobile setups, rapid prototypes.",
      accent: "Iterate",
    },
    {
      title: "Learning loops",
      description: "Pop-up workshops, peer mentorship, instant feedback.",
      accent: "Share",
    },
    {
      title: "Tribal energy",
      description: "Tech, sport, food. Body and mind synced.",
      accent: "Stay awake",
    },
  ],
};

const conceptCopy: Record<
  Locale,
  {
    label: string;
    heading: string;
    body: string;
    promiseLabel: string;
    promiseText: string;
  }
> = {
  it: {
    label: "Manifesto",
    heading: "Costruiamo per chi fa, non per chi guarda.",
    body: "Ogni sabato cambia. Nessun builder resta solo. Le idee devono muoversi.",
    promiseLabel: "Promessa",
    promiseText: "Builder, sognatori, believer. Porta ciò che sai, prendi ciò che serve, lascia un impatto.",
  },
  en: {
    label: "Manifesto",
    heading: "We build for doers, not spectators.",
    body: "Every Saturday shifts. No builder stays solo. Ideas must move.",
    promiseLabel: "Promise",
    promiseText: "Builders, dreamers, believers. Bring what you know, take what you need, leave a dent.",
  },
};

function ManifestoCard({
  title,
  description,
  accent,
  delay,
}: {
  title: string;
  description: string;
  accent: string;
  delay: number;
}) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent opacity-70" />
      <div className="relative space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">{accent}</p>
        <h3 className="text-2xl font-heading text-white">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </motion.div>
  );
}

export default function ConceptSection({ locale }: { locale: Locale }) {
  const copy = conceptCopy[locale];

  return (
    <section id="manifesto" className="relative min-h-screen overflow-hidden bg-[#050714] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,_rgba(114,90,249,0.15),_transparent_45%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-primary/10 to-transparent lg:block" />

      <div className="relative mx-auto w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          className="max-w-3xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{copy.label}</p>
          <h2 className="font-heading text-4xl text-white md:text-5xl">{copy.heading}</h2>
          <p className="text-lg text-slate-300">{copy.body}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {manifesto[locale].map((point, index) => (
            <ManifestoCard
              key={point.title}
              title={point.title}
              description={point.description}
              accent={point.accent}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">{copy.promiseLabel}</p>
          <p className="mt-4 text-2xl text-white">{copy.promiseText}</p>
        </motion.div>
      </div>
    </section>
  );
}
