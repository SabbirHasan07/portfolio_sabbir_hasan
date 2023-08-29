import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
import ProjectsBtn from "../components/ProjectsBtn";

const Home = () => {
  return <div className="bg-primary/60 h-full w-full">
    {/*text*/}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className=" text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/*title*/}
        <h2 className="text-2xl font-bold mb-5 mt-12">
          MERN Stack Developer <br /><span className="text-accent font-extralight"> Software Developer</span>
        </h2>
        {/*subtitle*/}
        <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">A self-motivated IT professional with huge knowledge and proficiency in ReactJS, NodeJS, and mobile responsive web development, as well as
strong skills and ability in writing clean and efficient code.
        </p>
        {/*btn*/}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div className="hidden xl:flex"
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'

        >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    {/*image*/}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
      </div>
      <ParticlesContainer/>
      <motion.div
       variants={fadeIn('up', 0.5)}
       initial='hidden'
       animate='show'
       exit='hidden'
       transition={{duration:1, ease:'easeInOut'}}
      className="w-full h-full max-w-[500px] max-h-[500px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
       
      </motion.div>
    </div>
  </div>
};

export default Home;
