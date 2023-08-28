import _exports from "tailwind-scrollbar";

// testimonial data
export const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// icons
import { FaQuoteLeft } from 'react-icons/fa'

import {Navigation, Pagination } from 'swiper';
import Image from 'next/image';

// data
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
const TestimonialSlider = () => {
  return <Swiper
    Navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    className='h-[400px]'

  >
    {
      testimonialData.map((person, index) => {
        return <SwiperSlide
          key={index}
        >
          <div className="xl:flex items-center gap-x-8 h-48 px-16">
            <div className=" mx-w-[300px] flex flex-col xl:justify-center realative max-auto">

              <div className="flex flex-col justify-center text-center">
                <div className="mb-2">
                  <Image
                    src={person?.image} width={100} height={100}
                    alt=" "
                  />
                </div>
                <div className="text-lg">{person?.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest">{person?.position}</div>
              </div>

            </div>
            <div className=" flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div><FaQuoteLeft className="mx-auto text-4xl text-white/30" /></ div>
              <div className="xl:text-l text-center md:text-left">{person?.message}</div>
            </div>
          </div>

        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default TestimonialSlider;

