import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-premium py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-xl font-semibold text-heading tracking-wide"
          >
            Arte de Minas Móveis
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-wood transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-wood transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arte de Minas Móveis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
