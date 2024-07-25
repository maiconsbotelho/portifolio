'use client';

import { CardProps } from '@/interfaces/cardProps';
import Image from 'next/image';
import Link from 'next/link';
import { FaNodeJs } from 'react-icons/fa';
import {
  SiCss3,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

// Mapeamento de ícones
const technologyIcons: Record<string, React.ReactNode> = {
  React: <SiReact size={24} color="#61DAFB" />, // React: #61DAFB
  'Next.js': <SiNextdotjs size={24} color="#ffffff" />, // Next.js: #000000
  'Tailwind CSS': <SiTailwindcss size={24} color="#38B2AC" />, // Tailwind CSS: #38B2AC
  HTML: <SiHtml5 size={24} color="#E34F26" />, // HTML: #E34F26
  CSS: <SiCss3 size={24} color="#1572B6" />, // CSS: #1572B6
  Prisma: <SiPrisma size={24} color="#2D3748" />, // Prisma: #2D3748
  Firebase: <SiFirebase size={24} color="#FFCA28" />, // Firebase: #FFCA28
  TypeScript: <SiTypescript size={24} color="#3178C6" />, // TypeScript: #3178C6
  JavaScript: <SiJavascript size={24} color="#F7DF1E" />, // JavaScript: #F7DF1E
  'Node.js': <FaNodeJs size={24} color="#339933" />, // Node.js: #339933
  'Nest.js': <SiNestjs size={24} color="#E0234E" />, // Nest.js: #E0234E
};

const Card3D: React.FC<CardProps> = ({
  title,
  description,
  img,
  technologies = [],
  github = '',
  website = '',
}) => {
  return (
    <CardContainer className="inter-var w-auto">
      <CardBody className="group/card relative h-auto rounded-xl border border-black/[0.1] bg-black p-6 hover:shadow-2xl hover:shadow-black dark:border-white/[0.2] dark:hover:shadow-2xl dark:hover:shadow-blue-500">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 h-28 max-w-sm text-sm text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-full w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        {/* Tecnologias usadas */}
        <div className="mt-10 flex items-center justify-center text-neutral-300">
          <span>Tecnologias:</span>
        </div>
        <div className="mt-1 flex items-center justify-center gap-2">
          {technologies.map((tech) => (
            <div className="group relative" key={tech}>
              <CardItem
                translateZ={20}
                className="text-darkTheme dark:text-ligthTheme"
              >
                {technologyIcons[tech] || <span>{tech}</span>}
              </CardItem>
              <div className="absolute bottom-0 left-1/2 mt-2 hidden -translate-x-1/2 translate-y-full transform rounded-lg bg-gray-800 px-2 py-1 text-sm text-white group-hover:block">
                {tech}
              </div>
            </div>
          ))}
        </div>

        {/* Tecnologias usadas */}

        <div className="mt-10 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href={github}
            target="__blank"
            className="text-ligthTheme"
          >
            <SiGithub size={40} />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={website}
            target="__blank"
            className="ml-4 rounded-3xl bg-secondaryColor p-2 px-6 text-lg font-semibold text-white"
          >
            Visite
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card3D;
