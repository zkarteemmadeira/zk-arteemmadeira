import { motion } from 'framer-motion';
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Transformamos o card num Flexbox para deixar os botões sempre alinhados por igual
              className="group flex flex-col h-full p-6 md:p-8 bg-card border border-border hover:border-wood/30 hover:shadow-xl transition-all duration-300 text-center rounded-lg"
            >
              {/* Container da foto com o Zoom ampliado (scale-110) */}
              <div className="w-full aspect-square mb-4 overflow-hidden rounded-md bg-white">
                <img 
                  src={product.icon} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Título do produto */}
              <h3 className="font-serif text-lg md:text-xl font-medium text-heading mb-6 flex-grow">
                {product.name}
              </h3>

              {/* Botão de Compra Individual via WhatsApp */}
              <a
                href={"https://wa.me/555192438775?text=Olá! Tenho interesse neste produto: " + product.name}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-medium text-sm rounded hover:bg-[#128C7E] transition-colors shadow-sm"
              >
                Comprar pelo Whats
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
