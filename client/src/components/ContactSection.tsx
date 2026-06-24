import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";

const instagramUrl = "https://www.instagram.com/saba_to_build/";

const contactCopy: Record<
  Locale,
  {
    label: string;
    heading: string;
    body: string;
    cta: string;
  }
> = {
  it: {
    label: "Contatti",
    heading: "Prossimo incontro?",
    body: "Scrivici su Instagram. Ti diciamo cosa sta prendendo forma e dove entrare nel ritmo.",
    cta: "DM su Instagram",
  },
  en: {
    label: "Contact",
    heading: "Next meetup?",
    body: "Message us on Instagram. We'll share what is taking shape and where to enter the rhythm.",
    cta: "DM on Instagram",
  },
};

export default function ContactSection({ locale }: { locale: Locale }) {
  const copy = contactCopy[locale];

  return (
    <section id="contatti" className="flex items-center bg-[#020207] py-12 text-white">
      <div className="mx-auto w-full px-4 text-center sm:px-10 lg:px-16">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{copy.label}</p>
          <h2 className="mt-5 font-heading text-4xl md:text-5xl">{copy.heading}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">{copy.body}</p>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex">
            <Button className="h-12 bg-primary px-7 text-xs text-white font-heading tracking-[0.18em] uppercase sm:text-sm">
              <i className="bx bxl-instagram text-xl" />
              {copy.cta}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
