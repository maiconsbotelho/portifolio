'use client';
import { CustomLink, CustomMobileLink } from '@/components/customLink';

import { useState } from 'react';

const ToggleBtn = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado do menu

  // Função que alterna o estado do menu
  const handleToggle = () => {
    setIsOpen(!isOpen); 
  };



  return (
    <div>
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
    </div>
  );
};

const NavigationLinks = () => {
  return (
    <nav className="text-xl">
      <CustomLink href="/" title="Home" className="mr-10" />
      <CustomLink href="/about" title="Sobre" className="mx-10" />
      <CustomLink href="/projects" title="Projetos" className="mx-10" />
      <CustomLink href="/education" title="Certificados" className="ml-10" />
    </nav>
  );
};

const NavigationMobileLinks = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado do menu
    const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    
    <nav className="flex flex-col items-center justify-center text-xl">
      <CustomMobileLink href="/" title="Home" className="mr-10"  toggle={handleClick}/>
      <CustomMobileLink href="/about" title="Sobre" className="mx-10"  toggle={handleClick}/>
      <CustomMobileLink href="/projects" title="Projetos" className="mx-10" toggle={handleClick} />
      <CustomMobileLink
        href="/education"
        title="Certificados"
        className="ml-10"
      />
    </nav>
  );
};

export { NavigationLinks, NavigationMobileLinks };
