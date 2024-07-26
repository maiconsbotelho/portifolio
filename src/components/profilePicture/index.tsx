import Image from 'next/image';
import ImagePerfil from '../../../public/assets/picArtInverso.png';

const ProfilePicture = () => {
  return (
    <div className="max-w-screen-lg xss:w-60 customLG:max-w-screen-sm ">
      <Image src={ImagePerfil} alt="Foto de perfil" />
    </div>
  );
};

export default ProfilePicture;
