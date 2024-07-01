import { SERVICE } from '@/const'
import React from 'react'

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





      <div>


        <div className='grid grid-cols-3'>

          {SERVICE.map((exp) => (
            <div>

              <Image src={exp.image} />
              <div>{exp.titile}</div>
              <div>{exp.description}</div>


            </div>

          ))}
        </div>





      </div>



    </div>
  )
}

export default Service