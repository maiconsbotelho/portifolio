'use client';

import { motion } from 'framer-motion';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    // <TransitionEffects>{children}</TransitionEffects>
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
