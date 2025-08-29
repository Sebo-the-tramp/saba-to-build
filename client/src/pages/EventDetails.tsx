import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// This would typically come from an API or database
const eventsData = {
  "kick-off-2025-06-07": {
    date: "7 Giugno 2025",
    title: "Kick off e Presentazione progetto",
    description: "La prima giornata in cui presentiamo il progetto e diamo il via ad un estate di eventi.",
    longDescription: `Un evento speciale per dare il via alla nostra estate di costruzione e innovazione. 
    Durante questa giornata, presenteremo in dettaglio il progetto, i suoi obiettivi e il programma delle attività.
    Sarà un'occasione perfetta per conoscere gli altri partecipanti e iniziare a costruire insieme la nostra comunità.
    Quello che abbiamo fatto:
    - Presentazione del progetto
    - Creazione di un HPC con login node e diversi computer (nodi) per la costruzione di un cluster di computer.
    - Installazione CUDA (chi sa sa quanto e' difficile) per farla funzionare con la 5090.
    - Creazione di un architettura software per wellround, facendo in un pomeriggio, quello che ci Sebastian ci avrebbe messo 3 giorni.
    - Merenda e zucchi di frutta.
    - Memes.
    - E molto altro.
    `,
    tags: ["kick-off", "building"],
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationFormUrl: "",
    location: "Molina di Fiemme, via Bolzano 20",
    time: "8:00 - 18:00"
  },
  "second-saturday-2025-06-20": {
    date: "20 Giugno 2025",
    title: "Secondo sabato di costruzione",
    description: "Il secondo sabato di costruzione, dove si prosegue con Wellround",
    longDescription: `Un evento easy, dove si proseguono i progetti di costruzione.
    `,
    tags: ["kick-off", "building"],
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    registrationFormUrl: "", // Replace with actual form URL
    location: "Molina di Fiemme, via Bolzano 20",
    time: "8:00 - 18:00"
  }
};

export default function EventDetails() {
  const [, params] = useRoute("/evento/:id");
  const eventId = params?.id;
  console.log('Route params:', params);
  console.log('Event ID:', eventId);
  console.log('Available events:', Object.keys(eventsData));
  const event = eventId ? eventsData[eventId as keyof typeof eventsData] : null;
  console.log('Found event:', event);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Evento non trovato</h1>
        <p className="mt-4 text-neutral">ID: {eventId}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 md:h-96 relative">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                  {event.title}
                </h1>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {event.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Data e Ora</h2>
                  <p className="text-neutral">{event.date}</p>
                  <p className="text-neutral">{event.time}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Location</h2>
                  <p className="text-neutral">{event.location}</p>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-bold mb-4">Descrizione</h2>
                <p className="text-neutral whitespace-pre-line">{event.longDescription}</p>
              </div>

              {event.registrationFormUrl && (
                <div className="text-center">
                  <a href={event.registrationFormUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg">
                      Registrati all'evento
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 