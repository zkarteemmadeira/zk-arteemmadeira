import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const reviews = [
  {
    name: 'Renato Pacini Ribeiro',
    text: 'Comprei uma mesa c 6 cadeiras de Peroba Rosa, ficou show, muito bonita, ótimo acabamento, cor linda, preço bom!!!',
    rating: 5,
  },
  {
    name: 'Casa de Marias',
    text: 'Móveis no melhor preço que encontrei....qualidade excelente... atendimento perfeito... super recomendo... obrigada',
    rating: 5,
  },
  {
    name: 'Monica C.leite',
    text: 'Já sou cliente dessa loja, adoro todos os móveis lindos e com ótimo acabamento. E tem um super atendimento ao cliente. Indico para todos. Vcs vão amar.',
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="avaliacoes" className="section-spacing">
      <div className="container-premium">
        <SectionHeading 
          title="Avaliações" 
          subtitle="O que nossos clientes dizem sobre nós"
        />

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-14"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={20} 
                className={i < 5 ? 'text-wood fill-wood' : 'text-muted-foreground'} 
              />
            ))}
          </div>
          <div className="text-center">
            <span className="font-serif text-2xl font-semibold text-heading">4,6</span>
            <span className="text-muted-foreground ml-2">no Google</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground">Mais de 10 avaliações</span>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 bg-card border border-border hover:shadow-card transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-wood fill-wood" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-body leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <p className="font-medium text-heading text-sm">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
