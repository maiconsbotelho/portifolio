import AnimatedText from '@/components/animatedText';
import SocialLinks from '@/components/socialLinks';
import DigitedText from '../digitedText';

const Welcome = () => {
  return (
    <section>
      <AnimatedText
        text="Olá, sou o"
        className="text-left text-sm text-darkTheme dark:text-white"
      />
      <AnimatedText
        text="Maicon Botelho"
        className="text-left text-2xl font-bold capitalize text-darkTheme dark:text-white sm:text-3xl md:!text-5xl lg:!text-3xl xl:!text-4xl 2xl:!text-5xl"
      />
      <DigitedText
        words={['Desenvolvedor Full-Stack', 'Desenvolvedor Web']}
        className="text-1xl text-left font-bold text-primaryColor sm:text-2xl md:!text-4xl lg:!text-2xl xl:!text-2xl 2xl:!text-3xl"
      />
      <div className="mb-14 mt-5 hidden lg:block">
        <SocialLinks />
      </div>

      <p className="mt-5 text-base font-medium md:text-xl">
        &quot;O sucesso é a soma de pequenos esforços repetidos
        diariamente.&quot;
      </p>
      <p className='text-right mt-2 text-xs md:text-base  text-zinc-700'>
        - Robert Collier -
      </p>
    </section>
  );
};

export default Welcome;


// text-2xl sm:text-3xl md:!text-5xl lg:!text-3xl xl:!text-4xl 2xl:!text-5xl