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


  return (
    <div className='py-[40px] px-5 lg:pt-[154px] lg:pb-[170px] lg:px-[100px] flex flex-col  items-center md:items-stretch'>

      <div className='md:hidden w-full flex justify-end'>
        <div className='flex gap-2'>
          <div className={`w-[77px] h-[4px] ${selected === 1 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(1)}></div>
          <div className={`w-[77px] h-[4px] ${selected === 2 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(2)}></div>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='font-roboto font-light text-[75px]  3xl:text-[70px]'>{selected === 1 ? 'Services' : selected === 2 ? 'Consulting' : ''}</div>
        <div className='md:flex gap-2 hidden'>
          <div className={`w-[77px] h-[4px] ${selected === 1 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(1)}></div>
          <div className={`w-[77px] h-[4px] ${selected === 2 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(2)}></div>
        </div>
      </div>


      <div className='mt-8 font-ibmPlexSans font-light text-base lg:text-2xl'>Fueled by the innate brilliance of the world around us, we channel this <br />
        insight as our creative inspiration to sculpt the future.
      </div>

      {selected === 1 && (
        <div className='mt-[70px] w-fit  '>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[40px] xl:gap-[40px] 2xl:gap-[60px] 3xl:gap-y-[100px] '>
            {SERVICE.map((exp) => (
              <div key={exp.titile} className='max-w-[448px] h-auto  w-full border border-red-600 flex flex-col'>
                <Image src={exp.image} className='w-full h-[258px] ' width={448} height={258} alt='service-img' />
                <div className='font-ibmPlexSans font-light text-2xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>{exp.titile}</div>
                <div className='font-ibmPlexSans font-normal text-[1.18rem] lg:text-sm xl:text-base 2xl:text-lg 3xl:text-[1.18rem]'
                  dangerouslySetInnerHTML={{ __html: exp.description.replace(/\n/g, '<br />') }}>
                </div>
                <Image src={arrKey} className='w-[20px] h-[14px] border border-red-600' width={20} height={14} alt='arrow-key' />
              </div>
            ))}
          </div>
        </div>
      )}

      {selected === 2 && (
        <div className='mt-[70px] w-fit'>
          <div className='grid grid-cols-3  lg:gap-[20px] xl:gap-[40px] 2xl:gap-[60px] 3xl:gap-y-[100px]'>
            {SERVICE.slice(0, 5).map((exp) => (
              <div key={exp.titile} className=' max-w-[448px] h-auto border flex flex-col items-between'>
                <Image src={exp.image} className='w-full max-h-[258px] h-fit' width={448} height={258} alt='service-img' />
                <div className='font-ibmPlexSans font-light lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl lg:mt-2 2xl:mt-3 3xl:mt-4'>{exp.titile}</div>
                <div className='lg:mt-2 2xl:mt-3 3xl:mt-4 font-ibmPlexSans font-light lg:text-sm xl:text-base 2xl:text-lg 3xl:text-[1.1rem]'>{exp.description}</div>
                <Image src={arrKey} className='mt-7 lg:mt-5 2xl:mt-6 3xl:mt-7 w-[20px] h-[14px] ' width={20} height={14} alt='arrow-key' />
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default Service








// 'use client'
// import { SERVICE } from '@/const'
// import Image from 'next/image'
// import React, { useState } from 'react'

// import arrKey from '/public/assets/icons/service/service-arr.png'

// const Service = () => {

//   const [selected, setSelected] = useState(1);

//   const selectHandler = (value) => {
//     setSelected(value);
//   }


//   return (
//     <div className='py-[40px] px-5 lg:pt-[154px] lg:pb-[170px] lg:px-[100px] flex flex-col  items-center md:items-stretch'>

//       <div className='md:hidden w-full flex justify-end'>
//         <div className='flex gap-2'>
//           <div className={`w-[77px] h-[4px] ${selected === 1 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(1)}></div>
//           <div className={`w-[77px] h-[4px] ${selected === 2 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(2)}></div>
//         </div>
//       </div>

//       <div className='flex justify-between items-center'>
//         <div className='font-roboto font-light text-[75px]  3xl:text-[70px]'>{selected === 1 ? 'Services' : selected === 2 ? 'Consulting' : ''}</div>
//         <div className='md:flex gap-2 hidden'>
//           <div className={`w-[77px] h-[4px] ${selected === 1 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(1)}></div>
//           <div className={`w-[77px] h-[4px] ${selected === 2 ? `bg-[#00000099]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(2)}></div>
//         </div>
//       </div>


//       <div className='mt-8 font-ibmPlexSans font-light text-base lg:text-2xl'>Fueled by the innate brilliance of the world around us, we channel this <br />
//         insight as our creative inspiration to sculpt the future.
//       </div>

//       {selected === 1 && (
//         <div className='mt-[70px] w-fit  '>
//           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px] gap-y-[40px] xl:gap-[40px] 2xl:gap-[60px] 3xl:gap-y-[100px] '>
//             {SERVICE.map((exp) => (
//               <div key={exp.titile} className='max-w-[448px] h-auto  w-full border border-red-600 flex flex-col'>
//                 <Image src={exp.image} className='w-full h-[258px] ' width={448} height={258} alt='service-img' />
//                 <div className='font-ibmPlexSans font-light text-2xl lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl'>{exp.titile}</div>
//                 <div className='font-ibmPlexSans font-normal text-[1.18rem] lg:text-sm xl:text-base 2xl:text-lg 3xl:text-[1.18rem]'
//                   dangerouslySetInnerHTML={{ __html: exp.description.replace(/\n/g, '<br />') }}>
//                 </div>
//                 <Image src={arrKey} className='w-[20px] h-[14px] border border-red-600' width={20} height={14} alt='arrow-key' />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {selected === 2 && (
//         <div className='mt-[70px] w-fit'>
//           <div className='grid grid-cols-3  lg:gap-[20px] xl:gap-[40px] 2xl:gap-[60px] 3xl:gap-y-[100px]'>
//             {SERVICE.slice(0, 5).map((exp) => (
//               <div key={exp.titile} className=' max-w-[448px] h-auto'>
//                 <Image src={exp.image} className='w-full max-h-[258px] h-fit' width={448} height={258} alt='service-img' />
//                 <div className='font-ibmPlexSans font-light lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl lg:mt-2 2xl:mt-3 3xl:mt-4'>{exp.titile}</div>
//                 <div className='lg:mt-2 2xl:mt-3 3xl:mt-4 font-ibmPlexSans font-light lg:text-sm xl:text-base 2xl:text-lg 3xl:text-[1.1rem]'>{exp.description}</div>
//                 <Image src={arrKey} className='mt-7 lg:mt-5 2xl:mt-6 3xl:mt-7 w-[20px] h-[14px] ' width={20} height={14} alt='arrow-key' />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}



//     </div>
//   )
// }

// export default Service