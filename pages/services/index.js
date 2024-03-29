
import ServiceSlider from '../../components/ServiceSlider';
import Blur from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const Services = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className=' container mx-auto xl:flex xl:ml-9'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        <div className='text-center flex xl:w-[300vm] flex-col lg:text-left mb-4 xl:mb-0 '>
          <motion.h2
          variants={fadeIn('up',0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='h2 xl:mt-8 '>My Services</motion.h2>
          <motion.p
          variants={fadeIn('up',0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Now, I working in the web development field. I also familiar with <span className='text-accent'>React Native</span>. I have interest to work in the field of <span className='text-accent'>Design</span> and <span className='text-accent'>SEO</span>.
          </motion.p>
        </div>
      </div>
      <motion.div 
      variants={fadeIn('down',0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      
      className='w-full xl:max-w-[65%]'>
       <ServiceSlider/>
       </motion.div>
    </div>
    <Blur />
  </div>;
};

export default Services;
