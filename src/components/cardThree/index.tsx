'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { FaGithub } from 'react-icons/fa';

export function CardThree() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Sellet Esmalteria
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          Projeto desenvolvido para uma esmalteria, com o intuito de mostrar os
          serviços oferecidos e os contatos da empresa.
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src="/assets/projetos/selletEsmalteria.png"
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/maiconsbotelho/SelletEsmalteria"
            target="__blank"
            className="text-black dark:text-white"
          >
            <FaGithub size={40} />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://selletesmalteria.com.br/"
            target="__blank"
            className="bg-primaryColor dark:text-black ml-4 rounded-lg p-2 px-6 text-lg font-semibold text-white"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
