import Link from 'next/link';

const CvButton = () => {
  return (
    <>
      <Link
        href="/curriculo.pdf"
        target={'_blank'}
        className="mt-10 inline-block w-full rounded-3xl bg-secondaryColor px-8 py-3 text-center text-base font-semibold tracking-widest text-white shadow-secondaryColor transition-all duration-300 ease-linear hover:shadow-none dark:bg-primaryColor dark:shadow-primaryColor dark:hover:shadow-none md:w-60"
        download={true}
      >
        Download CV
      </Link>
    </>
  );
};

export default CvButton;
