import { motion } from "framer-motion";

interface ActivityProps {
  title: string;
  description: string;
  benefit: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
  delay: number;
}

function Activity({ title, description, benefit, imageUrl, imageAlt, reversed = false, delay }: ActivityProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <motion.div 
        className={`relative h-64 rounded-lg overflow-hidden shadow-md ${reversed ? 'order-1 md:order-2' : ''}`}
        initial={{ opacity: 0, x: reversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div 
        className={`flex flex-col justify-center ${reversed ? 'order-2 md:order-1' : ''}`}
        initial={{ opacity: 0, x: reversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <h3 className="text-2xl font-heading font-bold mb-4">{title}</h3>
        <p className="text-neutral mb-6">{description}</p>
        <div className="flex items-center text-sm text-neutral">
          <i className="bx bx-check-circle text-primary text-xl mr-2"></i>
          <span>{benefit}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function ActivitiesSection() {
  return (
    <section id="attivita" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Le Nostre Attività</h2>
          <p className="text-lg text-neutral">
            Durante ogni "Saba-to-build" potrai partecipare a diverse attività, scegliendo liberamente come trascorrere il tuo tempo.
          </p>
        </motion.div>
        
        <Activity 
          title="Costruire e Creare"
          description="Unisciti a noi per dare vita alle tue idee più creative! Che tu sia un coder, un designer o un maker, qui troverai lo spazio perfetto per trasformare i tuoi progetti in realtà. Porta il tuo laptop, le tue idee e la tua energia!"
          benefit="Spazio creativo dove le idee prendono forma"
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          imageAlt="Team di sviluppatori che collaborano"
          delay={0.1}
        />
        
        <Activity 
          title="Condividere Conoscenze"
          description="Hai delle skills da flexare? Questo è il posto giusto! Scambia conoscenze, partecipa a workshop spontanei e immergiti in discussioni stimolanti. Ogni partecipante ha qualcosa di unico da offrire - e tu? Cosa vorresti condividere?"
          benefit="Impara, cresci e connettiti con persone che la pensano come te"
          imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          imageAlt="Workshop di programmazione"
          reversed={true}
          delay={0.2}
        />
        
        <Activity 
          title="Fare Sport"
          description="Time to get moving! Tra una sessione di coding e l'altra, organizziamo quick workout sessions per mantenere alta l'energia. Dallo stretching al cardio, scegli tu come vuoi muoverti. Perfetto per ricaricare mente e corpo!"
          benefit="Stay fit while you code"
          imageUrl="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          imageAlt="Gruppo di persone che fanno stretching"
          delay={0.3}
        />
        
        <Activity 
          title="Pranzo Condiviso"
          description="Food + Tech = Perfect Match! Il momento del pranzo è l'occasione ideale per networking in modo chill. Porta il tuo snack preferito o unisciti alla preparazione di un pasto comune. Il cibo unisce sempre le persone migliori!"
          benefit="Networking con gusto"
          imageUrl="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          imageAlt="Gruppo di persone che pranzano insieme"
          reversed={true}
          delay={0.4}
        />
      </div>
    </section>
  );
}
