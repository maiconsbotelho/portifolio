import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TransitionEffectsProps {
  children: ReactNode;
}

const TransitionEffects: React.FC<TransitionEffectsProps> = ({ children }) => {
  return (
    <>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-primaryColor"
        initial={{ x: '100%', width: '100%' }} // Corrigido aqui
        animate={{ x: '0%', width: '0%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      <motion.div
        className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-white"
        initial={{ x: '100%', width: '100%' }} // Corrigido aqui
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
      />

      <motion.div
        className="fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-black"
        initial={{ x: '100%', width: '100%' }} // Corrigido aqui
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
      />

      {children}
    </>
  );
};

export default TransitionEffects;
