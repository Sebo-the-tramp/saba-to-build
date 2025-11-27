import { motion } from "framer-motion";
import { mediaAssets } from "@/lib/assets";
import type { Locale } from "@/lib/i18n";

const galleryImages: Record<
  Locale,
  { src: string; alt: string; label: string; span: string }[]
> = {
  it: [
    { src: mediaAssets.spazio, alt: "Spazio di lavoro condiviso", label: "Focus zone", span: "col-span-2 row-span-2" },
    { src: mediaAssets.bar, alt: "Area relax", label: "Reset & chill", span: "row-span-1" },
    { src: mediaAssets.relax, alt: "Sessione di condivisione", label: "Crew talks", span: "row-span-1" },
    { src: mediaAssets.vr, alt: "Collaborazione su progetti", label: "VR lab", span: "col-span-2 row-span-1" },
    { src: mediaAssets.makers, alt: "Makers", label: "Makers corner", span: "row-span-1" },
    { src: mediaAssets.community, alt: "Momento community", label: "Tribe energy", span: "row-span-1" },
  ],
  en: [
    { src: mediaAssets.spazio, alt: "Shared workspace", label: "Focus zone", span: "col-span-2 row-span-2" },
    { src: mediaAssets.bar, alt: "Relax area", label: "Reset & chill", span: "row-span-1" },
    { src: mediaAssets.relax, alt: "Sharing session", label: "Crew talks", span: "row-span-1" },
    { src: mediaAssets.vr, alt: "Project collaboration", label: "VR lab", span: "col-span-2 row-span-1" },
    { src: mediaAssets.makers, alt: "Makers", label: "Makers corner", span: "row-span-1" },
    { src: mediaAssets.community, alt: "Community moment", label: "Tribe energy", span: "row-span-1" },
  ],
};

const galleryCopy: Record<
  Locale,
  {
    label: string;
    heading: string;
    body: string;
  }
> = {
  it: {
    label: "Vibes",
    heading: "Il playground reale.",
    body: "Desk modulari, VR, cucina, cortile. Ogni stanza cambia con i progetti.",
  },
  en: {
    label: "Vibes",
    heading: "The real playground.",
    body: "Modular desks, VR, kitchen, courtyard. Every room shifts with the projects.",
  },
};

export default function GallerySection({ locale }: { locale: Locale }) {
  const copy = galleryCopy[locale];

  return (
    <section id="galleria" className="bg-[#03040c] py-24 text-white min-h-screen">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{copy.label}</p>
          <h2 className="mt-4 font-heading text-4xl md:text-5xl">{copy.heading}</h2>
          <p className="mt-4 text-lg text-slate-300">{copy.body}</p>
        </motion.div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {galleryImages[locale].map((image, index) => (
            <motion.div
              key={image.alt}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 ${image.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 font-heading text-sm uppercase tracking-[0.35em] text-white">{image.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
