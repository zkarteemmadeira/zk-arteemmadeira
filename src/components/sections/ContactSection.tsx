import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ContactSection = () => {
  return (
    <section id="contato" className="section-spacing bg-secondary/30">
      <div className="container-premium">
        <SectionHeading 
          title="Entre em Contato" 
          subtitle="Estamos prontos para atendê-lo e criar a peça perfeita para você"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex flex-col items-center gap-8">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-wood text-primary-foreground font-medium text-sm tracking-wide hover:bg-wood-dark transition-all duration-300 group w-full justify-center"
            >
              <MessageCircle size={20} />
              Fale pelo WhatsApp
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-body hover:text-wood transition-colors duration-300"
              >
                <Instagram size={20} />
                <span className="text-sm">Instagram</span>
              </a>
              <span className="w-px h-4 bg-border" />
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-body hover:text-wood transition-colors duration-300"
              >
                <Facebook size={20} />
                <span className="text-sm">Facebook</span>
              </a>
            </div>

            {/* Additional Info */}
            <div className="w-full pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-wood" />
                  <span>Minas Gerais, Brasil</span>
                </div>
                <span className="hidden sm:block w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-wood" />
                  <span>(00) 00000-0000</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
