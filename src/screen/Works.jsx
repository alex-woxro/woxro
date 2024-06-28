import { CHOOSE_CARD, WORKS_CARD } from '@/const'; // Assuming this imports your WORKS_CARD array correctly
import Image from 'next/image';
import React from 'react';
import dummyimg from '/src/assets/images/works/5.png'

import dummyicon from '/src/assets/icons/chooseUs/5.png'




const Works = () => {
  return (
    <div>
      <div className='pb-[177px]'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center pb-[40px] lg:pt-[20px] 2xl:pt-[150px] 2xl:pb-[70px] lg:gap-1 2xl:gap-2'>
            <div className='font-extralight text-[64px]'>Our Works</div>
            <div className='lg:text-base xl:text-lg text-xl font-light text-center'>
              Preparing for your success, we provide truly prominent IT solutions.
              Global Web Designing Company <br />That Provides Full-cycle Software Development Services,E-commerce & Mobile App Development Services.
            </div>
          </div>
        </div>

        <div className='m-auto w-[80%] flex justify-center'>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
            {WORKS_CARD.map((card, index) => (
              <div key={index} className="2xl:w-[300px] h-full xl:w-[250px] lg:w-[200px]  flex flex-col gap-2">
                <Image src={dummyimg} height={300} width={300} alt='card-img' />
                <div className='text-[#0E4FCA] 2xl:text-base xl:text-sm'>{card.name}</div>
                <div className='2xl:text-base xl:text-sm'>{card.title}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='text-white  py-[362px] flex flex-col justify-center items-center gap-[40px] bg-[#0B0B0B]'>
        <div className='text-center  max-w-[600px] text-[45px] font-extralight'> It's all about an elegant & seamless design</div>
        <div className='text-center max-w-[600px]'>Our journey is marked by a relentless pursuit of perfection,
          where every stroke of our creative process is aimed at leaving a lasting impression. Join us in reimagining the world through design that not only speaks, but also resonates.
        </div>
      </div>

      <div className='py-[150px]'>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <div className='text-center  max-w-[40%] text-[50px] font-extralight'>Why Choose Us?</div>
          <div className='text-center max-w-[80%] text-lg'>
            From the beginning, We have been setting up the team by individuals who have gone beyond the limits of <br /> personal
            goals and who have the passion to do things from the bottom of their heart.
          </div>
        </div>
      </div>


      <div className='mt-[10px]'>

        <div className='m-auto w-[80%] flex justify-center'>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[100px]">
            {CHOOSE_CARD.map((card, index) => (
              <div key={index} className="2xl:w-[300px] h-full xl:w-[250px] lg:w-[200px]  flex flex-col gap-2">
                <Image src={card?.image} height={100} width={100} alt='card-img' />
                <div className='text-[#0E4FCA] 2xl:text-base xl:text-sm'>{card.name}</div>
                <div className='2xl:text-base xl:text-sm'>{card.title}</div>
              </div>
            ))}
          </div>
        </div>


      </div>




    </div>
  );
};

export default Works;



