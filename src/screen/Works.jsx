import { CHOOSE_CARD, EVENTS, INDUSTRY_CARD, INDUSTRY_LOGOS, WORKS_CARD } from '@/const'; // Assuming this imports your WORKS_CARD array correctly
import Image from 'next/image';
import React from 'react';
import LarrWhite from '/public/assets/icons/button/r-arr-white.png'
import LarrBlack from '/public/assets/icons/button/r-arr-black.png'
import { PiGreaterThanThin } from "react-icons/pi";
import Service from './Service';

const Works = () => {
  return (
    <div>
      <div className='pb-[83px] lg:pb-[177px] px-5'>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center pt-[84px] lg:pt-[150px] gap-[19px] lg:gap-[24px] 2xl:gap-8'>
            <div className='font-light text-4xl lg:text-5xl 2xl:text-6xl font-roboto'>Our Works</div>
            <div className='text-[15px] lg:text-lg xl:text-xl  2xl:text-2xl  font-light text-center font-ibmPlexSans'>
              Preparing for your success, we provide truly prominent IT solutions.
              Global Web Designing Company <br />That Provides Full-cycle Software Development Services,E-commerce & Mobile App Development Services.
            </div>
          </div>
        </div>

        <div className='m-auto lg:max-w-[75%] w-fit pt-[82px] lg:pt-[116px]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[52px] lg:gap-[25px] xl:gap-[40px] 2xl:gap-y-[96px]  place-items-center">
            {WORKS_CARD.map((card, index) => (
              <div key={index} className="sm:max-w-[350px] w-full h-full flex flex-col gap-2 ">
                <Image src={card.image} className='w-full h-full object-cover' height={300} width={300} alt='card-img' />
                <div className='text-[#0E4FCA] text-base  2xl:text-xl  font-ibmPlexSans font-normal'>{card.name}</div>
                <div className='text-[#000000] 3xl:leading-[1.3rem] lg:text-sm 2xl:text-base  font-ibmPlexSans font-normal'>{card.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>




      {/* olddddddd */}
      {/* <div className='text-white  py-80 flex flex-col justify-center items-center gap-20 bg-[#0B0B0B]'>
        <div className='text-center  text-7xl font-extralight font-roboto'> It's all about an elegant & <br /> seamless design</div>
        <div className='text-center font-ibmPlexSans font-extralight text-xl'>Our journey is marked by a relentless pursuit of perfection,where every stroke of our <br />
          creative process is aimed at leaving a lasting impression. Join us in reimagining the<br />
          world through design that not only speaks, but also resonates.
        </div>
      </div> */}



      <div className='bg-black text-white'>
        <div className='py-24 lg:py-40'>
          <div className='flex flex-col gap-5 lg:gap-8 justify-center items-center px-5'>
            <div className='text-center text-4xl lg:text-5xl 2xl:text-6xl font-extralight font-roboto'>Why Choose Us?</div>
            <div className='text-center lg:text-xl 2xl:text-2xl font-ibmPlexSans font-extralight'>
              From the beginning, We have been setting up the team by individuals who have gone beyond the limits of <br /> personal
              goals and who have the passion to do things from the bottom of their heart.
            </div>
          </div>
        </div>


        <div className='pb-[137px]'>
          <div className='m-auto max-w-[80%] w-full flex lg:justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5rem]">
              {CHOOSE_CARD.map((card, index) => (
                <div key={index} className="max-w-[400px] w-full h-full  flex flex-col gap-4 ">
                  <Image src={card?.image} alt='card-img' className=' lg:w-[110px] lg:h-[100px] 3xl:h-[125px] 3xl:w-[140px]' height={125} width={140} />
                  <div className='text-lg font-ibmPlexSans font-normal'>{card.name}</div>
                  <div className='text-lg font-ibmPlexSans font-light text-dull-grey'
                    dangerouslySetInnerHTML={{ __html: card.title.replace(/\n/g, '<br />') }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>


      <Service />



      <div className='pt-52 pb-96 flex flex-col justify-center items-center bg-[#0B0B0B] text-white'>
        <div className='flex flex-col gap-7'>
          <div className='text-center font-ibmPlexSans font-normal text-xl text-dull-grey'>WE ARE PROCESS NERDS</div>
          <div className='text-center w-full lg:text-4xl xl:text-5xl 3xl:text-[3.25rem] font-light font-roboto'>We Work With All Industries</div>
          <div className='text-center w-full font-ibmPlexSans lg:text-lg xl:text-xl  3xl:text-2xl font-extralight'> We support global brands, startups and enterprises that use innovation and human-<br />centered design to create meaningful customer experiences.
          </div>
        </div>


        <div className='mt-60'>
          <div className='m-auto  flex justify-center'>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-1 xl:gap-9 2xl:gap-16 3xl:gap-20">
              {INDUSTRY_CARD.map((card, index) => (
                <div key={index} className="max-w-[556px] w-full h-full  flex flex-col gap-6">
                  <div className='lg:text-sm xl:text-base 3xl:text-xl font-normal font-ibmPlexSans'>{card.name}</div>
                  <div className='lg:text-sm  xl:text-base 3xl:text-lg font-thin font-ibmPlexSans text-custom-white'
                    dangerouslySetInnerHTML={{ __html: card.title.replace(/\n/g, '<br />') }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>





      <div className='my-40 flex flex-col justify-center items-center'>

        <div className='font-roboto  font-extralight text-[4rem]'>Life at <span className='font-medium'>W!</span></div>


        <div className='mt-20 w-full flex justify-center'>

          <div className='w-[85%]  flex justify-center'>

            <div className='grid grid-cols-4 max-h-[426px] max-w-[80%] gap-4 '>

              <div className='max-h-[426px] max-w-[330px] '>
                <Image src='/assets/images/photos/1.png' className='w-full h-full object-cover' height={426} width={330} alt='photo' />
              </div>


              <div className='flex flex-col gap-4 '>
                <div className=' h-full'>
                  <Image src='/assets/images/photos/2.png' className='h-fit w-fit' height={210} width={330} alt='photo' />
                </div>
                <div className=' h-full' >
                  <Image src='/assets/images/photos/3.png' className='h-fit w-fit' height={210} width={330} alt='photo' />
                </div>
              </div>


              <div className='flex flex-col gap-4'>
                <div className='h-full '>
                  <Image src='/assets/images/photos/4.png' className='h-fit w-fit' height={210} width={330} alt='photo' />
                </div>
                <div className='h-full' >
                  <Image src='/assets/images/photos/5.png' className='h-fit w-fit' height={210} width={330} alt='photo' />
                </div>
              </div>

              <div className='max-h-[426px]'>
                <Image src='/assets/images/photos/6.png' className='h-full w-full object-cover' height={426} width={330} alt='photo' />
              </div>
            </div>
          </div>
        </div>



        <div className='max-w-[80%] w-full text-center mt-20 lg:text-lg  2xl:text-xl  3xl:text-[1.5rem]  font-light font-ibmPlexSans'>Our journey is marked by a relentless pursuit of perfection, where every stroke of our creative process is aimed at leaving a lasting <br />
          impression. Join us in reimagining the world through design that not only speaks, but also resonates.</div>
        <div className='flex gap-10 mt-20'>
          <div className='border w-[240px] bg-black text-white flex items-center justify-between xl:px-3 lg:p-1.5 xl:py-2  lg:text-sm  xl:text-base font-normal font-ibmPlexSans'>
            <div>Schedule <br /> Meeting !</div>
            <div><Image src={LarrWhite} width={20} height={20} /></div>
          </div>
          <div className=' w-[240px] bg-white text-black border-[1px] border-black flex items-center justify-between px-3 lg:p-1.5 xl:py-2 lg:text-sm  xl:text-base font-normal font-ibmPlexSans'>
            <div>Apply for<br /> Openings</div>
            <div><Image src={LarrBlack} width={20} height={20} /></div>
          </div>
        </div>
      </div>



      <div className='bg-[#0B0B0B] pt-60 pb-36 px-28 text-white flex flex-col gap-14'>
        <div className='font-roboto font-thin lg:text-4xl 2xl:text-5xl 3xl:text-[4rem] 3xl:leading-[4.6rem]'>We're building an equitable world by <br />championing change with digital.</div>
        <div className='font-ibmPlexSans font-thin lg:text-lg 2xl:text-xl 3xl:text-2xl text-[#B0B0B0]'>
          From the way teams collaborate on large codebases, to how apps get <br />
          rendered—we’re excited to announce these upcoming features.From the <br />
          way teams collaborate on large codebases, to how apps get rendered—<br />
          we’re excited to announce these upcoming features.
        </div>
        <div className='flex gap-3 items-center'><div className='lg:text-lg 2xl:text-xl 3xl:text-2xl font-ibmPlexSans font-light'>View all clients</div><div><PiGreaterThanThin /></div></div>

        <div className='mt-20'>
          <div className='grid grid-cols-7 lg:gap-10 xl:gap-12 2xl:gap-14 3xl:gap-16'>
            {INDUSTRY_LOGOS.map((logo) => (
              <div className='max-w-[136px] max-h-[32px]'>
                <Image src={logo.image} alt='logos' className='w-full h-full object-contain' height={32} width={136} />
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className='pt-32 pb-80'>
        <div className='flex flex-col gap-7 justify-center items-center'>
          <div className='text-center  lg:text-5xl xl:text-6xl  3xl:text-[4rem] font-light font-roboto'>Insights</div>
          <div className='text-center lg:text-lg 2xl:text-xl font-ibmPlexSans font-light'>
            Remain in the loop and relevant, make sure to read our monthly blogs on technology-related topics. We <br />
            keep them concise, informative, and to the point.
          </div>
        </div>

        <div className='flex items-center justify-center mt-24 px-5'>
          <div className='grid grid-cols-3 gap-10'>
            {EVENTS.map((event) => (
              <div key={event.category} className='max-w-[400px] h-full'>
                <Image src={event.image} alt='event-img' height={260} width={400} className='w-full  object-contain' />
                <div>
                  <div className='flex justify-between mt-3 lg:text-xs xl:text-sm 3xl:text-base'>
                    <div className='font-ibmPlexSans font-normal'>
                      <span className='text-link-blue '> {event.category}</span> <span className='text-dull-grey'>| {event.read}</span>
                    </div>
                    <div className='text-dull-grey'>{event.date}</div>
                  </div>
                  <div className='mt-4 font-robot leading-6 lg:text-sm xl:text-base   3xl:text-lg font-medium'>{event.titile}</div>
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



