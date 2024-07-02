import { BackgroundGradientAnimation } from '@/components/animation/BackgroundGradientAnimation'
import React from 'react'
import Image from 'next/image'
import designImg from '/src/assets/images/design/Design.png'
import { PiGreaterThanThin } from "react-icons/pi";



const Dummy2 = () => {

  return (
    // <BackgroundGradientAnimation>
    //   <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
    //     <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
    //       Gradients X Animations
    //     </p>
    //   </div>
    // </BackgroundGradientAnimation>

    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 pointer-events-none">
        <div className='flex justify-center items-center h-screen m-auto'>
          <div className='text-white px-[70px]'>
            <div className='flex gap-3 items-center'>
              <div className='lg:text-base 2xl:text-lg 3xl:text-xl font-ibmPlexSans font-extralight '>View all services</div>
              <div><PiGreaterThanThin /></div>
            </div>
            <div className='lg:text-[70px] xl:text-[85px] 2xl:text-[100px] 3xl:text-[150px] sm:text-[50px] font-extralight font-roboto  max-w-[600px] w-full'>Services</div>
            <div className='lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-thin font-ibmPlexSans max-w-[600px] w-full '>
              Websites / E-Commerce /  Mobile Apps
              Digital Marketing / Search Engine Optimisation
              Design & Production</div>
          </div>
          <div className='max-w-[800px] max-h-[780px]'>
            <Image src={designImg} alt='design' className='w-full h-auto' />
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default Dummy2