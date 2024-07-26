import CircularText from '@/icons/circularText';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const HireMe = () => {
  return (
    <div className="customLG:right-6 customLG:left-auto customLG:bottom-6 customLG:top-auto fixed bottom-6 left-6 flex items-center justify-center overflow-hidden">
      <div className="customLG:w-28 relative flex h-auto w-56 items-center justify-center">
        <CircularText className="animate-spin-slow text-primaryColor" />

        <Link
          href={'https://api.whatsapp.com/send?phone=5551995986876'}
          target={'_blank'}
          className="customLG:w-12 customLG:text-xs customLG:h-12 absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-whatsappColor bg-whatsappColor text-base font-semibold text-white shadow-md  hover:shadow-whatsappColor dark:hover:bg-black dark:hover:text-white"
        >
          <div className="block lg:hidden">
            <FaWhatsapp size={24} />
          </div>

          <div className="lg:block hidden">
            <FaWhatsapp size={40} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
