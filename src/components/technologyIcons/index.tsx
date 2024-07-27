import { FaNodeJs } from 'react-icons/fa';
import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
} from 'react-icons/si';

const technologyIcons: Record<
  string,
  { Component: React.ElementType; color: string }
> = {
  React: { Component: SiReact, color: '#61DAFB' },
  'Next.js': { Component: SiNextdotjs, color: '#ffffff' },
  'Tailwind CSS': { Component: SiTailwindcss, color: '#38B2AC' },
  HTML: { Component: SiHtml5, color: '#E34F26' },
  CSS: { Component: SiCss3, color: '#1572B6' },
  Prisma: { Component: SiPrisma, color: '#2D3748' },
  Firebase: { Component: SiFirebase, color: '#FFCA28' },
  TypeScript: { Component: SiTypescript, color: '#3178C6' },
  JavaScript: { Component: SiJavascript, color: '#F7DF1E' },
  'Node.js': { Component: FaNodeJs, color: '#339933' },
  'Nest.js': { Component: SiNestjs, color: '#E0234E' },
  PostgreSQL: { Component: SiPostgresql, color: '#336791' },
};

interface TechnologyIconProps {
  technology: string;
  size?: number; // Default size
  className?: string;
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({
  technology,
  size = 24, // Default size
  className = '',
}) => {
  const { Component: IconComponent, color } = technologyIcons[technology] || {
    Component: null,
    color: '',
  };

  if (!IconComponent) {
    return <span>{technology}</span>;
  }

  return (
    <div
      className={`relative flex items-center ${className}`}
      style={{ height: size, width: size }}
    >
      <div className="group relative flex h-full w-full items-center justify-center">
        <IconComponent size={size} color={color} />
        <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 transform rounded-lg bg-gray-800 px-2 py-1 text-sm text-white opacity-0 group-hover:opacity-100">
          {technology}
        </div>
      </div>
    </div>
  );
};

export default TechnologyIcon;
