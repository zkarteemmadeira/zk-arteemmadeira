 import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/sections/ContactSection';
import SectionHeading from '@/components/ui/SectionHeading';

const catalogProducts = [
  { name: 'Mesa de Jantar Peroba Rosa', category: 'Mesas' },
  { name: 'Cadeira Clássica', category: 'Cadeiras' },
  { name: 'Mesa de Centro Rústica', category: 'Mesinhas' },
  { name: 'Banco de Madeira Maciça', category: 'Bancos' },
  { name: 'Escrivaninha Executiva', category: 'Escrivaninhas' },
  { name: 'Cadeira com Encosto Alto', category: 'Cadeiras' },
  { name: 'Mesa Lateral Elegante', category: 'Mesinhas' },
  { name: 'Pia de Banheiro Artesanal', category: 'Pias' },
  { name: 'Mesa de Jantar 6 Lugares', category: 'Mesas' },
  { name: 'Conjunto Cadeiras Dining', category: 'Cadeiras' },
  { name: 'Banco Bar Alto', category: 'Bancos' },
  { name: 'Escrivaninha Compacta', category: 'Escrivaninhas' },
];

const Catalogo = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-premium text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-display text-heading mb-6">
                Nosso Catálogo
              </h1>
              <p className="body-large text-body max-w-2xl mx-auto">
                Explore nossa coleção de móveis artesanais em madeira. 
                Cada peça é única e desenvolvida com maestria.
              </p>
              <div className="mt-8 w-24 h-px bg-wood mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Catalog Grid */}
        <section className="section-spacing pt-0">
          <div className="container-premium">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {catalogProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-card border border-border hover:border-wood/30 hover:shadow-card transition-all duration-300 overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-secondary flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted opacity-50" />
                    <div className="relative z-10 text-center p-4">
                      <div className="w-16 h-16 mx-auto mb-3 border border-wood/20 rounded-full flex items-center justify-center">
                        <svg 
                          className="w-8 h-8 text-wood/40"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-muted-foreground">Imagem em breve</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <span className="text-xs text-wood font-medium uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-heading mt-2 group-hover:text-wood transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Catalogo;
