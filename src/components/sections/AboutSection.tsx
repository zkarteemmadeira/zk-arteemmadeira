import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const AboutSection = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="quem-somos" className="section-spacing bg-secondary/30">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Quem Somos" 
            subtitle="Uma história de paixão pela madeira e dedicação à excelência"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="body-base text-body leading-[1.9]">
              A <strong className="text-heading font-medium">Arte de Minas Móveis</strong> nasceu do 
              amor pela tradição mineira e do respeito profundo pela madeira como matéria-prima nobre. 
              Cada peça que produzimos carrega consigo a história de uma família dedicada ao ofício 
              da marcenaria, transmitido de geração em geração.
            </p>

            <p className="body-base text-body leading-[1.9]">
              Nosso compromisso vai além da simples fabricação de móveis. Buscamos criar obras que 
              transformam ambientes e perduram por gerações. Utilizamos técnicas tradicionais aliadas 
              a acabamentos contemporâneos, garantindo peças únicas que unem <em className="text-wood not-italic font-medium">funcionalidade</em>, 
              <em className="text-wood not-italic font-medium"> durabilidade</em> e <em className="text-wood not-italic font-medium">beleza atemporal</em>.
            </p>

            <p className="body-base text-body leading-[1.9]">
              Trabalhamos com madeiras selecionadas, respeitando os veios naturais e as características 
              únicas de cada tora. O resultado são móveis que não apenas mobiliam, mas contam histórias 
              e trazem a alma da madeira para dentro do seu lar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-3 border border-wood/30 text-wood hover:bg-wood hover:text-primary-foreground transition-all duration-300 text-sm font-medium tracking-wide"
            >
              Fale Conosco
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
