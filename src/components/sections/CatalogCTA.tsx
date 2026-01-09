import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CatalogCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50 border-y border-border">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="heading-subsection text-heading mb-6">
            Veja Nosso Catálogo Completo de Móveis
          </h2>
          <p className="body-base text-body mb-10">
            Explore todas as nossas criações e encontre a peça perfeita para seu ambiente.
          </p>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-3 px-10 py-4 bg-wood text-primary-foreground font-medium text-sm tracking-wide hover:bg-wood-dark transition-all duration-300 group"
          >
            Acessar Catálogo
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogCTA;
