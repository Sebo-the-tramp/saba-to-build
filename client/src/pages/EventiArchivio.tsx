import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mediaAssets } from "@/lib/assets";

interface EventDetailProps {
  date: string;
  title: string;
  description: string;
  detailedDescription: string;
  participants: number;
  tags: string[];
  highlights: string[];
  imageUrl: string;
  index: number;
}

const eventsArchive: EventDetailProps[] = [
  {
    date: "7 Giugno 2025",
    title: "Kick off manifesto",
    description: "Cluster HPC acceso, primi 20 builder, presentazione Wellround.",
    detailedDescription:
      "Casa trasformata in control center: CUDA sulla 5090, roadmap Wellround, cerchio di commitment. Ognuno ha messo sul tavolo il proprio blocco.",
    participants: 20,
    tags: ["kick-off", "hardware", "community"],
    highlights: ["Setup cluster con login node", "Sessione manifesto e valori", "Live prototyping di Wellround"],
    imageUrl: mediaAssets.spazio,
    index: 0,
  },
  {
    date: "20 Giugno 2025",
    title: "Secondo sabato · Build sprints",
    description: "Interfacce Wellround, VR walkthrough e accountability.",
    detailedDescription:
      "Design review dal vivo, pair programming, coaching BirkenGym. Prototipi e contenuti costruiti sul momento.",
    participants: 16,
    tags: ["design", "sport", "mentorship"],
    highlights: ["VR testing room", "Sprint di copywriting", "Workout + cold plunge"],
    imageUrl: mediaAssets.vr,
    index: 1,
  },
];

function EventDetailCard({ date, title, description, detailedDescription, participants, tags, highlights, imageUrl, index }: EventDetailProps) {
  return (
    <motion.article
      className="grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] shadow-[0_20px_80px_rgba(3,3,7,0.45)] md:grid-cols-[320px,1fr]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="relative h-64 md:h-full">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        <span className="absolute top-6 left-6 rounded-full border border-white/20 bg-black/60 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white">
          {date}
        </span>
      </div>
      <div className="space-y-5 p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-3xl font-heading">{title}</h3>
          <span className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
            {participants} builders
          </span>
        </div>
        <p className="text-lg text-slate-300">{description}</p>
        <p className="text-slate-300">{detailedDescription}</p>
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-primary">Highlights</p>
          <ul className="mt-3 space-y-2 text-slate-200">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Badge key={tag} className="border-white/20 bg-white/5 text-xs uppercase tracking-[0.3em] text-white">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function EventiArchivio() {
  return (
    <div className="min-h-screen bg-[#010208] text-white">
      <Header />
      <main className="pt-32 pb-20">
        <section className="mx-auto w-full px-4 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Archivio</p>
              <h1 className="mt-3 font-heading text-4xl md:text-5xl">Ogni edizione lascia tracce reali.</h1>
              <p className="mt-3 max-w-xl text-lg text-slate-300">
                Qui trovi ciò che abbiamo già costruito: cluster, prodotti, relazioni. È il nostro logbook, senza filtri.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link href="/">
                <Button className="bg-primary px-8 py-6 text-white font-heading tracking-[0.35em] uppercase">
                  <i className="bx bx-left-arrow-alt mr-2 text-xl" />
                  Torna alla Home
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="mt-12 space-y-10">
            {eventsArchive.map((event, index) => (
              <EventDetailCard key={event.title} {...event} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
