'use client'
import { SERVICE, WORKS_CARD } from '@/const';
import React, { useState } from 'react'
import arrKey from '/public/assets/icons/service/service-arr.png'
import Image from 'next/image';

const Dummy = () => {

  const [selected, setSelected] = useState(1);
  const selectHandler = (value) => {
    setSelected(value);
  }


  return (
    <>
      <div className='pb-[83px] lg:pb-[177px] px-5'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center pt-[84px] lg:pt-[150px] gap-[19px] lg:gap-[24px] 2xl:gap-8'>
            <div className='font-light text-4xl lg:text-5xl 2xl:text-6xl font-roboto'>Our Works</div>
            <div className='text-[15px] lg:text-lg xl:text-xl  2xl:text-2xl  font-light text-center font-ibmPlexSans '>
              Preparing for your success, we provide truly prominent IT solutions.
              Global Web Designing Company <br />That Provides Full-cycle Software Development Services,E-commerce & Mobile App Development Services.
            </div>
          </div>
        </div>

        <div className='m-auto  w-fit pt-[82px] lg:pt-[116px] border border-red-500'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[52px] lg:gap-[25px] xl:gap-[40px] 2xl:gap-y-[96px]  place-items-center ">
            {WORKS_CARD.map((card, index) => (
              <div key={index} className="sm:max-w-[350px] w-full h-full flex flex-col gap-2 ">
                <Image src={card.image} className='w-full h-full object-cover' height={300} width={300} alt='card-img' />
                <div className='text-[#0E4FCA] text-base  2xl:text-xl  font-ibmPlexSans font-normal'>{card.name}</div>
                <div className='text-[#000000] 3xl:leading-[1.3rem] lg:text-sm 2xl:text-base  font-ibmPlexSans font-normal'>{card.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className='lg:py-[160px] px-5'>
        <div>service loader</div>
        <div className='m-auto w-fit'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
            {SERVICE.map((exp) => (
              <div key={exp.titile} className='border border-red-500 max-w-[448px] h-full w-full'>
                <Image src={exp.image} className='max-w-[448px] max-h-[258px] h-auto w-full object-cover' width={448} height={258} alt='service-img' />


                <div className='border border-green-500'>{exp.titile}</div>
                <div className='border border-green-500' dangerouslySetInnerHTML={{ __html: exp.description.replace(/\n/g, '<br />') }}> </div>
                <Image src={arrKey} className='w-[20px] h-[14px] border border-green-500' width={20} height={14} alt='arrow-key' />

              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default Dummy