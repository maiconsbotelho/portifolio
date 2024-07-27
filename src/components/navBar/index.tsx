'use client';
import { useEffect, useState } from 'react';
import Container from '@/components/container';
import { CustomLink, CustomMobileLink } from '@/components/customLink';
import Logo from '@/components/logo';
import SocialLinks from '@/components/socialLinks';
import ThemeBtn from '@/components/themeBtn';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado do menu
  const [isScrolled, setIsScrolled] = useState(false); // Estado do scroll

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Função para verificar a rolagem da página
  const handleScroll = () => {
    if (window.scrollY > 10) {
      // Ajuste o valor conforme necessário
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Adiciona o event listener
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex h-28 w-full items-center justify-center  transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black text-white bg-opacity-70 backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="m-auto flex w-full max-w-screen-xl items-center justify-between px-3 font-medium">
        {/* Botão de menu mobile (ToggleMenu) */}
        <button
          className="flex flex-col items-center justify-center lg:hidden"
          onClick={handleToggle}
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out dark:bg-white ${isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out dark:bg-white ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out dark:bg-white ${isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}`}
          ></span>
        </button>

        <Logo />
        <div className="hidden gap-5 lg:flex">
          <nav className="text-xl">
            <CustomLink href="/" title="Home" className="mr-10" />
            <CustomLink href="/about" title="Sobre" className="mx-10" />
            <CustomLink href="/projects" title="Projetos" className="mx-10" />
            <CustomLink href="/education" title="Formação" className="ml-10" />
          </nav>

          <ThemeBtn />
        </div>
        <div className="lg:hidden">
          <ThemeBtn />
        </div>
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed left-1/2 top-1/2 z-30 flex h-96 min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between gap-5 rounded-lg bg-black/90 py-10 backdrop-blur-md dark:bg-white/75 lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center text-2xl">
              <CustomMobileLink href="/" title="Home" toggle={handleClick} />
              <CustomMobileLink
                href="/about"
                title="Sobre"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projetos"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/education"
                title="Formação"
                toggle={handleClick}
              />
            </nav>

            <SocialLinks />
          </motion.div>
        ) : null}
      </div>
    </header>
  );
};

export default NavBar;
