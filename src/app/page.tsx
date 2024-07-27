import Container from '@/components/container';
import HireMe from '@/components/hireMe';
import ProfilePicture from '@/components/profilePicture';
import Welcome from '@/components/welcome';
import Image from 'next/image';
import Lamp from '../../public/assets/lamp.png';
import LampDark from '../../public/assets/lampDark.png';

export default function Home() {
  return (
    <div>
      <main className="h-custom-calc sm:mt-36">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 md:gap-16 lg:flex-row">
            <div>
              <ProfilePicture />
            </div>
            <div className="flex flex-col gap-5">
              <Welcome />
              <div>{/* <CvButton /> */}</div>
            </div>
          </div>
        </Container>
      </main>
      <HireMe />
      <div className="absolute bottom-16 right-12 hidden w-48 text-black dark:hidden dark:text-white lg:inline-block">
        <Image src={Lamp} alt="Lamp" />
      </div>
      <div className="absolute bottom-16 right-12 hidden w-48 text-black dark:text-white dark:lg:inline-block">
        <Image src={LampDark} alt="Lamp" />
      </div>
    </div>
  );
}
