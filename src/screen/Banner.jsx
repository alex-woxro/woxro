'use client';
import React, { useState } from 'react';

const Banner = () => {
  const [selected, setSelected] = useState(1);
  const selectHandler = (value) => {
    setSelected(value);
  }
  return (
    <div className='h-screen'>
      <div className="relative h-full">
        <video autoPlay muted loop className="absolute inset-0 w-full h-screen object-cover">
          <source src="/assets/video/wox-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col justify-end h-full text-white pb-[5%]">
          <div className='w-full flex justify-center '>
            <div className='w-[93%]'>

              <div className='flex justify-between items-center'>
                <div className='font-roboto font-light lg:text-5xl xl:text-6xl 3xl:text-[70px] 3xl:leading-[82px]'>
                  Crafting Digital <br /> Transformation Services & <br />Solutions
                </div>
                <div className='flex gap-2'>
                  <div
                    className={`w-[77px] h-[4px] ${selected === 1 ? 'bg-[#3b3b3b99]' : 'bg-[#a1a1a199]'}`} onClick={() => selectHandler(1)}></div>
                  <div className={`w-[77px] h-[4px] ${selected === 2 ? `bg-[#3b3b3b99]` : `bg-[#a1a1a199]`} `} onClick={() => selectHandler(2)}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;







// <div className="relative w-full h-screen overflow-hidden">
//   <video autoPlay loop muted className="absolute top-0 left-0 w-full  object-cover">
//     <source src="/assets/video/wox-video.mp4" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
//   <div className="relative z-10 flex items-center justify-center w-full h-full">
//     {/* <h1 className="text-white text-3xl font-bold">Crafting Digital Transformation Services & Solutions</h1> */}
//   </div>
// </div>

// <div className='h-screen'>
//   <div className="relative h-full ">
//     <video autoPlay muted loop className="absolute inset-0 w-full h-screen object-cover border border-blue-500">
//       <source src="/assets/video/wox-video.mp4" type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
//       <h1 className="text-4xl md:text-6xl font-bold mb-6">Hello</h1>
//       <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
//         Button
//       </button>
//     </div>
//   </div>
// </div>