import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/sections/ContactSection';
import img1 from '@/assets/catalogo/catalago-1.jpg';
import img2 from '@/assets/catalogo/catalago-2.jpg';
import img3 from '@/assets/catalogo/catalago-3.jpg';
import img4 from '@/assets/catalogo/catalago-4.jpg';
import img5 from '@/assets/catalogo/catalago-5.jpg';
import img6 from '@/assets/catalogo/catalago-6.jpg';
import img7 from '@/assets/catalogo/catalago-7.jpg';
import img8 from '@/assets/catalogo/catalago-8.jpg';
import img9 from '@/assets/catalogo/catalago-9.jpg';
import img10 from '@/assets/catalogo/catalago-10.jpg';
import img11 from '@/assets/catalogo/catalago-11.jpg';
import img12 from '@/assets/catalogo/catalago-12.jpg';

const catalogProducts = [
  { name: 'Cadeira Adirondack Clássica', category: 'Cadeiras', image: img1 },
  { name: 'Cadeira Adirondack Clássica', category: 'Cadeiras', image: img2 },
  { name: 'Cadeira Adirondack Premium', category: 'Cadeiras', image: img3 },
  { name: 'Cadeira Adirondack Premium', category: 'Cadeiras', image: img4 },
  { name: 'Madeira de Eucalipto Modelo Premium', category: 'Banco que Vira Mesa', image: img5 },
  { name: 'Modelo Tradicional Pinus', category: 'Banco que Vira Mesa', image: img6 },
  { name: 'Modelo Tradicional Pinus', category: 'Banco que Vira Mesa', image: img7 },
  { name: 'Madeira de Eucalipto Modelo Premium', category: 'Banco que Vira Mesa', image: img8 },
  { name: '', category: 'Cadeiras', image: img9 },
  { name: '', category: 'Cadeiras', image: img10 },
  { name: '', category: 'Banco que Vira Mesa', image: img11 },
  { name: '', category: 'Banco que Vira Mesa', image: img12 },
];

const Catalogo = () => {
  // Controle de qual produto está aberto no Modal
  const [produtoSelecionado, setProdutoSelecionado] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  onClick={() => setProdutoSelecionado(product)}
                  className="group flex flex-col h-full bg-card border border-border hover:border-wood/30 hover:shadow-card transition-all duration-300 overflow-hidden cursor-pointer rounded-lg"
                >
                  <div className="aspect-[5/4] overflow-hidden bg-white/50">
                    <img
                      src={product.image}
                      alt={product.name || product.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-grow text-center">
                    <span className="text-xs text-wood font-medium uppercase tracking-wider mb-2">
                      {product.category}
                    </span>
                    
                    {/* Se tiver nome, mostra o nome. Se não, mantemos o espaço para alinhar. */}
                    {product.name ? (
                      <h3 className="font-serif text-lg font-medium text-heading mb-4 flex-grow">
                        {product.name}
                      </h3>
                    ) : (
                      <div className="flex-grow"></div> 
                    )}

                    <div className="mt-auto inline-flex items-center justify-center w-full py-2.5 bg-wood/10 text-wood font-semibold text-sm rounded group-hover:bg-wood group-hover:text-white transition-colors">
                      Ver Detalhes
                    </div>
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

      {/* TELA GIGANTE (MODAL) */}
      <AnimatePresence>
        {produtoSelecionado && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Fundo escuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setProdutoSelecionado(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Caixa Central */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-background w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              {/* Botão Fechar (X) */}
              <button
                onClick={() => setProdutoSelecionado(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Lado Esquerdo: Imagem com Efeito Zoom */}
              <div className="w-full md:w-3/5 bg-white overflow-hidden relative group h-[40vh] md:h-auto border-r border-border">
                <div className="absolute top-4 left-4 z-10 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-2 pointer-events-none opacity-70 group-hover:opacity-0 transition-opacity">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Passe o mouse para zoom
                </div>
                
                <img
                  src={produtoSelecionado.image}
                  alt={produtoSelecionado.name || produtoSelecionado.category}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 ease-out md:hover:scale-[1.8] cursor-zoom-in origin-center"
                />
              </div>

              {/* Lado Direito: Infos e Botão de Compra */}
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col bg-card overflow-y-auto">
                <div className="mb-auto">
                  <p className="text-wood font-medium text-sm tracking-widest uppercase mb-3">
                    {produtoSelecionado.category}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-heading mb-6 leading-tight">
                    {produtoSelecionado.name || produtoSelecionado.category}
                  </h2>
                  <p className="text-body mb-8 text-lg">
                    Peça com design exclusivo e acabamento artesanal de alto padrão. Perfeita para transformar o seu ambiente com elegância e durabilidade.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-body mb-4 text-center">Fale diretamente conosco para orçamentos e prazos:</p>
                  <a
                    href={`https://wa.me/555192438775?text=Olá! Estava no catálogo do site e tenho interesse neste produto: ${produtoSelecionado.name || produtoSelecionado.category}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#25D366] text-white font-medium text-lg rounded-xl hover:bg-[#128C7E] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Comprar pelo Whats
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Catalogo;
