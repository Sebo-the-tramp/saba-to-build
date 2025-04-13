import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

function EventDetail({
  date,
  title,
  description,
  detailedDescription,
  participants,
  tags,
  highlights,
  imageUrl,
  index,
}: EventDetailProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="h-64 md:h-full relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
              {date}
            </span>
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-heading font-bold">{title}</h3>
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
              {participants} Partecipanti
            </span>
          </div>
          <p className="text-neutral mb-4">{description}</p>
          <p className="text-neutral mb-5">{detailedDescription}</p>
          
          <div className="mb-5">
            <h4 className="font-heading font-semibold mb-2">Highlights</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral">
              {highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventiArchivio() {
  const eventArchive = [
    {
      date: "20 Marzo 2025",
      title: "Workshop di Programmazione",
      description: "Una giornata dedicata all'apprendimento della programmazione con focus su progetti pratici.",
      detailedDescription: "Durante questo Saba-to-build abbiamo esplorato i fondamenti della programmazione attraverso progetti pratici. I partecipanti hanno lavorato in piccoli gruppi, creando applicazioni semplici ma funzionali.",
      participants: 15,
      tags: ["coding", "workshop", "principianti", "javascript", "python"],
      highlights: [
        "Introduzione ai linguaggi di programmazione per principianti",
        "Sviluppo di un progetto di gruppo: un'app per prendere note",
        "Sessione di problem-solving collaborativo",
        "Presentazione dei progetti finali"
      ],
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "13 Marzo 2025",
      title: "Design Thinking",
      description: "Sessione collaborativa per applicare i principi del design thinking a problemi reali.",
      detailedDescription: "Questo Saba-to-build è stato dedicato al processo di design thinking. Abbiamo identificato problemi reali nella nostra comunità e applicato le fasi di empatia, definizione, ideazione, prototipazione e test per trovare soluzioni innovative.",
      participants: 12,
      tags: ["design", "innovazione", "brainstorming", "ux", "problem-solving"],
      highlights: [
        "Introduzione al processo di design thinking",
        "Esercizio di empatia con interviste a stakeholder",
        "Sessione di brainstorming e ideazione",
        "Creazione di prototipi lo-fi e test di usabilità"
      ],
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "6 Marzo 2025",
      title: "Yoga e Produttività",
      description: "Un mix perfetto tra attività fisica e mentale per migliorare il benessere e la produttività.",
      detailedDescription: "In questo Saba-to-build abbiamo esplorato la connessione tra benessere fisico e produttività mentale. La giornata è iniziata con una sessione di yoga, seguita da tecniche di concentrazione e mindfulness, e si è conclusa con un workshop sulla gestione del tempo.",
      participants: 18,
      tags: ["benessere", "yoga", "produttività", "mindfulness", "gestione-tempo"],
      highlights: [
        "Sessione di yoga per principianti guidata da un istruttore certificato",
        "Tecniche di respirazione e meditazione per la concentrazione",
        "Workshop su metodi di gestione del tempo e prioritizzazione",
        "Discussione di gruppo sui benefici dell'attività fisica per la produttività"
      ],
      imageUrl: "https://images.unsplash.com/photo-1599447539673-4c37d6df1de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "27 Febbraio 2025",
      title: "Sviluppo Sostenibile",
      description: "Discussione e progetti pratici su come incorporare la sostenibilità nelle nostre attività quotidiane.",
      detailedDescription: "Questo Saba-to-build è stato dedicato alla sostenibilità. Abbiamo discusso di come incorporare pratiche sostenibili nella vita quotidiana e nei progetti professionali, con focus sulle tecnologie verdi e sul design ecologico.",
      participants: 14,
      tags: ["sostenibilità", "green-tech", "eco-design", "upcycling"],
      highlights: [
        "Presentazione sui principi dello sviluppo sostenibile",
        "Workshop di upcycling: dare nuova vita a oggetti usati",
        "Brainstorming su come rendere più ecologici i prodotti digitali",
        "Progettazione di un piccolo giardino urbano per lo spazio co-working"
      ],
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "20 Febbraio 2025",
      title: "Storytelling Digitale",
      description: "Tecniche e strumenti per raccontare storie coinvolgenti attraverso i media digitali.",
      detailedDescription: "Durante questo Saba-to-build abbiamo esplorato l'arte dello storytelling nell'era digitale. I partecipanti hanno imparato tecniche narrative e strumenti digitali per creare storie coinvolgenti, dai podcast ai video brevi, dai blog alle presentazioni.",
      participants: 10,
      tags: ["storytelling", "contenuti-digitali", "creatività", "media"],
      highlights: [
        "Principi di narrazione efficace nel contesto digitale",
        "Laboratorio di creazione di podcast e contenuti audio",
        "Tecniche di scrittura per il web e i social media",
        "Creazione e montaggio di video brevi per piattaforme digitali"
      ],
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "13 Febbraio 2025",
      title: "Introduzione all'Intelligenza Artificiale",
      description: "Comprensione dei concetti base dell'IA e delle sue applicazioni pratiche.",
      detailedDescription: "Questo Saba-to-build ha introdotto i partecipanti ai concetti fondamentali dell'intelligenza artificiale. Abbiamo esplorato come l'IA sta trasformando vari settori e abbiamo sperimentato con strumenti di IA accessibili per risolvere problemi pratici.",
      participants: 20,
      tags: ["intelligenza-artificiale", "machine-learning", "tecnologia", "innovazione"],
      highlights: [
        "Introduzione ai concetti di base dell'IA e del machine learning",
        "Dimostrazione di strumenti di IA accessibili a tutti",
        "Workshop su come integrare l'IA nei progetti personali",
        "Discussione etica sulle implicazioni dell'IA nella società"
      ],
      imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl font-heading font-bold">Archivio Eventi</h1>
                <p className="text-lg text-neutral mt-2">
                  Esplora i nostri "Saba-to-build" passati e scopri cosa abbiamo realizzato insieme.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all font-heading">
                    <i className="bx bx-left-arrow-alt mr-2"></i> Torna alla Home
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="space-y-6">
              {eventArchive.map((event, index) => (
                <EventDetail
                  key={index}
                  date={event.date}
                  title={event.title}
                  description={event.description}
                  detailedDescription={event.detailedDescription}
                  participants={event.participants}
                  tags={event.tags}
                  highlights={event.highlights}
                  imageUrl={event.imageUrl}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}