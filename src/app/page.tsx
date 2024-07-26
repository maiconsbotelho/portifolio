import Container from '@/components/container';
import CvButton from '@/components/cvButton';
import HireMe from '@/components/hireMe';
import ProfilePicture from '@/components/profilePicture';
import Welcome from '@/components/welcome';
import Image from 'next/image';
import Lamp from '../../public/assets/lamp.png';
import LampDark from '../../public/assets/lampDark.png';

export default function Home() {
  return (
    <Container>
      <main className="h-custom-calc">
        <div className="flex flex-col items-center justify-between gap-5 md:gap-16 lg:flex-row">
          <div>
            <ProfilePicture />
          </div>
          <div className="flex flex-col gap-5">
            <Welcome />
            <div>
              {/* <CvButton /> */}
            </div>
          </div>
        </div>
      </main>
      <HireMe />
      <div className="absolute bottom-16 right-12 hidden w-48 text-black dark:hidden dark:text-white lg:inline-block">
        <Image src={Lamp} alt="Lamp" />
      </div>
      <div className="absolute bottom-16 right-12 hidden w-48 text-black  dark:lg:inline-block dark:text-white">
        <Image src={LampDark} alt="Lamp" />
      </div>
    </Container>
  );
}
