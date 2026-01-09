import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Início', href: '/#inicio' },
  { name: 'Quem Somos', href: '/#quem-somos' },
  { name: 'Produtos', href: '/#produtos' },
  { name: 'Avaliações', href: '/#avaliacoes' },
  { name: 'Contato', href: '/#contato' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-subtle' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-xl md:text-2xl font-semibold text-heading tracking-wide hover:text-wood transition-colors duration-300"
          >
            Arte de Minas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-medium text-body hover:text-wood transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-wood transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Link
              to="/catalogo"
              className="ml-4 px-6 py-2.5 text-sm font-medium border border-wood/30 text-wood hover:bg-wood hover:text-primary-foreground transition-all duration-300 rounded-sm"
            >
              Ver Catálogo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-heading hover:text-wood transition-colors"
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
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <div className="container-premium py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 text-base font-medium text-body hover:text-wood transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Link
                to="/catalogo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 w-full text-center px-6 py-3 text-sm font-medium border border-wood/30 text-wood hover:bg-wood hover:text-primary-foreground transition-all duration-300 rounded-sm"
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
