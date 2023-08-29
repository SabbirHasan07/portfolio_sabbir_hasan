
import Link from 'next/link';
import Socials from '../components/Socials';
const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] mt-6">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center'>
        <Link href={'/'}>
          <h2 className='mb-2 text-3xl font-bold  mt-2'>Sabbir <span className=' font-thin '>Hasan</span></h2>
        </Link>
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
