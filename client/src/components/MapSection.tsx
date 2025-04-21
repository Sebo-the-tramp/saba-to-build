import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-light rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <i className="bx bx-map-alt text-6xl text-neutral mb-4"></i>
                  <h3 className="text-xl font-heading font-semibold">Mappa dello Spazio</h3>
                  <p className="text-neutral mt-2">Via Bolzano 20 Molina di Fiemme</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
