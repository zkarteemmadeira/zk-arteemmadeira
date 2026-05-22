import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/zk-logo.png';

const navLinks = [
  { name: 'Início', href: '/#inicio' },
  { name: 'Quem Somos', href: '/#quem-somos' },
  { name: 'Produtos', href: '/#produtos' },
  { name: 'Dúvidas Frequentes', href: '/#duvidas-frequentes' },
  { name: 'Avaliações', href: '/#avaliacoes' },
  { name: 'Contato', href: '/#contato' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);

      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        setTimeout(() => {
          const element = document.getElementById(sectionId);

          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--wood-dark)/0.95)] backdrop-blur-md shadow-elevated">
      <div className="container-premium">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-all duration-300"
          >
            <img
              src={logo}
              alt="ZK Arte em Madeira"
              className="h-12 md:h-14 w-auto object-contain"
            />

            <span className="font-serif text-xl md:text-2xl font-semibold text-white tracking-wide">
              Arte em Madeira
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 group"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/catalogo"
            className="hidden lg:inline-flex px-6 py-2.5 text-sm font-medium border border-white/30 text-white hover:bg-white hover:text-[hsl(var(--wood-dark))] transition-all duration-300 rounded-sm"
          >
            Ver Catálogo
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[hsl(var(--wood-dark)/0.98)] backdrop-blur-md border-t border-white/10"
          >
            <div className="container-premium py-6 flex flex-col gap-4">

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 text-base font-medium text-white/90 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/catalogo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 w-full text-center px-6 py-3 text-sm font-medium border border-white/30 text-white hover:bg-white hover:text-[hsl(var(--wood-dark))] transition-all duration-300 rounded-sm"
              >
                Ver Catálogo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;