import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mediaAssets } from "@/lib/assets";

const eventsData = {
  "restart-2026-06-13": {
    date: "13 Giugno 2026",
    title: "Restart 2026",
    description: "Ripartiamo quest'anno: persone, idee, sport.",
    longDescription: `Un sabato diverso, dalle 14:00 alle 22:00.
Vieni quando preferisci. Verso le 18 beviamo qualcosa. Non serve invito, non serve prenotare: passa e basta.`,
    tags: ["restart", "incontro", "sport"],
    imageUrl: mediaAssets.community,
    registrationFormUrl: "",
    location: "Via Bolzano 20 · Molina di Fiemme",
    time: "14:00 → 22:00",
  },
  "kick-off-2025-06-07": {
    date: "7 Giugno 2025",
    title: "Kick off manifesto",
    description: "La base prende vita: HPC acceso, valori condivisi, Wellround attivo.",
    longDescription: `Cluster con login node, CUDA sulla 5090, architettura Wellround, manifesto in cerchio.
Pranzo condiviso e demo lampo: ognuno è uscito con un impegno.`,
    tags: ["kick-off", "hardware", "community"],
    imageUrl: mediaAssets.spazio,
    registrationFormUrl: "",
    location: "Via Bolzano 20 · Molina di Fiemme",
    time: "8:00 - 18:00",
  },
  "second-saturday-2025-06-20": {
    date: "20 Giugno 2025",
    title: "Costruiamo Wellround",
    description: "Design, VR walkthrough e coaching BirkenGym nello stesso giorno.",
    longDescription: `Interfacce Wellround stressate, pair programming, VR testing.
Chiusura con allenamento collettivo.`,
    tags: ["product", "design", "sport"],
    imageUrl: mediaAssets.vr,
    registrationFormUrl: "",
    location: "Via Bolzano 20 · Molina di Fiemme",
    time: "8:00 - 18:00",
  },
  "mastermind-2025-07-05": {
    date: "5 Luglio 2025",
    title: "Mastermind + sport edition",
    description: "Sessioni mastermind, pitch, corsa nel bosco e cold plunge finale.",
    longDescription: `Il formato più intimo e potente. Ogni builder porta un challenge, riceve feedback, si allena e riparte leggero.
Abbiamo creato accountability loop e definito roadmap condivise.`,
    tags: ["mastermind", "accountability"],
    imageUrl: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    registrationFormUrl: "",
    location: "Bosco di Molina + Base camp",
    time: "8:00 - 18:00",
  },
};

export default function EventDetails() {
  const [, params] = useRoute("/evento/:id");
  const eventId = params?.id;
  const event = eventId ? eventsData[eventId as keyof typeof eventsData] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-[#010208] px-4 py-24 text-center text-white">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Oops</p>
        <h1 className="mt-4 text-3xl font-heading">Evento non trovato</h1>
        <p className="mt-2 text-slate-400">ID: {eventId}</p>
        <Link href="/">
          <Button className="mt-6 bg-primary px-8 py-6 text-white font-heading tracking-[0.35em] uppercase">Torna alla Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#010208] py-20 text-white">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.02]">
            <div className="relative h-72 sm:h-96">
              <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 space-y-3">
                <span className="rounded-full border border-white/40 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white">
                  {event.date}
                </span>
                <h1 className="text-4xl font-heading sm:text-5xl">{event.title}</h1>
                <p className="max-w-2xl text-lg text-slate-200">{event.description}</p>
              </div>
            </div>

            <div className="grid gap-10 p-8 md:grid-cols-[1fr,0.7fr]">
              <div>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <Badge key={tag} className="border-white/20 bg-white/5 text-xs uppercase tracking-[0.3em] text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-8 space-y-4 text-lg text-slate-200">
                  {event.longDescription.split("\n").map((line, idx) => (
                    <p key={idx}>{line.trim()}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-6 text-slate-200">
                <div>
                  <p className="font-heading text-xs uppercase tracking-[0.35em] text-primary">Data & Ora</p>
                  <p className="mt-3 text-xl text-white">{event.date}</p>
                  <p>{event.time}</p>
                </div>
                <div>
                  <p className="font-heading text-xs uppercase tracking-[0.35em] text-primary">Location</p>
                  <p className="mt-3 text-xl text-white">{event.location}</p>
                </div>
                {event.registrationFormUrl && (
                  <a href={event.registrationFormUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary px-4 py-6 text-white font-heading tracking-[0.35em] uppercase">Registrati</Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/">
            <Button variant="outline" className="border-white/30 text-white font-heading tracking-[0.35em] uppercase hover:bg-white/10">
              Torna alla Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
