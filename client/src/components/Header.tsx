import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";

const navItems: Record<
  Locale,
  { label: string; id: string }[]
> = {
  it: [
    { label: "Manifesto", id: "manifesto" },
    { label: "Programma", id: "orari" },
    { label: "Incontri", id: "eventi-passati" },
    { label: "Contatti", id: "contatti" },
  ],
  en: [
    { label: "Manifesto", id: "manifesto" },
    { label: "Schedule", id: "orari" },
    { label: "Meetups", id: "eventi-passati" },
    { label: "Contact", id: "contatti" },
  ],
};

const ctaLabel: Record<Locale, string> = {
  it: "Instagram",
  en: "Instagram",
};

const mobileCta: Record<Locale, string> = {
  it: "DM Instagram",
  en: "DM Instagram",
};

export default function Header({ locale = "it" }: { locale?: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const headerClasses =
    "fixed top-0 left-0 w-full z-[120] border-b border-white/10 bg-[#02030d]/90 py-4 backdrop-blur-xl";

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex w-full items-center justify-between px-4 sm:px-10 lg:px-16">
        <motion.a
          href="#hero"
          className="font-heading text-lg font-semibold tracking-[0.3em] text-white"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SABA-TO-BUILD
        </motion.a>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-300">
          {navItems[locale].map((item) => (
            <NavLink
              key={item.id}
              label={item.label}
              onClick={() => scrollToSection(item.id)}
            />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            className="bg-primary text-white font-heading tracking-widest uppercase text-xs"
            onClick={() => scrollToSection("contatti")}
          >
            {ctaLabel[locale]}
          </Button>
          <button
            className="rounded-full border border-white/20 px-3 py-1 text-xs font-heading tracking-[0.3em] uppercase text-white transition-colors hover:border-primary hover:text-primary"
            onClick={() => {
              window.location.hash = locale === "it" ? "/en" : "/";
            }}
          >
            {locale === "it" ? "EN" : "IT"}
          </button>
        </div>

        <button
          className="flex items-center justify-center rounded-md border border-white/10 p-2 text-white/80 lg:hidden"
          aria-label="Menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"} text-2xl`}></i>
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden border-t border-white/10 bg-[#02030d]/95 backdrop-blur-xl"
        >
          <div className="mx-auto flex w-full flex-col space-y-4 px-6 py-6 sm:px-10 lg:px-16">
            {navItems[locale].map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                mobile
                onClick={() => scrollToSection(item.id)}
              />
            ))}
            <Button
              className="w-full bg-primary text-white font-heading tracking-[0.25em] uppercase"
              onClick={() => scrollToSection("contatti")}
            >
              {mobileCta[locale]}
            </Button>
            <button
              className="rounded-full border border-white/20 px-4 py-2 text-xs font-heading tracking-[0.35em] uppercase text-white"
              onClick={() => {
                window.location.hash = locale === "it" ? "/en" : "/";
                setIsMenuOpen(false);
              }}
            >
              {locale === "it" ? "Switch to English" : "Torna in Italiano"}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

interface NavLinkProps {
  label: string;
  onClick: () => void;
  mobile?: boolean;
}

function NavLink({ label, onClick, mobile = false }: NavLinkProps) {
  return (
    <button
      type="button"
      className={`font-heading tracking-[0.2em] uppercase transition-colors ${
        mobile ? "text-left text-white" : "text-slate-300 hover:text-white"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
