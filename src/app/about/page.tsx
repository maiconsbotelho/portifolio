'use client';
import AnimatedText from '@/components/animatedText';
import Containaer from '@/components/container';
import CvButton from '@/components/cvButton';
import StackIcons from '@/components/stackIcons';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import PerfilPic from '/public/assets/pic1.png';

const MotionLink = motion(Link);

const About = () => {
  return (
    <div>
      <Head>
        <title>Maicon Botelho | Sobre</title>
        <meta name="description" content="Página sobre Maicon Botelho" />
      </Head>
      <main className="mb-16 sm:mt-20 sm:flex">
        <Containaer>
          <div className="flex w-full flex-col items-center">
            <AnimatedText
              text="O segredo "
              className="text-base font-bold uppercase leading-relaxed text-black dark:text-white sm:text-3xl md:text-5xl"
            />
            <AnimatedText
              text="DO SUCESSO É COMEÇAR!"
              className="text-base font-bold uppercase text-primaryColor dark:text-primaryColor sm:text-3xl md:text-5xl lg:block"
            />

            <div className="mt-10 flex flex-col items-center justify-between gap-16 sm:mt-20 sm:gap-32 md:flex-row">
              <div className="md-order-1 order-2 col-span-8 flex flex-col items-center sm:items-start sm:justify-start md:col-span-4">
                <h2 className="mb-4 text-lg font-bold uppercase text-foreground/75">
                  Sobre
                </h2>
                <p className="text-center font-medium sm:text-start">
                  Meu nome é Maicon Botelho e sou desenvolvedor Web Full-Stack,
                  com foco nas tecnologias do ecossistema JavaScript. Meu
                  interesse pela programação começou em 2023, quando tentei
                  desenvolver um aplicativo de agendamentos em Java. Embora eu
                  não tenha conseguido finalizar esse projeto, foram justamente
                  as dificuldades e desafios enfrentados durante o processo que
                  me fizeram me apaixonar pela área.
                </p>
                <p className="mt-4 text-center font-medium sm:text-start">
                  Para aprofundar meus conhecimentos, explorei tecnologias como
                  HTML5, CSS3 e JavaScript, permitindo-me criar projetos mais
                  atrativos e interativos. Desde então, venho cursando Análise e
                  Desenvolvimento de Sistemas na Uninter e aprimorando
                  continuamente minhas habilidades e expertise no
                  desenvolvimento Full-Stack.
                </p>
                <p className="mt-4 text-center font-medium sm:text-start">
                  Iniciei minha carreira profissional atendendo demandas de
                  clientes na minha localidade, e antes disso, dedicava meu
                  tempo à criação de projetos de estudo.
                </p>
                <p className="mt-4 text-center font-medium sm:text-start">
                  Minhas experiências anteriores me trouxeram não apenas
                  habilidades técnicas, mas também atributos como
                  comprometimento, responsabilidade e flexibilidade. Estou
                  entusiasmado para contribuir com meus projetos e fazer parte
                  de novos desafios.
                </p>
              </div>

              <div className="relative order-1 flex w-80 flex-col rounded-2xl border-2 border-solid border-foreground bg-background p-8 shadow-quadroDark dark:shadow-quadro md:order-2">
                <Image
                  src={PerfilPic}
                  alt="Maicon Botelho"
                  className="h-auto w-full rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="mt-5 flex items-center justify-between gap-5">
                  <CvButton
                    href="/curriculo.pdf"
                    text="BaixarCV"
                    download={true}
                    className="flex-grow bg-primaryColor hover:shadow-secondaryColor"
                  />

                  <MotionLink
                    href="https://api.whatsapp.com/send?phone=5551995986876"
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer rounded-full border-2 border-whatsappColor bg-transparent p-2 text-whatsappColor transition-all duration-300 ease-linear hover:bg-whatsappColor hover:text-white hover:shadow-whatsappColor lg:p-3"
                  >
                    <div className="block lg:hidden">
                      <FaWhatsapp size={16} />
                    </div>
                    <div className="hidden lg:block">
                      <FaWhatsapp size={20} />
                    </div>
                  </MotionLink>
                </div>
              </div>
            </div>

            <div className="mt-20 flex flex-col items-center justify-center gap-4 sm:mt-20">
              <p className="mb-10 text-3xl font-bold">Minhas Stacks</p>
              <div className="hidden lg:inline-block">
                <StackIcons size={100} />
              </div>
              <div className="rounded-xl bg-black bg-opacity-70 p-3 lg:hidden">
                <StackIcons size={60} />
              </div>
            </div>
          </div>
        </Containaer>
      </main>
    </div>
  );
};

export default About;
