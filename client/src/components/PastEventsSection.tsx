import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface EventProps {
  date: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  index: number;
}

function Event({ date, title, description, tags, imageUrl, index }: EventProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="h-48 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
          {date}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
        <p className="text-neutral mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="bg-primary/5 text-primary border-primary/20">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PastEventsSection() {
  const pastEvents = [
    {
      date: "20 Marzo 2025",
      title: "Workshop di Programmazione",
      description: "Una giornata dedicata all'apprendimento della programmazione con focus su progetti pratici.",
      tags: ["coding", "workshop", "principianti"],
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      date: "13 Marzo 2025",
      title: "Design Thinking",
      description: "Sessione collaborativa per applicare i principi del design thinking a problemi reali.",
      tags: ["design", "innovazione", "brainstorming"],
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      date: "6 Marzo 2025",
      title: "Yoga e Produttività",
      description: "Un mix perfetto tra attività fisica e mentale per migliorare il benessere e la produttività.",
      tags: ["benessere", "yoga", "produttività"],
      imageUrl: "https://images.unsplash.com/photo-1599447539673-4c37d6df1de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="eventi-passati" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Eventi Passati</h2>
          <p className="text-lg text-neutral">
            Ecco alcuni dei nostri recenti "Saba-to-build" e le attività che abbiamo realizzato insieme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <Event
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              tags={event.tags}
              imageUrl={event.imageUrl}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/archivio-eventi">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all font-heading"
            >
              Vedi tutti gli eventi <i className="bx bx-right-arrow-alt ml-2"></i>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}