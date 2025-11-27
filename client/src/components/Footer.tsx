import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#010103] py-12 text-slate-300">
      <div className="mx-auto w-full px-4 sm:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">Saba-to-build</p>
            <p className="mt-3 text-lg text-white">
              Per chi non smette di inseguire l&apos;impossibile. Ci vediamo ogni due settimane.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">Coordinate</p>
            <p className="mt-3">Via Bolzano 20 · 38030 Molina di Fiemme</p>
            <p className="mt-1">sabato 8:00 — 18:00 · ogni due settimane</p>
          </motion.div>

          <motion.div
            className="text-left md:text-right"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">© {new Date().getFullYear()}</p>
            <p className="mt-3">Tutti i diritti riservati · costruiamo con cura.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
