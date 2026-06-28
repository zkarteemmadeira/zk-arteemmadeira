import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-furniture.png';

const HeroSection = () => {
  // Cria um contorno suave atrás das letras para garantir a leitura sobre a madeira e paredes claras
  const estiloLetraVisivel = {
    textShadow: '0px 2px 4px rgba(255, 255, 255, 1), 0px 0px 12px rgba(255, 255, 255, 0.9)'
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - 100% Limpa e Sem Filtros */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Móveis em madeira de alta qualidade" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-premium relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-px bg-wood mb-10 origin-left"
          />

          {/* Headline (Título Principal) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-display text-heading mb-8"
            style={estiloLetraVisivel}
          >
            Referência em Bancos{' '}<br></br>
            <span className="text-wood italic"> Que Viram Mesa</span>{' '}
          </motion.h1>

          {/* Subheadline (Legenda) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="body-large text-body max-w-2xl mb-12 font-medium"
            style={estiloLetraVisivel}
          >
            Produção artesanal com acabamento impecável, pensada para transformar 
            ambientes com sofisticação.
          </motion.p>

          {/* CTA (Botão) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-3 px-10 py-4 bg-wood text-primary-foreground font-medium text-sm tracking-wide hover:bg-wood-dark transition-all duration-300 group shadow-lg"
            >
              Conheça Nosso Catálogo
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-wood/30 rounded-full flex items-start justify-center p-2 bg-white/20 backdrop-blur-xs">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-wood rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
