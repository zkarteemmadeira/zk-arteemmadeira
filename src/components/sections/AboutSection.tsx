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
              Na <strong className="text-heading font-medium">ZK Arte em Madeira</strong> acreditamos que móveis vão 
              muito além da funcionalidade. Cada peça carrega cuidado, dedicação e atenção aos detalhes.
            </p>

            <p className="body-base text-body leading-[1.9]">
              Somos uma empresa familiar apaixonada pela marcenaria artesanal, unindo beleza, conforto e durabilidade
               em móveis de madeira maciça, sempre com foco na qualidade do acabamento.
            </p>

            <p className="body-base text-body leading-[1.9]">
              Acompanhamos todo o processo de perto, da produção ao atendimento, porque acreditamos que qualidade e um 
              atendimento próximo fazem toda a diferença.
            </p>
            
            <p className="body-base text-body leading-[1.9]">
              Mais do que fabricar móveis, queremos criar peças aconchegantes e funcionais, feitas para transformar ambientes 
              em espaços de convivência e bons momentos.
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
