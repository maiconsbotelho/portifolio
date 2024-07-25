'use client';
import { AnimatedProps } from '@/interfaces/animatedProps';
import { Typewriter } from 'react-simple-typewriter';



const DigitedText = ({words = [], className = ''}: AnimatedProps) => {
  return (
    
      <div className={`-tracking-tighter inline-block w-full ${className}`}>
      <Typewriter
        words={words}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
      </div>
    
  );
};

export default DigitedText;
