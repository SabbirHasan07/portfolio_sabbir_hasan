import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";
import { FreeMode,Pagination } from 'swiper';

// data
const serviceData = [
  
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Gererally,MERN Stact use for development. NEXTJS also used for different website.',
  },
  {
    icon: <RxReader />,
    title: 'ASP .NET',
    description: 'I am highly interested in this field. In future, I want to work for this field.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'I also have interest in this field. In future, I will have interest to work in this field.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Familiar with Figma Design.',
  },
  

  
  
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15,
    },
    640:{
      slidesPerView:3,
      spaceBetween:15,
    },
  }}
  freeMode={true}
  pagination={{
    clickable:true,
  }}
  modules={[FreeMode, Pagination]}
  className='h-[300px] xl:h-[320px]'
  
  >
    {
      serviceData.map((item,index)=>{
        return<SwiperSlide
        key={index}
        >
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 xl:flex sm:flex-col gap-x-6  group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all'>
            <div className='text-4xl text-accent mb-4'>
              {item.icon}
            </div>
            <div>
              <div>{item?.title}</div>
              <p>{item?.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
            </div>
          </div>

        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default ServiceSlider;
