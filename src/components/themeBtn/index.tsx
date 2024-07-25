'use client';
import UseThemeSwitcher from '@/hooks/useThemeSwitcher';
import { FaRegMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';

const ThemeBtn = () => {
  // hook para trocar o tema
  const [mode, setMode] = UseThemeSwitcher();

  return (
    <div>
      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className={`ml-3 p-2 flex items-center justify-center rounded-full ${mode === 'light' ? 'bg-darkTheme text-white' : 'bg-ligthTheme text-darkTheme'}`}
      >
        {mode === 'dark' ? <IoSunny size={16} /> : <FaRegMoon size={16} />}
      </button>
    </div>
  );
};

export default ThemeBtn;
