import AnimatedText from '@/components/animatedText';
import Containaer from '@/components/container';
import Head from 'next/head';
import Image from 'next/image';
import PerfilPic from '../../../public/assets/pic1.png';

const About = () => {
  return (
    <Containaer>
      <Head>
        <title>Maicon Botelho | Sobre</title>
        <meta name="description" content="Página sobre Maicon Botelho" />
      </Head>

      <main className="h-custom-calc flex w-full flex-col items-center pt-20">
        <div>
          <AnimatedText
            text="O segredo "
            className="text-darkTheme dark:text-ligthTheme text-3xl font-bold leading-relaxed md:text-5xl uppercase"
          />
          <AnimatedText
            text="DO SUCESSO É COMEÇAR!"
            className=" text-primaryColor dark:text-primaryColor hidden text-3xl uppercase font-bold lg:block md:text-5xl"
          />

          <AnimatedText
            text="DO SUCESSO"
            className="text-darkTheme dark:text-ligthTheme text-3xl font-bold uppercase md:text-5xl lg:hidden"
          />

          <AnimatedText
            text="É COMEÇAR!"
            className="text-primaryColor uppercase dark:text-primaryColor text-3xl font-bold md:text-5xl lg:hidden"
          />

          <div className="mt-10 lg:mt-32 flex flex-col items-center justify-between gap-32 md:flex-row">
            <div className="md-order-1 order-2 col-span-8 flex flex-col items-start justify-start md:col-span-4">
              <h2 className="text-darkTheme/75 mb-4 text-lg font-bold uppercase dark:text-white">
                Sobre
              </h2>
              <p className="font-medium">
                Com 10 anos de experiência em treinamento físico, sendo 4 como
                proprietário, adquiri habilidades sólidas em comunicação,
                liderança e adaptação. Atualmente atuo com desenvolvimento web,
                estudando Análise e Desenvolvimento de Sistemas na Uninter,
                focando-me em React, JavaScript (ES6), HTML5 e CSS3.{' '}
              </p>
              <p className="my-4 font-medium">
                Das minhas experiências anteriores, trago não apenas habilidades
                técnicas, mas também atributos como proatividade,
                comprometimento, inteligência emocional e flexibilidade. Estou
                entusiasmado para contribuir com meus projetos.
              </p>
            </div>

            <div className="dark:bg-darkTheme border-darkTheme bg-ligthTheme shadow-quadroDark dark:shadow-quadro relative order-1 h-max rounded-2xl border-2 border-solid p-8 dark:border-white md:order-2">
              <Image
                src={PerfilPic}
                alt="Maicon Botelho"
                className="h-auto w-full rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </main>
    </Containaer>
  );
};

export default About;
