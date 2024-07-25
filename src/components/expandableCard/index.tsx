'use client';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            {/* // Botão de fechar */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primaryColor lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            {/* // Card */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              {/* // Imagem */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={1000}
                  height={1000}
                  src={active.src}
                  alt={active.title}
                  className="w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
                />
              </motion.div>

              {/* // Conteúdo */}
              <div>
                <div className="flex items-start justify-between p-4">
                  {/* // Título e descrição */}
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-base font-medium text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-base text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>

                {/* // Conteúdo */}
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-400 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base"
                  >
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* // Cards */}
      <ul className="mx-auto grid w-full grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="flex cursor-pointer flex-col rounded-xl bg-black p-4 hover:shadow-primaryColor dark:border dark:border-white/[0.2]"
          >
            <div className="flex w-full flex-col gap-4">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={500}
                  height={500}
                  src={card.src}
                  alt={card.title}
                  className="w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex flex-col items-center justify-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-center text-base font-medium text-white md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-base text-neutral-300 md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: 'DevMedia',
    title: 'HTML5',
    src: '/assets/certificates/devMediaHTML.png',
    ctaText: 'Visit',
    ctaLink: '#',
    content: () => {
      return (
        <p>
          Abrangendo conceitos como estruturação de páginas, semântica,
          formulários, multimídia e boas práticas. Desenvolvi habilidades
          essenciais para criar websites modernos e responsivos
        </p>
      );
    },
  },
  {
    description: 'DevMedia',
    title: 'CSS3',
    src: '/assets/certificates/devMediaCSS.png',
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Aprendi a estilizar páginas web, criar layouts responsivos, aplicar
          animações, utilizar Flexbox e Grid, além de boas práticas para design
          consistente e eficiente
        </p>
      );
    },
  },

  {
    description: 'CWI Software',
    title: 'CWI Crescer - Level 1',
    src: '/assets/certificates/cwi.png',
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Desenvolvi 13 projetos práticos utilizando Java, JavaScript,
          PostgreSQL, HTML e CSS. Aprendendo fundamentos sólidos de programação
          e desenvolvimento web com testes unitários usando Jest e JUnit
        </p>
      );
    },
  },
  {
    description: 'Udemy',
    title: 'Algoritmos e Lógica de Programação',
    src: '/assets/certificates/udemyAlgoritmos.png',
    ctaText: 'Visit',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Aprendi variáveis, estruturas condicionais e repetitivas, vetores,
          matrizes e testes de mesa, aplicando em C, C++, Python, C# e Java com
          mais de 50 exercícios
        </p>
      );
    },
  },
];
