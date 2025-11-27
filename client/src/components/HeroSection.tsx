import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Builders attivi", value: "42+" },
  { label: "Ore hardcore", value: "10h" },
  { label: "Prototipi nati", value: "21" },
];

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#03050f] pt-32 pb-20 text-white md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/30 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)] opacity-60" />
      </div>

      <div className="relative mx-auto w-full px-4 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-100/70">
              Stagione 2025
              <span className="h-1 w-1 rounded-full bg-primary" />
              Val di Fiemme
            </div>

            <div>
              <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Per chi costruisce.
                <span className="block text-primary">Per chi non molla.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 md:text-xl">Casa, laboratorio e crew. Niente pose, solo prototipi.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className="h-12 flex-1 bg-primary text-white font-heading tracking-[0.35em] uppercase"
                onClick={() => scrollToSection("eventi-passati")}
              >
                I want to build
              </Button>
              <Button
                variant="outline"
                className="h-12 flex-1 border-white/30 text-white font-heading tracking-[0.35em] uppercase hover:bg-white/10"
                onClick={() => scrollToSection("manifesto")}
              >
                Leggi il manifesto
              </Button>
            </div>

            <div className="grid gap-6 pt-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-white/20 pl-6">
                  <p className="font-heading text-3xl">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-pink-500/20 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/15 bg-white/[0.04] p-8 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">Next build cycle</p>
              <p className="mt-4 font-heading text-4xl text-white">7 Giugno · 8:00 → 18:00</p>
              <p className="mt-2 text-sm text-slate-300">Molina di Fiemme · Via Bolzano 20</p>

              <div className="mt-8 space-y-4 text-sm text-slate-300">
                {["Blocchi focus", "Talk lampo", "Hardware + VR + sport"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 text-primary">
                      <i className="bx bx-check text-base" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-primary/10 p-6">
                <p className="font-heading text-base uppercase tracking-[0.35em] text-primary">Regola 01</p>
                <p className="mt-2 text-lg text-white">Arriva con un problema. Esci con un pezzo di soluzione.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
