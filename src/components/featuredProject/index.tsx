import { ProjectProps } from '@/interfaces/projectProps';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const FeaturedProject: React.FC<ProjectProps> = ({
  type,
  title,
  summary,
  img,
  link = '',
  github = '',
}) => {
  return (
    <article className="dark:shadow-quadro relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid dark:bg-darkTheme dark:border-ligthTheme border-darkTheme bg-white p-6 shadow-quadroDark">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
          <Image
            src={img}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-20 transition-all duration-300 hover:bg-opacity-0"></div>
        </div>

        {/* <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
          <Image src={img} alt={title} className="hover: h-auto w-full" />
        </div> */}
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6">
        <span className="text-xl font-medium dark:text-primaryColor text-secondaryColor">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium dark:text-ligthTheme text-darkTheme">{summary}</p>
        <div className="mt-10 flex w-full items-center justify-start gap-5">
          <Link href={github} target="_blank" className="text-darkTheme dark:text-ligthTheme">
            <FaGithub size={40} />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-secondaryColor dark:bg-primaryColor p-2 px-6 text-lg font-semibold text-white dark:text-darkTheme"
          >
            Visite o projeto
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
