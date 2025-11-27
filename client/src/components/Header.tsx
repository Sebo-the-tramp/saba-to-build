import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Manifesto", id: "manifesto" },
  { label: "Programma", id: "orari" },
  { label: "Esperienze", id: "attivita" },
  { label: "Lanci", id: "eventi-passati" },
  { label: "Contatti", id: "contatti" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const baseClasses =
    "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10";
  const scrolledClasses =
    "bg-[#02030d]/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.55)] py-3";
  const topClasses = "bg-transparent py-6";

  return (
    <header className={`${baseClasses} ${scrollY > 20 ? scrolledClasses : topClasses}`}>
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
          SABA TO BUILD
        </motion.a>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-300">
          {navItems.map((item) => (
            <NavLink key={item.id} label={item.label} id={item.id} onClick={() => scrollToSection(item.id)} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            className="bg-primary text-white font-heading tracking-widest uppercase text-xs"
            onClick={() => scrollToSection("eventi-passati")}
          >
            Prenota un posto
          </Button>
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
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                label={item.label}
                id={item.id}
                mobile
                onClick={() => scrollToSection(item.id)}
              />
            ))}
            <Button
              className="w-full bg-primary text-white font-heading tracking-[0.25em] uppercase"
              onClick={() => scrollToSection("eventi-passati")}
            >
              Join the Build
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

interface NavLinkProps {
  label: string;
  id: string;
  onClick: () => void;
  mobile?: boolean;
}

function NavLink({ label, id, onClick, mobile = false }: NavLinkProps) {
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
