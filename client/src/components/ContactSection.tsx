import { motion } from "framer-motion";

interface ContactInfoItemProps {
  icon: string;
  title: string;
  content: string;
  delay: number;
}

function ContactInfoItem({ icon, title, content, delay }: ContactInfoItemProps) {
  return (
    <motion.div 
      className="flex items-start"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
          <i className={`bx ${icon} text-primary`}></i>
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-heading font-semibold">{title}</h4>
        <p className="text-neutral mt-1">{content}</p>
      </div>
    </motion.div>
  );
}

interface SocialLinkProps {
  icon: string;
  href: string;
  delay: number;
}

function SocialLink({ icon, href, delay }: SocialLinkProps) {
  return (
    <motion.a 
      href={href}
      className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <i className={`bx ${icon}`}></i>
    </motion.a>
  );
}

export default function ContactSection() {
  return (
    <section id="contatti" className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">Contattaci</h2>
            <p className="text-lg text-neutral mb-12 text-center">
              Hai domande sul nostro "Saba-to-build"? Vuoi partecipare o hai suggerimenti da condividere? Contattaci!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 text-primary mb-6">
                <i className="bx bx-map text-2xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Indirizzo</h3>
              <p className="text-neutral">Via Roma 123,<br />00100 Roma</p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 text-primary mb-6">
                <i className="bx bx-envelope text-2xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Email</h3>
              <p className="text-neutral">info@sabatobuild.it</p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary bg-opacity-10 text-primary mb-6">
                <i className="bx bx-phone text-2xl"></i>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Telefono</h3>
              <p className="text-neutral">+39 01 2345 6789</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-heading font-semibold mb-4">Seguici sui Social</h3>
            <div className="flex justify-center space-x-4">
              <SocialLink icon="bxl-instagram" href="#" delay={0.1} />
              <SocialLink icon="bxl-facebook" href="#" delay={0.2} />
              <SocialLink icon="bxl-whatsapp" href="#" delay={0.3} />
              <SocialLink icon="bxl-telegram" href="#" delay={0.4} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
