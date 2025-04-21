import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <motion.div 
              className="text-center md:text-left mb-6 md:mb-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">Saba-to-build</h2>
              <p className="text-gray-400">Costruiamo insieme ogni sabato</p>
            </motion.div>
            
            <motion.div 
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Saba-to-build. Tutti i diritti riservati.</p>
              <div className="mt-2">
                <a href="#" className="text-gray-400 hover:text-primary transition-all mx-1">Privacy</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-primary transition-all mx-1">Termini</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-primary transition-all mx-1">Cookies</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
