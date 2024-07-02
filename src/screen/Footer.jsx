import { FOOTER_CONNECT, FOOTER_EXPLORE, FOOTER_LOGOS, FOOTER_QUICK_LINKS, FOOTER_SUPPORT } from '@/const'
import Image from 'next/image'
import React from 'react'
import playstore from '/public/assets/icons/footer/playstore.png';
import appstore from '/public/assets/icons/footer/appstore.png';



const Footer = () => {
  return (


    <div className='w-full flex justify-center bg-black text-white'>

      <div className='w-[90%] h-screen pb-20 flex flex-col justify-end '>

        <div className='flex flex-col gap-1 max-w-[700px]'>
          <div className='text-dull-grey font-poppins font-normal text-sm'>DROP US A LINE</div>
          <div className='font-roboto font-light text-[3.25rem] '>hello@woxro.com</div>
          <div className='text-dull-grey font-ibmPlexSans font-light text-lg'>Combining intentional design with an original application of progressive technologies <br />
            to create sustainable innovation.</div>
        </div>

        <div className='mt-20 grid grid-cols-4  '>

          <div>
            <div className='font-medium lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-ibmPlexSans'>Explore</div>
            <div className='flex flex-col gap-1 mt-2'>
              {FOOTER_EXPLORE.map((exp) => (
                <div key={exp.id}>
                  <div className='font-light lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl font-ibmPlexSans'>{exp.link}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className='font-medium font-ibmPlexSans lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>Support</div>
            <div className='flex flex-col gap-1 mt-2'>
              {FOOTER_SUPPORT.map((exp) => (
                <div key={exp.id}>
                  <div className='font-light font-ibmPlexSans lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl'>{exp.link}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className='font-medium font-ibmPlexSans lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>Quick links</div>
            <div className='flex flex-col gap-1 mt-2'>
              {FOOTER_QUICK_LINKS.map((exp) => (
                <div key={exp.id}>
                  <div className='font-light font-ibmPlexSans lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl'>{exp.link}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className='font-medium font-ibmPlexSans lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>Quick links</div>
            <div className='flex flex-col gap-1 mt-2'>
              {FOOTER_CONNECT.map((exp) => (
                <div key={exp.id}>
                  <div className='font-light  font-ibmPlexSans lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl'>{exp.titile} : {exp.phone}</div>
                </div>
              ))}
            </div>

            <div className='mt-10 flex lg:gap-3 xl:gap-4 2xl:gap-5'>
              {FOOTER_LOGOS.slice(0, 5).map((exp) => (
                <div key={exp.id}>
                  <Image src={exp.image} alt='footer-logos' height={24} width={24} />
                </div>
              ))}
              <Image src={FOOTER_LOGOS[5].image} alt='footer-logos' height={24} width={95} />
            </div>
          </div>
        </div>

        <div className='w-full mt-32'>
          <div className='flex gap-2'>
            <Image src={appstore} alt='play-store' width={100} height={40} />
            <Image src={playstore} alt='play-store' width={100} height={40} />
          </div>




          <div className='mt-6 text-dull-grey flex justify-between font-ibmPlexSans font-normal text-base'>
            <div>W! Insights - Get our latest thinking on your iPhone, iPad, or Android device.</div>
            <div> © 2024 Woxro . All Rights Reserved</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer