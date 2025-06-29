import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
}

export const AnimatedWrapper = ({ 
  children, 
  variants, 
  className = "",
  delay = 0,
  threshold = 0.1 
}: AnimatedWrapperProps) => {
  const { ref, isInView } = useScrollAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedSection = ({ 
  children, 
  className = "",
  delay = 0,
  threshold = 0.1 
}: AnimatedWrapperProps) => {
  const { ref, isInView } = useScrollAnimation(threshold);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export const AnimatedCard = ({ 
  children, 
  className = "",
  delay = 0,
  threshold = 0.1 
}: AnimatedWrapperProps) => {
  const { ref, isInView } = useScrollAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedText = ({ 
  children, 
  className = "",
  delay = 0,
  threshold = 0.1 
}: AnimatedWrapperProps) => {
  const { ref, isInView } = useScrollAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedImage = ({ 
  children, 
  className = "",
  delay = 0,
  threshold = 0.1 
}: AnimatedWrapperProps) => {
  const { ref, isInView } = useScrollAnimation(threshold);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 