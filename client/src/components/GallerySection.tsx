import { motion } from "framer-motion";

interface GalleryImageProps {
  src: string;
  alt: string;
  caption: string;
  delay: number;
}

function GalleryImage({ src, alt, caption, delay }: GalleryImageProps) {
  return (
    <motion.div 
      className="relative group rounded-lg overflow-hidden shadow-md h-64"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 font-heading font-semibold px-4 text-center">
          {caption}
        </span>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Spazio di lavoro condiviso",
      caption: "Spazio di lavoro principale"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Area relax",
      caption: "Area relax"
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Sessione di condivisione",
      caption: "Sessione di condivisione"
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Collaborazione su progetti",
      caption: "Collaborazione su progetti"
    },
    {
      src: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Pranzo condiviso",
      caption: "Momento del pranzo"
    },
    {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Attività fisica",
      caption: "Pausa attiva"
    }
  ];

  return (
    <section id="galleria" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">La Nostra Galleria</h2>
          <p className="text-lg text-neutral">
            Dai un'occhiata agli spazi e ai momenti condivisi durante i nostri "Saba-to-build"
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={index}
              src={image.src}
              alt={image.alt}
              caption={image.caption}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
