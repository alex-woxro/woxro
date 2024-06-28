import { WORKS_CARD } from '@/const'; // Assuming this imports your WORKS_CARD array correctly
import Image from 'next/image';
import React from 'react';

const Works = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center max-w-[50%] pb-[40px] lg:pt-[20px] 2xl:pt-[150px] 2xl:pb-[70px] lg:gap-1 2xl:gap-2'>
          <div className='font-extralight text-[64px]'>Our Works</div>
          <div className='lg:text-base xl:text-lg text-xl font-light'>
            Preparing for your success, we provide truly prominent IT solutions.
            Global Web Designing Company That Provides Full-cycle Software Development Services,
            E-commerce & Mobile App Development Services.
          </div>
        </div>
      </div>

      <div className='m-auto w-[80%] flex justify-center'>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {WORKS_CARD.map((card, index) => (
            <div key={index} className="2xl:w-[300px] h-full xl:w-[250px] lg:w-[200px]  flex flex-col gap-2">
              <Image src={card.image} height={300} width={300} alt='card-img' />
              <div className='text-[#0E4FCA] 2xl:text-base xl:text-sm'>{card.name}</div>
              <div className='2xl:text-base xl:text-sm'>{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
