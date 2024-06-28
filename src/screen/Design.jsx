import Image from 'next/image'
import React from 'react'
import designImg from '/src/assets/images/design/Design.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Design = () => {
  return (
    <div className='bg-[#0B0B0B] pt-[122px] pb-[200px] flex flex-col gap-[250px]'>
      <div className='flex justify-between px-[138px] items-center'>
        <div className='text-white'>
          <div className='flex gap-1 items-center font-thin text-[18px]'><div>view all services</div> <MdOutlineKeyboardArrowRight size={24} /></div>
          <div className='text-[100px] font-extralight'>Design</div>
          <div className='max-w-[623px] text-[24px]
          font-thin'>Fueled by the innate brilliance of the world around us, we channel this insight as our creative inspiration to sculpt the future.</div>
        </div>
        <div>
          <Image src={designImg} alt='design' className='lg:w-[500px] lg:h-[400px] xl:w-[500px] xl:h-[550px] 2xl:w-[800px] 2xl:h-[700px] w-[750px] h-[800px]' />
        </div>
      </div>
      <div className='text-white'>
        <div className='m-auto w-[800px] text-[28px] font-thin'>
          To achieve and maintain high standards we are committed to investing in the most
          talented IT support specialists in India, with the experience, creativity , and qualifications to exceed
          the highest expectations.We are known for our works and we hope you enjoy looking at some of our recent works.
        </div>
      </div>
    </div>
  )
}

export default Design