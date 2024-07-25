import { ProjectProps } from '@/interfaces/projectProps';
import Image from 'next/image';
import React from 'react';

const CardBase: React.FC<ProjectProps> = ({
  type,
  title,
  summary,
  img,
  cargaHoraria,
}) => {
  return (
    <article className="dark:shadow-boxDark relative flex h-full max-h-dvh w-full flex-col items-center justify-start rounded-2xl border border-solid border-darkTheme bg-white p-6 shadow-box">
      <div className="relative w-full cursor-pointer overflow-hidden rounded-lg">
        <div className="relative overflow-hidden rounded-lg">
          <Image src={img} alt={title} className="h-auto w-full" />
          <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-20 transition-all duration-300 hover:bg-opacity-0"></div>
          {/* Sumário posicionado sobre a imagem */}
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-center text-white">{summary}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-between gap-4">
        <div>
          <span className="text-xl font-medium text-secondaryColor">
            {type}
          </span>
          <h2 className="my-2 w-full text-left text-3xl font-bold text-darkTheme">
            {title}
          </h2>
        </div>
        {/* Carga horária como um selo no canto superior direito do card */}
        <div className="absolute right-0 top-0 m-4 rounded-lg bg-secondaryColor p-2 px-6 text-base font-semibold text-white dark:bg-primaryColor dark:text-darkTheme">
          <p>{cargaHoraria}</p>
        </div>
      </div>
    </article>
  );
};

export default CardBase;
