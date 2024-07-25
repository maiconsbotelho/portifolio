import { StaticImageData } from 'next/image';

export interface ProjectProps {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData | string;
  link?: string;
  github?: string;
  cargaHoraria?: string;
}
