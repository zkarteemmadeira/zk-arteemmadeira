import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/accordion';

const faqs = [
  {
    question: 'A madeira é tratada?',
    answer: `As madeiras que trabalhamos são secas e recebem tratamento com produtos específicos para garantir mais durabilidade e proteção.

Nos bancos, aplicamos Polisten, que protege a madeira contra a ação do tempo, umidade, fungos e cupins, além de realçar os veios naturais e proporcionar um excelente acabamento.

Já nas cadeiras, utilizamos Cetol, um acabamento de alta qualidade que cria uma película protetora flexível, ajudando a evitar ressecamento, descascamento e desgaste causado pelo sol e pela chuva, mantendo a beleza da madeira por muito mais tempo.`,
  },
  {
    question: 'Pode ficar em área externa?',
    answer: `Para área externa, indicamos principalmente as peças produzidas em madeira de eucalipto, pois é uma madeira mais densa, resistente e durável, suportando melhor a exposição ao sol, chuva e variações climáticas. Além disso, recebe tratamento e acabamento que ajudam na proteção contra umidade, fungos e cupins.

Já o pinus, apesar de também ser uma madeira tratada com Polisten e muito bonita, possui características mais macias e delicadas, sendo mais indicado para ambientes internos ou áreas externas cobertas, onde ficará menos exposto diretamente às ações do tempo.`,
  },
  {
    question: 'Fazem entrega?',
    answer: `Sim, fazemos entrega! Dependendo da localidade, realizamos a entrega com veículo próprio ou enviamos por transportadora, sempre buscando a opção mais segura e prática para que seu pedido chegue com qualidade até você.`,
  },
  {
    question: 'O móvel vai montado?',
    answer: `Sim, os bancos são enviados totalmente montados, prontos para uso.

Já as cadeiras, quando enviadas por transportadora, seguem pré-montadas para garantir mais segurança no transporte e facilitar a entrega. Nas entregas realizadas por nós, as cadeiras são entregues já montadas.`,
  },
  {
    question: 'Qual capacidade das mesas?',
    answer: `A capacidade varia conforme o tamanho do produto:

• 1,50m: acomoda confortavelmente 6 pessoas, podendo chegar a 8 lugares utilizando as pontas da mesa.
• 2,00m: acomoda 8 pessoas, com capacidade para até 10 lugares utilizando as pontas.
• 2,50m: acomoda 10 pessoas, podendo chegar a 12 lugares utilizando as pontas da mesa.

São opções ideais para reunir a família e aproveitar bons momentos com conforto e praticidade.`,
  },
];

const FAQSection = () => {
  return (
    <section id="duvidas-frequentes" className="section-spacing bg-card">
      <div className="container-premium">
        <SectionHeading
          title="Dúvidas Frequentes"
          subtitle="Tire suas dúvidas sobre nossos produtos e serviços"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg md:text-xl font-medium text-heading hover:text-wood hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
