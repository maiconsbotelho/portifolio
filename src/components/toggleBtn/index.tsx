'use client';
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
          className={`block h-0.5 w-6 rounded-sm bg-darkTheme transition-all duration-300 ease-out dark:bg-ligthTheme ${isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}`}
        ></span> 
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-darkTheme transition-all duration-300 ease-out dark:bg-ligthTheme ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-darkTheme transition-all duration-300 ease-out dark:bg-ligthTheme ${isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}`}
        ></span>
      </button>
    </div>
  );
};

export default ToggleBtn;
