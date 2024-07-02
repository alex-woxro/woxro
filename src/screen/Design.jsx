import Image from 'next/image'
import React from 'react'
import designImg from '/src/assets/images/design/Design.png'
import { PiGreaterThanThin } from "react-icons/pi";


const Design = () => {

  return (
    <section className="snapping-container">

      <div className='snapping-section bg-black'>
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
          <div className='border border-black max-w-[800px] max-h-[780px]'>
            <Image src={designImg} alt='design' className='w-full h-auto' />
          </div>
        </div>
      </div>


      <div className='snapping-section  bg-black  border'>
        <div className=' h-full border border-black flex justify-center items-center'>
          <div className='lg:text-xl lg:leading-[30px] xl:text-2xl 2xl:text-3xl 2xl:leading-[45px] 
        3xl:text-[2.2rem] font-extralight font-ibmPlexSans 3xl:leading-[65px] w-[70%] m-auto'>
            <span className='text-white'>
              To achieve and maintain high standards we are committed to investing in the most
              talented IT support specialists in India, with the experience, creativity ,</span>
            <span className='text-gray-400'> and qualifications to exceed
              the highest expectations.We are known for our works and we hope you enjoy looking at some of our recent works.
            </span>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Design


















// old
// import Image from 'next/image'
// import React from 'react'
// import designImg from '/src/assets/images/design/Design.png'
// import { PiGreaterThanThin } from "react-icons/pi";

// const Design = () => {
//   return (



//     <div className='bg-[#0B0B0B] pt-[122px] pb-[200px] flex flex-col gap-[250px] '>

//       <div className='flex justify-center items-center'>
//         <div className='text-white px-[70px]'>
//           <div className='flex gap-3 items-center'>
//             <div className='lg:text-base 2xl:text-lg 3xl:text-xl font-ibmPlexSans font-extralight '>View all services</div>
//             <div><PiGreaterThanThin /></div>
//           </div>
//           <div className='lg:text-[70px] xl:text-[85px] 2xl:text-[100px] 3xl:text-[150px] sm:text-[50px] font-extralight font-roboto  max-w-[600px] w-full'>Services</div>
//           <div className='lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-thin font-ibmPlexSans max-w-[600px] w-full '>
//             Websites / E-Commerce /  Mobile Apps
//             Digital Marketing / Search Engine Optimisation
//             Design & Production</div>
//         </div>
//         <div>
//           <Image src={designImg} alt='design' className='3xl:w-full 3xl:h-full' />
//         </div>
//       </div>


//       <div>
//         <div className='lg:text-xl lg:leading-[30px] xl:text-2xl 2xl:text-3xl 2xl:leading-[45px] 3xl:text-[2.2rem]
//         font-extralight font-ibmPlexSans 3xl:leading-[65px] w-[70%] m-auto'>
//           <span className='text-white'>
//             To achieve and maintain high standards we are committed to investing in the most
//             talented IT support specialists in India, with the experience, creativity ,</span>
//           <span className='text-gray-400'> and qualifications to exceed
//             the highest expectations.We are known for our works and we hope you enjoy looking at some of our recent works.
//           </span>
//         </div>
//       </div>




//     </div>
//   )
// }

// export default Design

