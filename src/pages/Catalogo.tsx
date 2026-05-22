 import { motion } from 'framer-motion';
 import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/sections/ContactSection';
import img1 from '@/assets/catalogo/catalago-1.jpg'
import img2 from '@/assets/catalogo/catalago-2.jpg'
import img3 from '@/assets/catalogo/catalago-3.jpg'
import img4 from '@/assets/catalogo/catalago-4.jpg'
import img5 from '@/assets/catalogo/catalago-5.jpg'
import img6 from '@/assets/catalogo/catalago-6.jpg'
import img7 from '@/assets/catalogo/catalago-7.jpg'
import img8 from '@/assets/catalogo/catalago-8.jpg'
import img9 from '@/assets/catalogo/catalago-9.jpg'
import img10 from '@/assets/catalogo/catalago-10.jpg'
import img11 from '@/assets/catalogo/catalago-11.jpg'
import img12 from '@/assets/catalogo/catalago-12.jpg'




const catalogProducts = [
  { name: '', 
    category: 'Cadeiras',
    image: img1
   },

  { name: '',
    category: 'Cadeiras',
    image: img2
   },

  { name: '',
     category: 'Cadeiras',
     image: img3
    },

  { name: '',
     category: 'Cadeiras',
     image: img4
    },

  { name: '',
     category: 'Banco que Vira Mesa',
     image: img5
    },

  { name: '',
     category: 'Banco que Vira Mesa',
     image: img6
    },
     
  { name: '',
     category: 'Banco que Vira Mesa',
     image: img7
    },

  { name: '',
     category: 'Banco que Vira Mesa',
     image: img8
    },

    { name: '',
     category: 'Cadeiras',
     image: img9
    },

  { name: '',
     category: 'Cadeiras',
     image: img10
    },
     
  { name: '',
     category: 'Banco que Vira Mesa',
     image: img11
    },

  { name: '',
     category: 'Banco que Vira Mesa',
     image: img12
    },
];

const Catalogo = () => {
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
                  className="group bg-card border border-border hover:border-wood/30 hover:shadow-card transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[5/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <span className="text-xs text-wood font-medium uppercase tracking-wider">
                      {product.category}
                    </span>
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
