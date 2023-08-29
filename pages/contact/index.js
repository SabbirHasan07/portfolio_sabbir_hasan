'use client'
import { sendContactForm } from '../../lib/api';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

const Contact = () => {

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { error },

  } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    const res = await sendContactForm(data);
    if (res.status === 200) {
      toast.success("Message Send Successfully", {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: ture,
        progress: undefined,
        theme: 'colored'

      });
      reset();
      setLoading(false);
    }
    if (res.status === 400) {
      toast.error('Something went wrong !', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setLoading(false);
    }
    setLoading(false);
  };

  return <div className='h-full bg-primary/30'
  >
    <div className=' xl:mt-12 container mx-auto py-32 text-accent xl:text-left flex items-center justify-center h-full'>
      <div className=''>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          animate='show'
          initial='hidden'
          exit='hidden'
          className='h2 text-center mb-4 text-white'>Lets <span className='text-accent'>Connect.</span></motion.h2>
        <form onSubmit={handleSubmit(onSubmit)} className='mb-6 flex-1 flex flex-col gap-6 w-full mx-auto'>
          <motion.div
            variants={fadeIn('left', 0.4)}
            animate='show'
            initial='hidden'
            exit='hidden'
            className='flex gap-x-6 w-full '>
            <input type="text" placeholder='Name' className='input' />
            <input type="text" placeholder='Email' className='input' />
          </motion.div>
          <motion.input
            variants={fadeIn('right', 0.6)}
            animate='show'
            initial='hidden'
            exit='hidden'
            type="text" placeholder='Subject' className='input' />
          <motion.textarea
            variants={fadeIn('down', 0.8)}
            animate='show'
            initial='hidden'
            exit='hidden'
            placeholder='message' className='textarea'></motion.textarea>
          <motion.button
            variants={fadeIn('up', 0.8)}
            animate='show'
            initial='hidden'
            exit='hidden'
            className=' btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Lets talk</span>
            <BsArrowRight
              className='text-bold -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'
            />
          </motion.button>

        </form>
      </div>

    </div>
  </div>;
};

export default Contact;
