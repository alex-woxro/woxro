import { BackgroundGradientAnimation } from '@/components/animation/BackgroundGradientAnimation'
import React from 'react'
import Image from 'next/image'
import designImg from '/src/assets/images/design/Design.png'
import { PiGreaterThanThin } from "react-icons/pi";



const Dummy = () => {
  return (

    <>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 pointer-events-none h-screen">
          <div className='px-5 flex lg:justify-center items-center h-full'>
            <div className='flex flex-col gap-24'>
              <div className='text-white lg:px-[70px]'>
                <div className='flex gap-3 items-center'>
                  <div className='text-lg sm:text-xl lg:text-2xl font-ibmPlexSans font-extralight'>View all services</div>
                  <div><PiGreaterThanThin /></div>
                </div>
                <div className='text-[75px] lg:text-[85px] 2xl:text-[100px] 3xl:text-[150px] font-extralight font-roboto  max-w-[600px] w-full'>Services</div>
                <div className='text-base sm:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-[32px] font-thin font-ibmPlexSans max-w-[600px] w-full '>
                  Websites / E-Commerce /  Mobile Apps
                  Digital Marketing / Search Engine Optimisation
                  Design & Production</div>
              </div>
              <div className='text-white lg:px-[70px] lg:hidden'>
                <div className='flex gap-3 items-center'>
                  <div className='text-lg sm:text-xl lg:text-2xl font-ibmPlexSans font-extralight '>View all services</div>
                  <div><PiGreaterThanThin /></div>
                </div>
                <div className='text-[75px] lg:text-[85px] 2xl:text-[100px] 3xl:text-[150px] font-extralight font-roboto  max-w-[600px] w-full'>Consulting</div>
                <div className='text-base sm:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-[32px] font-thin font-ibmPlexSans max-w-[600px] w-full '>
                  Websites / E-Commerce /  Mobile Apps
                  Digital Marketing / Search Engine Optimisation
                  Design & Production</div>
              </div>
            </div>
            <div className='hidden lg:block max-w-[800px] max-h-[780px]'>
              <Image src={designImg} alt='design' className='w-full h-auto' />
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 pointer-events-none h-screen ">
          <div className='flex justify-center items-center h-full'>
            <div className='text-[30px] leading-[60px] lg:text-[40px] lg:leading-[65px] font-light font-ibmPlexSans w-full px-5 lg:w-[70%] m-auto'>
              <span
              > To achieve and maintain high standards we are committed to investing in the most
                talented IT support specialists in India, with the experience, creativity ,</span>
              <span >
                and qualifications to exceed  the highest expectations.We are known for our works and we hope you enjoy looking at some of our recent works.
              </span>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  )
}

export default Dummy