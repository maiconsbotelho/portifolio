import Image from 'next/image';
import ImagePerfil from '../../../public/assets/picArtInverso.png';

const ProfilePicture = () => {
  return (
    <div className='mobile:w-80 max-w-screen-lg'>
      <Image src={ImagePerfil} alt="Foto de perfil" />
    </div>
  );
};

export default ProfilePicture;
