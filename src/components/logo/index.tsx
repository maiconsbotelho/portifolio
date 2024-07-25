'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="mt-2 hidden lg:flex items-center justify-center text-white">
      <MotionLink
        href="/"
        className="bg-dark text-ligth flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
        style={{ backgroundColor: '#121212' }}
      >
        MB
      </MotionLink>
    </div>
  );
};

export default Logo;
