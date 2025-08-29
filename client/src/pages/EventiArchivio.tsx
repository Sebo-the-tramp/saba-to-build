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
      date: "7 Giugno 2025",
      title: "Kick off e Presentazione progetto",
      description: "La prima giornata in cui presentiamo il progetto e diamo il via ad un estate di eventi.",
      detailedDescription: "Daremo il via ad un estate di appuntamenti, con 1 presentazione speciale ogni mese! FAte pubblicita' :)",
      participants: 6,
      tags: ["kick-off", "building"],
      highlights: [
        "Presentazione delle idee e goals!",
        "Creazione della community"
      ],
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "20 Giugno 2025",
      title: "Secondo sabato di costruzione",
      description: "Il secondo sabato di costruzione, dove si prosegue con Wellround",
      detailedDescription: `Un evento easy, dove si proseguono i progetti di costruzione.`,
      participants: 10,
      tags: ["kick-off", "building"],
      highlights: [
      ],
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      registrationFormUrl: "", // Replace with actual form URL
      location: "Molina di Fiemme, via Bolzano 20",
      time: "8:00 - 18:00"
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