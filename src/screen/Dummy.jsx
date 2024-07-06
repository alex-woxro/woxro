'use client'
import { SERVICE } from '@/const'
import Image from 'next/image'
import React, { useState } from 'react'
import arrKey from '/public/assets/icons/service/service-arr.png'

const Dummy = () => {

  const [selected, setSelected] = useState(1);
  const selectHandler = (value) => {
    setSelected(value);
  }

  return (
    <div className='flex flex-col border-red-500 bg-pink-300  px-5 lg:px-[100px]'>
      <div className='mt-[70px] w-fit  border border-black m-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 border border-green-500 gap-14'>
          {SERVICE.map((exp) => (
            <div key={exp.titile} className='border border-red-600 max-w-[450px] w-full'>
              <div className='border border-black h-full flex flex-col 3xl:gap-5'>
                <Image src={exp.image} className='object-cover max-w-[448px] max-h-[258px] w-full h-full' width={448} height={258} alt='service-img' />

                <div className='max-h-[200px] h-full  flex flex-col lg:gap-4 3xl:gap-5' >
                  <div className='font-ibmPlexSans font-light text-2xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>{exp.titile}</div>
                  <div className='font-ibmPlexSans font-normal text-[1.18rem] lg:text-sm xl:text-base 2xl:text-lg 3xl:text-[1.18rem] grow'
                    dangerouslySetInnerHTML={{ __html: exp.description.replace(/\n/g, '<br />') }}>
                  </div>
                  <Image src={arrKey} className='w-[20px] h-[14px]' width={20} height={14} alt='arrow-key' />
                </div>

              </div>
            </div>


          ))}
        </div>
      </div>
    </div>
  )
}

export default Dummy