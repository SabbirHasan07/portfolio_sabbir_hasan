
import WorkSlider from '../../components/WorkSlider';
import Blur from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const Work = () => {
  return <div className='h-full bg-primary/30 py-4 flex items-center xl:mt-6'>
    <Circles />
    <div className=' container mx-auto xl:flex xl:ml-9'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className=' xl:mt-6 text-center flex xl:w-[300vm] flex-col lg:text-left mb-4 xl:mb-0 '>
          <motion.h2
          variants={fadeIn('up',0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='text-2xl xl:mt-8 '>My Work</motion.h2>
          <motion.p
          variants={fadeIn('up',0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            I have finished some projects using <span className='text-accent'>MERN STACK</span> and <span className='text-accent'>NEXTJS</span> and I aslo explore <span className='text-accent'>React Native</span>.
          </motion.p>
        </div>
      </div>
      <motion.div 
      variants={fadeIn('down',0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      
      className='w-full xl:max-w-[70%]'>
       <WorkSlider/>
       </motion.div>
    </div>
    <Blur />
  </div>;
};

export default Work;
