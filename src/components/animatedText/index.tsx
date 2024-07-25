'use client';
import { AnimatedProps } from '@/interfaces/animatedProps';
import { motion } from 'framer-motion';

const quotes = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const AnimatedText = ({ text = '', className = '' }: AnimatedProps) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden text-center">
      <motion.h1
        className={`inline-block w-full -tracking-tighCustom ${className}`}
        variants={quotes}
        initial="initial"
        animate="animate"
      >
        {text.split('').map((word: String, index: number) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
