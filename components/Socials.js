

import Link from 'next/link';
import {RiGithubFill,RiLinkedinBoxFill,RiDownload2Fill,RiFileTextFill} from 'react-icons/ri';
const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href='https://github.com/SabbirHasan07' className=' hover:text-accent transition-all duration-300 text-2xl '><RiGithubFill/></Link>
    <Link href='https://www.linkedin.com/in/sabbir-hasan-a08b71205/' className=' hover:text-accent transition-all duration-300 text-2xl '><RiLinkedinBoxFill/></Link>
    <Link href='https://drive.google.com/file/d/1iektfaYliyCXGBNwgs9rlZgMZSx-UQCX/view?usp=sharing'  className=' hover:text-accent transition-all duration-300 text-2xl'><RiFileTextFill/></Link>
    <Link href='https://drive.google.com/file/d/1gwsrsLpBlJuE7kv6WZ-hWD29t9LJSL36/view?usp=sharing' className=' hover:text-accent transition-all duration-300 text-2xl'><RiDownload2Fill/></Link>
  </div>;
};

export default Socials;
