import { motion } from "framer-motion";

const contactChannels = [
  {
    label: "Email",
    value: "sebastian.cavada.dev@gmail.com",
    icon: "bx-envelope",
  },
  {
    label: "Telefono",
    value: "+39 370 311 5683",
    icon: "bx-phone",
  },
  {
    label: "Base",
    value: "Via Bolzano 20 · Molina di Fiemme",
    icon: "bx-map",
  },
];

const socials = [
  { icon: "bxl-instagram", href: "#" },
  { icon: "bxl-twitter", href: "#" },
  { icon: "bxl-linkedin", href: "#" },
  { icon: "bxl-telegram", href: "#" },
];

export default function ContactSection() {
  return (
    <section id="contatti" className="relative overflow-hidden bg-[#020207] py-24 text-white min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),transparent_55%)]" />
      <div className="relative mx-auto w-full px-4 sm:px-10 lg:px-16">
        <motion.div
          className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:grid-cols-[1.1fr,0.9fr]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Crew support</p>
            <h2 className="font-heading text-4xl md:text-5xl">Vuoi accendere qualcosa? Scrivi.</h2>
            <p className="text-lg text-slate-300">Tre righe: cosa costruisci, che blocco hai, cosa puoi dare.</p>
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-primary/10 p-6 text-white">
              <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">Join the waitlist</p>
              <p>Oggetto: “I want to build”. Poi tre bullet. Tutto qui.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
              <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">Coordinate</p>
              <div className="mt-6 space-y-4 text-slate-200">
                {contactChannels.map((channel, index) => (
                  <motion.div
                    key={channel.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-primary">
                      <i className={`bx ${channel.icon} text-2xl`} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{channel.label}</p>
                      <p className="text-lg text-white">{channel.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
              <p className="font-heading text-sm uppercase tracking-[0.35em] text-primary">Stay tuned</p>
              <div className="mt-4 flex items-center gap-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-primary hover:text-primary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <i className={`bx ${social.icon} text-xl`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
