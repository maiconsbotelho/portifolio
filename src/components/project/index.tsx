import { ProjectProps } from '@/interfaces/projectProps';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const Project: React.FC<ProjectProps> = ({
  type,
  title,
  summary,
  img, 
  link = '',
  github = '',
}) => {
  return (
    <article className="dark:shadow-quadro relative flex w-full flex-col items-center justify-center rounded-2xl border border-solid border-darkTheme dark:border-ligthTheme bg-white dark:bg-darkTheme  p-6 shadow-quadroDark">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
          <Image src={img} alt={title} className="h-auto w-full" />
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-20 transition-all duration-300 hover:bg-opacity-0"></div>
        </div>
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-secondaryColor dark:text-primaryColor">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-darkTheme dark:text-ligthTheme">{summary}</p>
        <div className="mt-5 flex w-full items-center justify-end gap-5">
          <Link href={github} target="_blank" className='text-darkTheme dark:text-ligthTheme'>
            <FaGithub size={40} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-secondaryColor dark:bg-primaryColor p-2 px-6 text-lg font-semibold text-ligthTheme dark:text-darkTheme"
          >
            Visite
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
