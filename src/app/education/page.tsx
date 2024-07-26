import AnimatedText from '@/components/animatedText';

import Container from '@/components/container';
import { ExpandableCard } from '@/components/expandableCard';
import Head from 'next/head';

const Education = () => {
  return (
    <div>
      <Head>
        <title>Maicon Botelho | Projetos</title>
        <meta
          name="description"
          content="Página de projetos desenvolvidos em React e Next.JS"
        />
      </Head>
      <main className="mb-16 flex w-full flex-col items-center pt-20">
        <Container>
          <div className="mb-10 lg:mb-32">
            <AnimatedText
              text="A Persistência "
              className="text-3xl uppercase font-bold text-black dark:text-white md:text-5xl"
            />
            <AnimatedText
              text="é o caminho do êxito"
              className="text-3xl uppercase font-bold text-primaryColor dark:text-primaryColor md:text-5xl"
            />
          </div>
          <ExpandableCard />
        </Container>
      </main>
    </div>
  );
};

export default Education;
