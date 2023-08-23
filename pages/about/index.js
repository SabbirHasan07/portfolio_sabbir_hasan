import React, { useState } from 'react'
import { TbBrandNextjs } from "react-icons/tb";


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiC,
  SiCplusplus,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <TbBrandNextjs/>
          
          
        ],
      },
      {
        title: 'Programming Skills',
        icons: [<SiC/>, <SiCplusplus />, <SiAdobephotoshop />],
      },
      {
        title: 'Around 200+ problems solve in the differents online judge.'
      }
    ],
  },
 
  {
    title: 'experience',
    info: [
     
      {
        title: 'Web Developer - Programming Hero',
        stage: '2022(jun) - 2022(December)',
      },
      
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import Image from 'next/image';

const About = () => {
  const [index, setIndex] = useState(0);
  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <div className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-grow gap-x-6'>
      <div className='flex  justify-center xl:pb-8 '>
        <div><Image
          src={'/sabbir.jpeg'}
          height={300}
          width={300}
          className='mb-2 rounded-md xl:h-48 xl:w-48'
          alt=''
        />
        </div>
        <p className='px-4 mt-0 justify-center text-center items-center xl:mt-16 text-white xl:text-2xl'> I have successfully completed 12 projects that <br /> showcase my proficiency and versatility.</p>
      </div>
      <div className='flex flex-col mb-9'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cusor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className='  flex flex-col  items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex}>
                <div>{item.title}</div>
                <div className=' md:flex gap-2'>{item.stage}</div>
                <div className='flex gap-x-4 py-2'>
                  {item.icons?.map((icon, itemIndex) => {
                    return <div key={itemIndex}
                      className='gap-x-4 text-2xl'>
                      {icon}
                    </div>
                  })}
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>;
};

export default About;
