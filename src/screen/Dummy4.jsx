import React from 'react'
import { Dummy3 } from './Dummy3'
import Image from 'next/image'
import designImg from '/src/assets/images/design/Design.png'
import { PiGreaterThanThin } from "react-icons/pi";

const Dummy4 = () => {
  return (
    <>
      <Dummy3>
        <div className="absolute z-50 inset-0 pointer-events-none ">
          <div className='bg-[#0B0B0B] pt-[122px] pb-[200px] flex flex-col gap-[250px]'>
            <div className='px-5 flex lg:justify-center items-center'>
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


            <div>
              <div className='text-[30px] leading-[60px] lg:text-[40px] lg:leading-[65px] font-light font-ibmPlexSans w-full px-5 lg:w-[70%] m-auto'>
                <span className={`transition-colors duration-2000 text-white`}
                > To achieve and maintain high standards we are committed to investing in the most
                  talented IT support specialists in India, with the experience, creativity ,</span>
                <span className={`transition-colors duration-2000 'text-dull-grey`}>
                  and qualifications to exceed  the highest expectations.We are known for our works and we hope you enjoy looking at some of our recent works.
                </span>
              </div>
            </div>

          </div>
        </div>
      </Dummy3>

    </>

  )
}

export default Dummy4
















{/* <>
<Dummy3>
  <div className="absolute z-50 inset-0 pointer-events-none ">
    <div className='pt-[122px] pb-[200px] flex flex-col gap-[250px]'>
      <div className='px-5 flex lg:justify-center items-center'>
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
  </div>
</Dummy3>

<Dummy3>
  <div className="absolute z-50 inset-0 pointer-events-none border flex items-end w-full justify-center border-black pb-[10rem]">
    <div className='text-[30px] leading-[60px] lg:text-[40px] lg:leading-[65px] font-light font-ibmPlexSans w-full px-5 lg:w-[70%]'>
      <span className={`transition-colors duration-2000 'text-white' `}
      > To achieve and maintain high standards we are committed to investing in the most
        talented IT support specialists in India, with the experience, creativity ,</span>
      <span className={`transition-colors duration-2000 text-dull-grey`}>
        and qualifications to exceed  the highest expectations.We are known for our works and we hope you enjoy looking at some of our recent works.
      </span>
    </div>
  </div>
</Dummy3>
</> */}