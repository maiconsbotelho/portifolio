import Link from 'next/link';

interface CvButtonProps {
  className?: string;
  href: string;
  text: string;
  download?: boolean;
  target?: '_self' | '_blank'; // Adiciona a opção de abrir em nova aba
}

const CvButton: React.FC<CvButtonProps> = ({
  className = '',
  href,
  text,
  download = false,
  target = '_self', // Padrão para abrir no mesmo alvo
}) => {
  return (
    <Link
      href={href}
      className={`inline-block rounded-3xl w-28 sm:w-36 px-5 py-2 text-center text-xs sm:text-base font-semibold tracking-widest 
        text-white transition-all duration-300 ease-linear  ${className}`}
      download={download ? href : undefined} // Define download apenas se for necessário
      target="_blank" // Define o target
    >
      {text}
    </Link>
  );
};

export default CvButton;
