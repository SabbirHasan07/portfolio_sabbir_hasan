
import Link from "next/link";
import roundedImage from "../public/rounded-text.png";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0 xl:mb-28 mb-20 z-20">
    <Link href={'/work'} className="relative w-[130px] font-bold h-[130px] flex justify-center items-center bg-circleStar bg-cover bg-centerbg-no-repeat group">
      <Image
      src={'/rounded-text.png'}
     width={100}
     height={100}
     alt=""
     className='animate-spin-slow w-full h-full max-w-[100px] max-h-[100px]'/>
     <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
    </Link>
  </div>
};

export default ProjectsBtn;
