import TechnologyIcon from '@/components/technologyIcons';

interface StackIconsProps {
  size?: number; // Tamanho opcional
}

const StackIcons: React.FC<StackIconsProps> = ({ size = 24 }) => {
  const stacks = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'Prisma',
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
      {stacks.map((stack) => (
        <TechnologyIcon
          key={stack}
          technology={stack}
          size={size} // Passa o tamanho como prop
        />
      ))}
    </div>
  );
};

export default StackIcons;
