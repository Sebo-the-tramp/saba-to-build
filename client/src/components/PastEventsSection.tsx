import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { mediaAssets } from "@/lib/assets";

const launches = [
  {
    id: "kick-off-2025-06-07",
    date: "7 Giugno 2025",
    title: "Kick-off manifesto",
    description: "Prima accensione ufficiale del laboratorio estivo, demo Wellround e installazione HPC.",
    tags: ["kick-off", "community"],
    imageUrl: mediaAssets.spazio,
  },
  {
    id: "second-saturday-2025-06-20",
    date: "20 Giugno 2025",
    title: "Costruiamo Wellround",
    description: "Sprint collettivo per il prodotto, coaching design system, beta test su VR room.",
    tags: ["product", "design"],
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mastermind-2025-07-05",
    date: "5 Luglio 2025",
    title: "Mastermind + sport edition",
    description: "Coaching tra builder, pitch session, workout guidato da BirkenGym nel bosco.",
    tags: ["mastermind", "sport"],
    imageUrl: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
  },
];

function LaunchCard({
  id,
  date,
  title,
  description,
  tags,
  imageUrl,
  index,
}: {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  index: number;
}) {
  return (
    <Link href={`/evento/${id}`}>
      <motion.article
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 * index }}
      >
        <div className="relative h-56 overflow-hidden">
          <img src={imageUrl} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute top-4 left-4 rounded-full border border-white/30 bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.3em]">
            {date}
          </span>
        </div>
        <div className="space-y-4 p-6">
          <h3 className="font-heading text-2xl">{title}</h3>
          <p className="text-slate-300">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} className="border-white/20 bg-white/5 text-xs uppercase tracking-[0.2em]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function PastEventsSection() {
  return (
    <section id="eventi-passati" className="bg-[#04040e] py-24 text-white min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Next launches</p>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl">I prossimi capitoli.</h2>
          <p className="mt-4 text-lg text-slate-300">Ogni data cambia ritmo: hack, mastermind, sport.</p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {launches.map((launch, index) => (
            <LaunchCard key={launch.id} {...launch} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-10 text-center text-white md:flex-row md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">Archivio</p>
            <p className="mt-3 text-lg text-slate-200">
              Vuoi vedere cosa abbiamo già costruito? Scopri tutte le edizioni e i progetti nati.
            </p>
          </div>
          <Link href="/archivio-eventi">
            <Button className="bg-primary px-6 py-6 text-white font-heading tracking-[0.25em] uppercase">
              Vedi l&apos;archivio
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
