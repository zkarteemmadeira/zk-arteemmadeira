import { motion, px } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import cadeiraEssencia from '@/assets/catalogo/catalago-9.jpg';
import cadeiraClassico from '@/assets/cadeira-adirondack-modelo-classico.jpg';
import cadeiraPremium from '@/assets/cadeira-adirondack-modelo-premium.jpg';
import bancoPremium from '@/assets/modelo-premium-eucalipto-banco.png';
import bancoClassico from '@/assets/modelo-classico-eucalipto-banco.png';
import bancoTradicional from '@/assets/modelo-tradicional-pinus-banco.png';
import mesaPremium from '@/assets/modelo-premium-eucalipto-mesa.png';
import mesaClassico from '@/assets/modelo-classico-eucalipto-mesa.png';
import mesaTradicional from '@/assets/modelo-tradicional-pinus-mesa.png';

const products = [
  {
    name: 'Cadeira Adirondack Modelo Essência',
    icon: cadeiraEssencia,
  },
  {
    name: 'Cadeira Adirondack Modelo Clássico',
    icon: cadeiraClassico,
  },
  {
    name: 'Cadeira Adirondack Modelo Premium',
    icon: cadeiraPremium,
  },
  {
    name: 'Modelo Premium Eucalipto - Versão Banco',
    icon: bancoPremium,
  },
  {
    name: 'Modelo Classico Eucalipto - Versão Banco',
    icon: bancoClassico,
  },
  {
    name: 'Modelo Tradicional Pinus - Versão Banco',
    icon: bancoTradicional,
  },
  {
    name: 'Modelo Premium Eucalipto - Versão Mesa',
    icon: mesaPremium,
  },
  {
    name: 'Modelo Classico Eucalipto - Versão Mesa',
    icon: mesaClassico,
  },
  {
    name: 'Modelo Tradicional Pinus - Versão Mesa',
    icon: mesaTradicional,
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
              <div className="w-42 h-42 mb-4 overflow-hidden rounded-md">
                <img 
                  src={product.icon} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-heading mb-2">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
