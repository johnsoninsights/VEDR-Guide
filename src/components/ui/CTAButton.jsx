import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTAButton = ({ to, children, className = "", primary = true }) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 font-display font-bold text-lg uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-none";
  
  const styles = primary 
    ? "bg-groundcloud-green text-groundcloud-blue hover:bg-groundcloud-blue hover:text-white border-2 border-transparent hover:border-groundcloud-green"
    : "bg-transparent text-groundcloud-blue border-2 border-groundcloud-blue hover:bg-groundcloud-blue hover:text-white";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
      <Link to={to} className={`${baseClasses} ${styles} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
};

export default CTAButton;
