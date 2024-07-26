'use client';
import Container from '@/components/container';
import { CustomLink, CustomMobileLink } from '@/components/customLink';
import Logo from '@/components/logo';
import ThemeBtn from '@/components/themeBtn';
import { useState } from 'react';
import SocialLinks from '@/components/socialLinks';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado do menu

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Função que alterna o estado do menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <header className="flex h-28 w-full items-center justify-between font-medium">
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
            <CustomLink
              href="/education"
              title="Certificados"
              className="ml-10"
            />
          </nav>

          <ThemeBtn />
        </div>
        <div className='lg:hidden'>
          <ThemeBtn />
        </div>
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className="fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between gap-5 rounded-lg bg-black/90 py-32 backdrop-blur-md dark:bg-white/75 lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center text-xl">
              <CustomMobileLink
                href="/"
                title="Home"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="Sobre"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/projects"
                title="Projetos"
                className=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/education"
                title="Certificados"
                className=""
              />
            </nav>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* <ThemeBtn /> */}
              <SocialLinks />
            </div>
          </motion.div>
        ) : null}
      </header>
    </Container>
  );
};

export default NavBar;
