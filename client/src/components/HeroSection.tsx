import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <motion.div 
            className="md:w-1/2 md:pr-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              <span className="text-primary">Saba-to-build:</span> Uno spazio per creare insieme
            </h1>
            <p className="text-lg md:text-xl text-neutral mb-8">
              Ogni sabato, dalle 8:00 alle 18:00, la nostra casa diventa uno spazio di co-working dove costruire, condividere idee e fare sport insieme.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-primary text-white font-heading hover:bg-primary/90 transition-all"
                onClick={() => scrollToSection('orari')}
              >
                Scopri gli orari
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all font-heading"
                onClick={() => scrollToSection('contatti')}
              >
                Contattaci
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Spazio di co-working Saba-to-build" 
              className="rounded-lg shadow-lg w-full h-auto object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
