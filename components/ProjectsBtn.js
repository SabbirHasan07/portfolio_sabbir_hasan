
import Link from "next/link";
import roundedImage from "../public/rounded-text.png";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0 xl:mb-28 mb-28">
    <Link href={'/work'} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-centerbg-no-repeat grooup">
      <Image
      src={'/rounded-text.png'}
     width={141}
     height={148}
     alt=""
     className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'/>
     <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
    </Link>
  </div>
};

export default ProjectsBtn;
