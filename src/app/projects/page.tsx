import AnimatedText from '@/components/animatedText';
import Card3D from '@/components/card3D';
import Container from '@/components/container';
import Head from 'next/head';
import PetBoutique from '../../../public/assets/projetos/petBoutique.png';
import SecretWord from '../../../public/assets/projetos/secretWord.png';
import Sellet from '../../../public/assets/projetos/selletEsmalteria.png';
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
      <main className="mb-16 flex w-full flex-col items-center pt-20">
        <Container>
          <AnimatedText
            text="Tudo é possível,"
            className="text-3xl uppercase font-bold text-darkTheme dark:text-ligthTheme md:text-5xl"
          />
          <AnimatedText
            text="o impossível apenas demora mais!"
            className="hidden text-3xl uppercase font-bold text-secondaryColor dark:text-primaryColor md:text-5xl xl:block"
          />{' '}
          <AnimatedText
            text="o impossível apenas "
            className="text-3xl font-bold uppercase text-secondaryColor dark:text-primaryColor  md:text-5xl xl:hidden"
          />
          <AnimatedText
            text="demora mais!"
            className="text-3xl font-bold uppercase text-secondaryColor dark:text-primaryColor md:text-5xl xl:hidden"
          />
          <div className="mt-20 flex flex-wrap justify-center gap-10">
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
              title="Tarefas+"
              description="Desenvolvido para gerenciar tarefas, com o intuito de mostrar as tarefas a serem feitas, com a possibilidade de incluir comentários e excluí-las."
              img={Tarefas}
              technologies={['React', 'Next.js', 'Tailwind CSS']}
              github="https://github.com/maiconsbotelho/tarefas"
              website="https://tarefas-maicon.vercel.app/"
            />
            <Card3D
              title="SecretWord"
              description="Desenvolvido para jogar o jogo da forca, com o intuito de adivinhar a palavra secreta."
              img={SecretWord}
              technologies={['React', 'Next.js', 'Tailwind CSS']}
              github="https://github.com/maiconsbotelho/secretword"
              website="https://maiconsbotelho.github.io/secretword/"
            />
            <Card3D
              title="Pet Boutique"
              description="Desenvolvido para uma pet shop, com o intuito de mostrar os serviços oferecidos e os contatos da empresa."
              img={PetBoutique}
              technologies={['React', 'Next.js', 'Tailwind CSS']}
              github="https://github.com/maiconsbotelho/Pet_boutique"
              website="https://maiconsbotelho.github.io/Pet_boutique/"
            />
            <Card3D
              title="Sellet Esmalteria"
              description="Projeto desenvolvido para uma esmalteria, com o intuito de mostrar os
          serviços oferecidos e os contatos da empresa."
              img={Sellet}
              technologies={['React', 'Next.js', 'Tailwind CSS']}
              github="https://github.com/maiconsbotelho/SelletEsmalteria"
              website="https://selletesmalteria.com.br/"
            />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Projects;