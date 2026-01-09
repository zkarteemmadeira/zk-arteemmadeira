import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Armchair, Table, RockingChair, Coffee, MonitorDot, Bath } from 'lucide-react';

const products = [
  {
    name: 'Cadeiras',
    description: 'Conforto e elegância para sua mesa',
    icon: Armchair,
  },
  {
    name: 'Mesas',
    description: 'O centro da convivência familiar',
    icon: Table,
  },
  {
    name: 'Bancos',
    description: 'Versatilidade com estilo',
    icon: RockingChair,
  },
  {
    name: 'Mesinhas',
    description: 'Detalhes que fazem a diferença',
    icon: Coffee,
  },
  {
    name: 'Escrivaninhas',
    description: 'Para seu espaço de trabalho',
    icon: MonitorDot,
  },
  {
    name: 'Pias de Banheiro',
    description: 'Madeira em ambientes únicos',
    icon: Bath,
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="section-spacing">
      <div className="container-premium">
        <SectionHeading 
          title="Nossos Produtos" 
          subtitle="Peças únicas desenvolvidas com maestria e atenção aos detalhes"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 md:p-8 bg-card border border-border hover:border-wood/30 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-wood/70 group-hover:text-wood transition-colors duration-300">
                <product.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-heading mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="body-base text-body leading-relaxed">
            Trabalhamos com madeira selecionada, acabamento refinado e produção cuidadosa, 
            garantindo móveis <strong className="text-heading font-medium">duráveis</strong>, 
            <strong className="text-heading font-medium"> elegantes</strong> e 
            <strong className="text-heading font-medium"> únicos</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
