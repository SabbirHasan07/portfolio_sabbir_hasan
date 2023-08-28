import _exports from "tailwind-scrollbar";

// testimonial data
export const testimonialData = [
  {
    image: '/t-avt-1.jpg',
    name: 'Mirza Adnan',
    position: 'Customer',
    message:
      'The sites seamless functionality, elegant design, and responsive interface are commendable.',
  },
  {
    image: '/t-.jpg',
    name: 'Rahat Anan',
    position: 'Customer',
    message:
      'Impressive web development work! Clean code, seamless functionality, and a user-friendly interface.',
  },
  {
    image: '/sakib01.jpg',
    name: 'Ashakur Sakib',
    position: 'Customer',
    message:
      'Outstanding web development work! The site functionality is seamless, design is captivating, and code is immaculate. ',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// icons
import { FaQuoteLeft } from 'react-icons/fa'

import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';

// data
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
const TestimonialSlider = () => {
  return <Swiper
    Navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    className='h-[350px] xl:h-[250px]'

  >
    {
      testimonialData.map((person, index) => {
        return <SwiperSlide
          key={index}
        >
          <div className="xl:flex  gap-x-8  px-16 mt-4 xl:mt-16">
            <div className=" mx-w-[300px] flex flex-col xl:justify-center realative max-auto">

              <div className="flex xl:flex-col justify-center text-center gap-x-2">
                <div className="mb-2">
                  <Image
                    src={person?.image} width={100} height={100}
                    className="rounded-full"
                    alt=" "
                  />
                </div>
                <div className="mt-4 xl:mt-0 flex flex-col">
                  <div className="text-lg">{person?.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person?.position}</div>
                </div>
              </div>

            </div>
            <div className=" flex-1 flex flex-col before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div><FaQuoteLeft className=" mx-auto text-4xl mb-2 text-white/30" /></ div>
              <div className="xl:text-l text-sart md:text-left">{person?.message}</div>
            </div>
          </div>

        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default TestimonialSlider;

