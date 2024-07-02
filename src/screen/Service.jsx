'use client'
import { SERVICE } from '@/const'
import Image from 'next/image'
import React, { useState } from 'react'

import arrKey from '/public/assets/icons/service/service-arr.png'

const Service = () => {

  const [selected, setSelected] = useState(1);


  const selectHandler = (value) => {
    setSelected(value);
  }



  console.log("selecetd", selected);

  return (
    <div className='pt-[154px] pb-[170px] px-[100px]'>

      <div className='flex justify-between'>
        <div className='roboto font-thin text-[70px]'>{selected === 1 ? 'Services' : selected === 2 ? 'Consulting' : ''}</div>
        <div className='flex gap-2'>
          <div className={`w-[77px] h-[4px] ${selected === 1 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(1)}></div>
          <div className={`w-[77px] h-[4px] ${selected === 2 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(2)}></div>
        </div>
      </div>


      <div className='font-ibmPlexSans font-thin text-[24px]'>Fueled by the innate brilliance of the world around us, we channel this <br />
        insight as our creative inspiration to sculpt the future.
      </div>

      {selected === 1 && (
        <div className='mt-20'>
          <div className='grid grid-cols-3 gap-[3.6rem] place-items-center'>
            {SERVICE.map((exp) => (
              <div key={exp.titile} className=' max-w-[448px] h-auto'>
                <Image src={exp.image} className='w-full h-auto' width={448} height={258} alt='service-img' />
                <div className='font-ibmPlexSans font-light lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl lg:mt-2 2xl:mt-3 3xl:mt-4'>{exp.titile}</div>
                <div className='lg:mt-2 2xl:mt-3 3xl:mt-4 font-ibmPlexSans font-light lg:text-sm xl:text-base 2xl:text-lg 3xl:text-[1.1rem]'>{exp.description}</div>
                <Image src={arrKey} className='lg:mt-5 2xl:mt-6 3xl:mt-7 w-[20px] h-[14px] ' width={20} height={14} alt='arrow-key' />
              </div>
            ))}
          </div>
        </div>
      )}


      {selected === 2 && (
        <div className='mt-20'>
          <div className='grid grid-cols-3 gap-[3.6rem] place-items-center'>
            {SERVICE.slice(0, 5).map((exp) => (
              <div key={exp.titile} className=' max-w-[448px] h-auto'>
                <Image src={exp.image} className='w-full h-auto' width={448} height={258} alt='service-img' />
                <div className='font-ibmPlexSans font-light lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl lg:mt-2 2xl:mt-3 3xl:mt-4'>{exp.titile}</div>
                <div className='lg:mt-2 2xl:mt-3 3xl:mt-4 font-ibmPlexSans font-light lg:text-sm xl:text-base 2xl:text-lg 3xl:text-[1.1rem]'>{exp.description}</div>
                <Image src={arrKey} className='lg:mt-5 2xl:mt-6 3xl:mt-7 w-[20px] h-[14px] ' width={20} height={14} alt='arrow-key' />
              </div>
            ))}
          </div>
        </div>
      )}



    </div>
  )
}

export default Service