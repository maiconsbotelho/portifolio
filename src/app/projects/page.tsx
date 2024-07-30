import AnimatedText from '@/components/animatedText';
import Card3D from '@/components/card3D';
import Container from '@/components/container';
import Head from 'next/head';
import BarbaBrutal from '../../../public/assets/projetos/BarbaBrutal.png';
import Gelateria from '../../../public/assets/projetos/gelateria.png';
import PetBoutique from '../../../public/assets/projetos/petBoutique.png';
import SecretWord from '../../../public/assets/projetos/secretWord.png';
import Sellet from '../../../public/assets/projetos/selletEsmalteria.png';
import SpiderLinks from '../../../public/assets/projetos/SpiderLinks.png';
import Tarefas from '../../../public/assets/projetos/tarefasPlus.png';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Maicon Botelho | Projetos</title>
        <meta
          name="description"
          content="Página de projetos desenvolvidos em React e Next.JS"
        />
      </Head>
      <main className="mb-16 flex w-full flex-col items-center sm:mt-20">
        <Container>
          <AnimatedText
            text="Tudo é possível"
            className="text-base font-bold uppercase text-black dark:text-white sm:text-3xl md:text-5xl"
          />
          <AnimatedText
            text="o impossível apenas demora mais!"
            className="hidden text-3xl font-bold uppercase text-primaryColor md:text-5xl xl:block"
          />{' '}
          <AnimatedText
            text="o impossível apenas "
            className="text-base font-bold uppercase text-primaryColor sm:text-3xl md:text-5xl xl:hidden"
          />
          <AnimatedText
            text="demora mais!"
            className="text-base font-bold uppercase text-primaryColor sm:text-3xl md:text-5xl xl:hidden"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-10 sm:mt-20">
            <Card3D
              title="Sellet Esmalteria"
              description="Projeto desenvolvido para uma esmalteria, com o intuito de mostrar os
          serviços oferecidos e os contatos da empresa."
              img={Sellet}
              technologies={['CSS', 'HTML', 'JavaScript']}
              github="https://github.com/maiconsbotelho/SelletEsmalteria"
              website="https://selletesmalteria.com.br/"
            />
            <Card3D
              title="Barba Brutal"
              description="Projeto desenvolvido pensando em uma Barbearia, com o intuito de facilitar o agendamento, mostrar os
            serviços oferecidos e os contatos da empresa."
              img={BarbaBrutal}
              technologies={[
                'React',
                'Next.js',
                'Tailwind CSS',
                'TypeScript',
                'PostgreSQL',
                'Prisma',
                'Nest.js',
              ]}
              github="https://github.com/maiconsbotelho/barba-brutal"
              website="https://maiconbotelho-barbabrutal.vercel.app/"
            />
            <Card3D
              title="Spider LinkPage"
              description="LinkPage é uma LandingPage desenvolvida com Next.js que oferece uma página de links personalizada, ideal para exibir uma lista de links de maneira estilizada e eficiente."
              img={SpiderLinks}
              technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
              github="https://github.com/maiconsbotelho/linkpage"
              website="https://maiconbotelho-linkpage.vercel.app/"
            />
            <Card3D
              title="Gelateria"
              description="Gelateria é uma aplicação web desenvolvida para uma sorveteria artesanal. O objetivo da aplicação é apresentar os produtos, eventos e informações sobre a sorveteria de forma atrativa e informativa."
              img={Gelateria}
              technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
              github="https://github.com/maiconsbotelho/gelateria"
              website="https://maiconbotelho-gelateria.vercel.app/"
            />
            <Card3D
              title="Tarefas+"
              description="Desenvolvido para gerenciar tarefas, com o intuito de mostrar as tarefas a serem feitas, com a possibilidade de incluir comentários e excluí-las."
              img={Tarefas}
              technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
              github="https://github.com/maiconsbotelho/tarefas"
              website="https://maiconbotelho-tarefas.vercel.app/"
            />
            <Card3D
              title="SecretWord"
              description="Desenvolvido para jogar o jogo da forca, com o intuito de adivinhar a palavra secreta."
              img={SecretWord}
              technologies={['React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
              github="https://github.com/maiconsbotelho/secretword"
              website="https://maiconsbotelho.github.io/secretword/"
            />
            <Card3D
              title="Pet Boutique"
              description="Desenvolvido para uma pet shop, com o intuito de mostrar os serviços oferecidos e os contatos da empresa."
              img={PetBoutique}
              technologies={['HTML', 'CSS']}
              github="https://github.com/maiconsbotelho/Pet_boutique"
              website="https://maiconsbotelho.github.io/Pet_boutique/"
            />
          </div>  
        </Container>
      </main>
    </>
  );
};

export default Projects;
