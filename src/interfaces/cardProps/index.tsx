import { StaticImageData } from 'next/image';

export interface CardProps {
  title: string;
  description: string;
  img: StaticImageData | string;
  technologies?: string[];
  github?: string;
  website?: string;
}


