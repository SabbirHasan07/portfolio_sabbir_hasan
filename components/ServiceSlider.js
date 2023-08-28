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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },

  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  ,
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
  className='h-[280px] xl:h-[300px]'
  
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
