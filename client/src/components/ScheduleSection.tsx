import { motion } from "framer-motion";

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  index: number;
}

function TimelineItem({ time, title, description, index }: TimelineItemProps) {
  return (
    <motion.div 
      className="px-6 py-4 flex items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
    >
      <div className="w-20 text-right font-heading font-semibold">{time}</div>
      <div className="ml-6 pl-6 border-l border-gray-200">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-neutral mt-1">{description}</p>
      </div>
    </motion.div>
  );
}

interface ImportantNoteProps {
  note: string;
  index: number;
}

function ImportantNote({ note, index }: ImportantNoteProps) {
  return (
    <motion.li 
      className="flex items-start"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
    >
      <i className="bx bx-check text-primary mt-1 mr-2"></i>
      <span>{note}</span>
    </motion.li>
  );
}

export default function ScheduleSection() {
  const scheduleItems = [
    { time: "8:00", title: "Apertura e Caffè di Benvenuto", description: "Iniziamo la giornata con energia" },
    { time: "8:30", title: "Briefing della Giornata", description: "Condivisione di obiettivi e progetti" },
    { time: "9:00", title: "Sessione di Lavoro Mattutina", description: "Concentrazione sui progetti personali o di gruppo" },
    { time: "11:00", title: "Pausa Attiva", description: "Breve sessione di stretching o esercizio fisico" },
    { time: "13:00", title: "Pranzo Condiviso", description: "Momento di socializzazione e relax" },
    { time: "14:30", title: "Sessione di Condivisione", description: "Workshop o presentazioni spontanee" },
    { time: "15:30", title: "Sessione di Lavoro Pomeridiana", description: "Continuazione dei progetti o avvio di nuove collaborazioni" },
    { time: "17:30", title: "Wrap-up e Feedback", description: "Condivisione dei risultati della giornata" },
    { time: "18:00", title: "Chiusura", description: "Arrivederci al prossimo sabato!" }
  ];

  const importantNotes = [
    "La partecipazione è flessibile: puoi arrivare e andare via quando preferisci",
    "È gradita la prenotazione per aiutarci a organizzare al meglio gli spazi",
    "Il programma può subire variazioni in base alle esigenze dei partecipanti"
  ];

  return (
    <section id="orari" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">I Nostri Orari</h2>
          <p className="text-lg text-neutral">
            Il "Saba-to-build" si svolge ogni sabato dalle 8:00 alle 18:00. Ecco come è strutturata la giornata:
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="px-6 py-5 border-b border-gray-100 bg-primary bg-opacity-5">
            <h3 className="text-xl font-heading font-bold text-white">Ogni Sabato</h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {scheduleItems.map((item, index) => (
              <TimelineItem 
                key={index} 
                time={item.time} 
                title={item.title} 
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center text-primary mb-3">
            <i className="bx bx-info-circle text-xl mr-2"></i>
            <h4 className="font-heading font-semibold">Note Importanti</h4>
          </div>
          <ul className="space-y-2 text-neutral">
            {importantNotes.map((note, index) => (
              <ImportantNote key={index} note={note} index={index} />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
