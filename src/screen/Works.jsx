import { CHOOSE_CARD, EVENTS, INDUSTRY_CARD, INDUSTRY_LOGOS, WORKS_CARD } from '@/const'; // Assuming this imports your WORKS_CARD array correctly
import Image from 'next/image';
import React from 'react';
import dummyimg from '/src/assets/images/works/5.png'
import LarrWhite from '/public/assets/icons/button/r-arr-white.png'
import LarrBlack from '/public/assets/icons/button/r-arr-black.png'
import { PiGreaterThanThin } from "react-icons/pi";

const Works = () => {
  return (
    <div>
      <div className='pb-[177px]'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center pb-[40px] lg:pt-[20px] 2xl:pt-[150px] 2xl:pb-[70px] lg:gap-2 2xl:gap-8'>
            <div className='font-light text-5xl font-roboto'>Our Works</div>
            <div className='lg:text-xl  font-light text-center font-ibmPlexSans'>
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
                <div className='text-[#0E4FCA] 2xl:text-xl xl:text-sm font-ibmPlexSans font-normal'>{card.name}</div>
                <div className='leading-[1.3rem] text-lg font-ibmPlexSans font-normal'>{card.title}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='text-white  py-80 flex flex-col justify-center items-center gap-20 bg-[#0B0B0B]'>
        <div className='text-center  text-7xl font-extralight font-roboto'> It's all about an elegant & <br /> seamless design</div>
        <div className='text-center font-ibmPlexSans font-extralight text-xl'>Our journey is marked by a relentless pursuit of perfection,where every stroke of our <br />
          creative process is aimed at leaving a lasting impression. Join us in reimagining the<br />
          world through design that not only speaks, but also resonates.
        </div>
      </div>


      <div className='py-40'>
        <div className='flex flex-col gap-7 justify-center items-center'>
          <div className='text-center text-5xl  font-light font-roboto'>Why Choose Us?</div>
          <div className='text-center text-xl font-ibmPlexSans font-light'>
            From the beginning, We have been setting up the team by individuals who have gone beyond the limits of <br /> personal
            goals and who have the passion to do things from the bottom of their heart.
          </div>
        </div>
      </div>

      <div className='pb-56'>
        <div className='m-auto w-[80%] flex justify-center'>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[100px]">
            {CHOOSE_CARD.map((card, index) => (
              <div key={index} className="max-w-[350px] w-full h-full   flex flex-col gap-2 ">
                <Image src={card?.image} className='h-[100px] w-[100px]' height={100} width={100} alt='card-img' />
                <div className='text-lg font-ibmPlexSans font-medium'>{card.name}</div>
                <div className='text-lg font-ibmPlexSans font-normal'>{card.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className='pt-52 pb-96 flex flex-col justify-center items-center bg-[#0B0B0B] text-white'>
        <div className='flex flex-col gap-7'>
          <div className='text-center font-ibmPlexSans font-thin text-xl'>WE ARE PROCESS NERDS</div>
          <div className='text-center w-full text-6xl font-extralight font-roboto'>We Work with all industries</div>
          <div className='text-center w-full font-ibmPlexSans text-2xl font-extralight'> We support global brands, startups and enterprises that use innovation and human-<br />centered design to create meaningful customer experiences.
          </div>
        </div>


        <div className='mt-60'>
          <div className='m-auto w-[80%] flex justify-center'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[100px]">
              {INDUSTRY_CARD.map((card, index) => (
                <div key={index} className="max-w-[556px] w-full h-full  flex flex-col gap-6">
                  <div className='text-xl font-normal font-ibmPlexSans'>{card.name}</div>
                  <div className='text-lg font-thin font-ibmPlexSans text-custom-white'>{card.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className='my-40 flex flex-col justify-center items-center'>

        <div className='font-roboto  font-extralight text-5xl'>Life at <span className='font-medium'>W!</span></div>
        <div className='h-[426px]  flex gap-2 mt-20'>
          <div>
            <Image src='/assets/images/photos/1.png' className='h-full w-full' height={426} width={330} alt='photo' />
          </div>
          <div>
            <div className='flex gap-2'>
              <div><Image src='/assets/images/photos/2.png' className='h-full w-full' height={210} width={330} alt='photo' /></div>
              <div><Image src='/assets/images/photos/3.png' className='h-full w-full' height={210} width={330} alt='photo' /></div>
            </div>
            <div className='flex gap-2'>
              <div><Image src='/assets/images/photos/4.png' className='h-full w-full' height={210} width={330} alt='photo' /></div>
              <div><Image src='/assets/images/photos/5.png' className='h-full w-full' height={210} width={330} alt='photo' /></div>
            </div>
          </div>
          <div><Image src='/assets/images/photos/6.png' className='h-full w-full' height={426} width={330} alt='photo' /></div>
        </div>

        <div className='text-center mt-20 text-xl font-light font-ibmPlexSans'>Our journey is marked by a relentless pursuit of perfection, where every stroke of our creative process is aimed at leaving a lasting <br />
          impression. Join us in reimagining the world through design that not only speaks, but also resonates.</div>
        <div className='flex gap-10 mt-20'>
          <div className='border w-[240px] bg-black text-white flex items-center justify-between px-3 py-2 text-base font-normal font-ibmPlexSans'>
            <div>Schedule <br /> Meeting !</div>
            <div><Image src={LarrWhite} width={20} height={20} /></div>
          </div>
          <div className=' w-[240px] bg-white text-black border-[1px] border-black flex items-center justify-between px-3 py-2 text-base font-normal font-ibmPlexSans'>
            <div>Apply for<br /> Openings</div>
            <div><Image src={LarrBlack} width={20} height={20} /></div>
          </div>
        </div>
      </div>




      <div className='bg-[#0B0B0B] pt-60 pb-36 px-28 text-white flex flex-col gap-14'>
        <div className='font-roboto font-thin text-6xl'>We're building an equitable world by <br />championing change with digital.</div>
        <div className='font-ibmPlexSans font-thin text-2xl text-[#B0B0B0]'>
          From the way teams collaborate on large codebases, to how apps get <br />
          rendered—we’re excited to announce these upcoming features.From the <br />
          way teams collaborate on large codebases, to how apps get rendered—<br />
          we’re excited to announce these upcoming features.
        </div>
        <div className='flex gap-3 items-center'><div className='text-xl font-ibmPlexSans font-extralight'>View all clients</div><div><PiGreaterThanThin /></div></div>

        <div className='mt-20'>
          <div className='grid grid-cols-7 gap-16'>
            {INDUSTRY_LOGOS.map((logo) => (
              <div className='w-[136px] h-[32px]'>
                <Image src={logo.image} alt='logos' className='w-full h-full object-contain' height={32} width={136} />
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className='pt-32 pb-80'>
        <div className='flex flex-col gap-7 justify-center items-center'>
          <div className='text-center text-5xl  font-light font-roboto'>Stay in the loop !</div>
          <div className='text-center text-xl font-ibmPlexSans font-light'>
            Remain in the loop and relevant, make sure to read our monthly blogs on technology-related topics. We <br />
            keep them concise, informative, and to the point.
          </div>
        </div>

        <div className='flex items-center justify-center mt-24'>
          <div className='grid grid-cols-3 gap-10'>
            {EVENTS.map((event) => (
              <div key={event.category} className='w-[400px] h-full'>
                <Image src={event.image} alt='event-img' height={260} width={400} className='object-contain' />
                <div>
                  <div className='flex justify-between mt-3'>
                    <div className='font-ibmPlexSans font-normal text-base'>
                      <span className='text-link-blue '> {event.category}</span> <span className='text-dull-grey'>| {event.read}</span></div>
                    <div className='text-dull-grey'>{event.date}</div>
                  </div>
                  <div className='mt-4 font-robot leading-6 text-lg font-medium'>{event.titile}</div>
                </div>



              </div>

            ))}
          </div>




        </div>




      </div>



























    </div>
  );
};

export default Works;



