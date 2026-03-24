import { motion } from 'framer-motion';

const Card = ({ title, description, icon: Icon, delay = 0, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, boxShadow: "12px 12px 0px rgba(0, 43, 73, 1)" }}
      className={`bg-white border-2 border-groundcloud-blue p-8 flex flex-col h-full transition-shadow duration-300 ${className}`}
    >
      {Icon && (
        <div className="w-16 h-16 bg-groundcloud-gray rounded-full flex items-center justify-center mb-6 border border-groundcloud-blue text-groundcloud-green">
          <Icon size={32} strokeWidth={2.5} />
        </div>
      )}
      <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-4 text-groundcloud-blue">
        {title}
      </h3>
      <p className="font-sans text-groundcloud-text flex-grow leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;
