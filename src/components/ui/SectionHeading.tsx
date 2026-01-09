import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="heading-section text-heading mb-4">{title}</h2>
      {subtitle && (
        <p className="body-large text-body max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`mt-6 w-16 h-px bg-wood ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionHeading;
