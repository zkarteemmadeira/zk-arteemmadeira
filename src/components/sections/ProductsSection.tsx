import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  // Isso controla qual produto está aberto na tela gigante (Modal)
  const [produtoSelecionado, setProdutoSelecionado] = useState<any>(null);

  return (
    <section id="produtos" className="section-spacing relative">
      <div className="container-premium">
        <SectionHeading 
          title="Nossos Produtos" 
          subtitle="Peças únicas desenvolvidas com maestria e atenção aos detalhes"
        />

        {/* Grade de Produtos Normal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setProdutoSelecionado(product)}
              className="group flex flex-col h-full p-6 md:p-8 bg-card border border-border hover:border-wood hover:shadow-xl transition-all duration-300 text-center rounded-xl cursor-pointer"
            >
              <div className="w-full aspect-square mb-6 overflow-hidden rounded-md bg-white/50">
                <img 
                  src={product.icon} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="font-serif text-lg md:text-xl font-medium text-heading mb-6 flex-grow">
                {product.name}
              </h3>

              <div className="mt-auto inline-flex items-center justify-center w-full py-3 bg-wood/10 text-wood font-semibold text-sm rounded group-hover:bg-wood group-hover:text-white transition-colors">
                Ver Detalhes
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TELA GIGANTE (MODAL) - Estilo Mercado Livre */}
      <AnimatePresence>
        {produtoSelecionado && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Fundo escuro que borra o site atrás */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setProdutoSelecionado(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Caixa Branca Central */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-background w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              {/* Botão de Fechar o Modal (X) */}
              <button
                onClick={() => setProdutoSelecionado(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Lado Esquerdo: Imagem com Efeito Lupa (Zoom) */}
              <div className="w-full md:w-3/5 bg-white overflow-hidden relative group h-[40vh] md:h-auto border-r border-border">
                {/* Aviso para o cliente saber que tem zoom */}
                <div className="absolute top-4 left-4 z-10 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs flex items-center gap-2 pointer-events-none opacity-70 group-hover:opacity-0 transition-opacity">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  Passe o mouse para zoom
                </div>
                
                <img
                  src={produtoSelecionado.icon}
                  alt={produtoSelecionado.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 ease-out md:hover:scale-[1.8] cursor-zoom-in origin-center"
                />
              </div>

              {/* Lado Direito: Informações e Botão Comprar */}
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col bg-card overflow-y-auto">
                <div className="mb-auto">
                  <p className="text-wood font-medium text-sm tracking-widest uppercase mb-3">Linha Exclusiva</p>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-heading mb-6 leading-tight">
                    {produtoSelecionado.name}
                  </h2>
                  <p className="text-body mb-8 text-lg">
                    Peça com design exclusivo e acabamento artesanal de alto padrão. Perfeita para transformar o seu ambiente com elegância e durabilidade.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-body mb-4 text-center">Fale diretamente conosco para orçamentos e prazos:</p>
                  <a
                    href={`https://wa.me/555192438775?text=Olá! Estava no site e tenho interesse neste produto: ${produtoSelecionado.name}`}
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
    </section>
  );
};

export default ProductsSection;
