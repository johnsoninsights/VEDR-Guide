import { motion } from 'framer-motion';

const PageWrapper = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-[calc(100vh-80px)] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
