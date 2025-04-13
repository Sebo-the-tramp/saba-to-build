import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      closeMenu();
    }
  };

  return (
    <header className={`bg-white shadow-sm fixed w-full top-0 z-50 transition-all ${scrollY > 50 ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.a 
              href="#" 
              className="text-2xl font-heading font-bold text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Saba-to-build
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-secondary hover:text-primary focus:outline-none" 
              aria-label="Menu"
              onClick={toggleMenu}
            >
              <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink label="Concetto" id="concetto" onClick={() => scrollToSection('concetto')} />
            <NavLink label="Attività" id="attivita" onClick={() => scrollToSection('attivita')} />
            <NavLink label="Orari" id="orari" onClick={() => scrollToSection('orari')} />
            <NavLink label="Galleria" id="galleria" onClick={() => scrollToSection('galleria')} />
            <NavLink label="Contatti" id="contatti" onClick={() => scrollToSection('contatti')} />
          </nav>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden border-t border-gray-200"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-3 space-y-3">
            <NavLink mobile={true} label="Concetto" id="concetto" onClick={() => scrollToSection('concetto')} />
            <NavLink mobile={true} label="Attività" id="attivita" onClick={() => scrollToSection('attivita')} />
            <NavLink mobile={true} label="Orari" id="orari" onClick={() => scrollToSection('orari')} />
            <NavLink mobile={true} label="Galleria" id="galleria" onClick={() => scrollToSection('galleria')} />
            <NavLink mobile={true} label="Contatti" id="contatti" onClick={() => scrollToSection('contatti')} />
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
    <a 
      href={`#${id}`}
      className={`font-heading text-neutral hover:text-primary transition-all ${mobile ? 'block' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </a>
  );
}
