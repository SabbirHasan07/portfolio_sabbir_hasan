import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {BsArrowRight} from 'react-icons/bs'

import { Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpeg',
          link:'https://grillandbraai.vercel.app/'
        },
        {
          title: 'title',
          path: '/thumb2.jpeg',
          link:'https://aircnc-39233.web.app/'
        },
        {
          title: 'title',
          path: '/thumb3.jpeg',
          link:'https://wild-star-auth.web.app/'
        },
        {
          title: 'title',
          path: '/thumb4.jpeg',
          link:'https://programming-world-ce6f6.web.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb2.jpeg',
          link:'https://aircnc-39233.web.app/'
        },
        
        {
          title: 'title',
          path: '/thumb1.jpeg',
          link:'https://grillandbraai.vercel.app/'
        },
        {
          title: 'title',
          path: '/thumb4.jpeg',
          link:'https://programming-world-ce6f6.web.app/'
        },
       
        {
          title: 'title',
          path: '/thumb3.jpeg',
          link:'https://wild-star-auth.web.app/'
        },
      ],
    },
  ],
};


const WorkSlider = () => {
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable:true,
  }}
  modules={[Pagination]}
  className='h-[300px] xl:h-[450px] xl:mt-16'
  
  >
    {
      workSlides.slides.map((slide,index)=>{
        return<SwiperSlide
        key={index}
        >
          <div className='grid grid-cols-2 grid-rows-4 gap-2 cursor-pointer '>
            {
              slide.images.map((image,index)=>{
               return <div
               className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                <Link href={`${image.link}`} className='flex items-center justify-center relative overflow-hidden group'>
                  <Image
                  src={image?.path} width={400} height={200}
                  alt=''
                  className='h-[120px] xl:h-[200px]'
                  />
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                  </div>
                  <div className='py-1 px-1 absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-300'>
                    <div className='xl:flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      <div className='delay-100'>LIVE</div>
                      <div className='delay-150 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300'>PROJECTS</div>
                      <div className='text-xl'><BsArrowRight/></div>
                    </div>
                  </div>
                </Link>
               </div>
              })
            }
          </div>

        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default WorkSlider;
