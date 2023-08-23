import Image from 'next/image';
import avatar from '../public/avatar.png'

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none mt-28 mix-blend-color-dodge'>
    <Image
    src={avatar}
    height={500}
    width={500}
     alt=''
     className='translate-z-0 w-full h-full' />

  </div>;
};

export default Avatar;
