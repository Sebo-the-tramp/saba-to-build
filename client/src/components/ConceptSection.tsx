import { motion } from "framer-motion";

interface ConceptCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function ConceptCard({ icon, title, description, delay }: ConceptCardProps) {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 text-primary mb-6">
        <i className={`bx ${icon} text-3xl`}></i>
      </div>
      <h3 className="text-xl font-heading font-bold mb-4">{title}</h3>
      <p className="text-neutral">{description}</p>
    </motion.div>
  );
}

export default function ConceptSection() {
  return (
    <section id="concetto" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Il Concetto</h2>
          <p className="text-lg text-neutral">
            "Saba-to-build" nasce dall'idea di trasformare il sabato in un giorno dedicato alla creatività, alla condivisione e alla crescita personale e collettiva.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ConceptCard 
            icon="bx-bulb" 
            title="Creatività" 
            description="Uno spazio dove le idee prendono forma, dove puoi concentrarti sui tuoi progetti in un ambiente stimolante."
            delay={0.1}
          />
          
          <ConceptCard 
            icon="bx-chat" 
            title="Condivisione" 
            description="Scambia idee, conosci nuove persone e collabora a progetti comuni in un ambiente accogliente e informale."
            delay={0.2}
          />
          
          <ConceptCard 
            icon="bx-group" 
            title="Comunità" 
            description="Creiamo insieme un ambiente dove ci si sente parte di qualcosa di più grande, dove il supporto reciproco è fondamentale."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
