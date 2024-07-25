import AnimatedText from '@/components/animatedText';
import SocialLinks from '@/components/socialLinks';
import DigitedText from '../digitedText';

const Welcome = () => {
  return (
    <section>
      <AnimatedText
        text="Olá, sou o"
        className="text-left text-2xl text-darkTheme dark:text-white"
      />
      <AnimatedText
        text="Maicon Botelho"
        className="text-left text-2xl sm:text-3xl font-bold capitalize text-darkTheme md:!text-5xl lg:!text-3xl xl:!text-4xl 2xl:!text-5xl dark:text-white"
      />
      <DigitedText
        words={['Desenvolvedor Full-Stack', 'Desenvolvedor Web']}
        className="text-left text-1xl sm:text-2xl font-bold text-secondaryColor md:!text-4xl lg:!text-2xl xl:!text-2xl 2xl:!text-3xl dark:text-primaryColor"
      />
      <div className="mb-14 mt-5 hidden lg:block">
        <SocialLinks />
      </div>

      <p className="mt-5 text-xl font-medium">
        "O sucesso é a soma de pequenos esforços repetidos diariamente." -
        Robert Collier
      </p>
    </section>
  );
};

export default Welcome;


// text-2xl sm:text-3xl md:!text-5xl lg:!text-3xl xl:!text-4xl 2xl:!text-5xl