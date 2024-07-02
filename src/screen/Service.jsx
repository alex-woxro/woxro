import { SERVICE } from '@/const'
import Image from 'next/image'
import React from 'react'

import arrKey from '/public/assets/icons/service/service-arr.png'

const Service = () => {
  return (
    <div className='pt-[154px] pb-[170px] px-[100px]'>

      <div className='flex justify-between'>
        <div className='roboto font-thin text-[70px]'>Services</div>
        <div className='flex gap-2'>
          <div className='w-[77px] h-[4px] bg-[#00000099]'></div>
          <div className='w-[77px] h-[4px] bg-[#a1a1a199]'></div>
        </div>
      </div>


      <div className='font-ibmPlexSans font-thin text-[24px]'>Fueled by the innate brilliance of the world around us, we channel this <br />
        insight as our creative inspiration to sculpt the future.
      </div>





      <div className='mt-20'>


        <div className='grid grid-cols-3 gap-[3.6rem]'>

          {SERVICE.map((exp) => (
            <div key={exp.titile} className='border border-red-500 max-w-[448px] h-auto'>
              <Image src={exp.image} className='w-full h-auto' width={448} height={258} alt='service-img' />
              <div className='font-ibmPlexSans font-light text-2xl mt-4'>{exp.titile}</div>
              <div className='mt-4 font-ibmPlexSans font-light text-[1.1rem]'>{exp.description}</div>
              <Image src={arrKey} className='mt-9 w-[20px] h-[14px] ' width={20} height={14} alt='arrow-key' />
            </div>

          ))}
        </div>





      </div>



    </div>
  )
}

export default Service