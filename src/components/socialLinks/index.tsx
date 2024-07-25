'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const MotionLink = motion(Link);

const SocialLinks = () => {
  return (
    <nav className="flex flex-wrap items-center gap-4">
      <MotionLink
        href="https://github.com/maiconsbotelho"
        target={'_blank'}
        whileHover={{ y: -2 }} // Levanta o ícone ao passar o mouse
        whileTap={{ scale: 0.9 }} // Diminui o tamanho do ícone ao clicar
        className="cursor-pointer rounded-full border-2 border-white bg-white p-2 text-black transition-all duration-300 ease-linear hover:border-ligthTheme hover:bg-white hover:text-darkTheme hover:shadow-githubColorDark lg:border-secondaryColor lg:bg-transparent lg:p-3 lg:text-secondaryColor lg:hover:border-darkTheme lg:hover:bg-darkTheme lg:hover:text-ligthTheme lg:hover:shadow-githubColor dark:border-white dark:hover:border-ligthTheme dark:hover:bg-ligthTheme dark:hover:text-darkTheme lg:dark:border-primaryColor lg:dark:text-primaryColor lg:dark:hover:shadow-primaryColor lg:dark:hover:shadow-githubColorDark"
      >
        <div className="block lg:hidden">
          <FaGithub size={16} />
        </div>
        <div className="hidden lg:block">
          <FaGithub size={24} />
        </div>
      </MotionLink>
      <MotionLink
        href="https://www.linkedin.com/in/maiconbotelho/"
        target={'_blank'}
        whileHover={{ y: -2 }} // Levanta o ícone ao passar o mouse
        whileTap={{ scale: 0.9 }} // Diminui o tamanho do ícone ao clicar
        className="cursor-pointer rounded-full border-2 border-linkedinColor bg-linkedinColor p-2 text-white transition-all duration-300 ease-linear hover:border-linkedinColor hover:bg-linkedinColor hover:text-white hover:shadow-linkedinColor lg:border-secondaryColor lg:bg-transparent lg:p-3 lg:text-secondaryColor dark:hover:border-linkedinColor dark:hover:text-white lg:dark:border-primaryColor lg:dark:text-primaryColor"
      >
        <div className="block lg:hidden">
          <FaLinkedinIn size={16} />
        </div>
        <div className="hidden lg:block">
          <FaLinkedinIn size={24} />
        </div>
      </MotionLink>
      <MotionLink
        href="https://api.whatsapp.com/send?phone=5551995986876"
        target={'_blank'}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer rounded-full border-2 border-whatsappColor bg-whatsappColor p-2 lg:p-3 text-white transition-all duration-300 ease-linear hover:border-whatsappColor hover:bg-whatsappColor hover:text-white hover:shadow-whatsappColor lg:border-secondaryColor lg:bg-transparent lg:text-secondaryColor dark:hover:border-whatsappColor lg:dark:border-primaryColor lg:dark:text-primaryColor"
      >
        <div className="block lg:hidden">
          <FaWhatsapp size={16} />
        </div>
        <div className="hidden lg:block">
          <FaWhatsapp size={24} />
        </div>
      </MotionLink>
    </nav>
  );
};

export default SocialLinks;
