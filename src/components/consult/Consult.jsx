'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Consult = () => {


  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    <div className=' pt-48 bg-black text-white  pb-[10rem]  '>

      {/* flex justify-center gap-44 */}

      <div className='flex m-auto justify-between w-[75%]'>
        <div className='w-[50%]'>
          <div className='font-roboto xl:text-4xl 2xl:text-5xl 3xl:text-[4rem] 3xl:leading-[4.6rem] font-light'>Grab a chance to get <br />a free IT Consultation</div>
          <div className='lg:mt-10 2xl:mt-16 3xl:mt-24'>
            <div className='font-ibmPlexSans font-light 2xl:text-lg 3xl:text-xl'>What happens next ?</div>
            <div className='mt-10'>
              <div className='progress-container'>
                <div className="progress-line"></div>
                <div className='progress-step' style={{ top: '0%' }}>
                  <div className='progress-circle'>1</div>
                  <div className='progress-title font-ibmPlexSans font-light  lg:text-sm 2xl:text-base 3xl:text-lg'>An expert contacts you after having analyzed your requirements;</div>
                </div>
                <div className='progress-step' style={{ top: '33%' }}>
                  <div className='progress-circle'>2</div>
                  <div className='progress-title font-ibmPlexSans font-light lg:text-sm 2xl:text-base 3xl:text-lg'>If needed, we sign an NDA to ensure the highest privacy level;</div>
                </div>
                <div className='progress-step' style={{ top: '66%' }}>
                  <div className='progress-circle'>3</div>
                  <div className='progress-title font-ibmPlexSans font-light lg:text-sm 2xl:text-base 3xl:text-lg' >If needed, we sign an NDA to ensure the highest privacy level;</div>
                </div>
                <div className='progress-step' style={{ top: '100%' }}>
                  <div className='progress-circle'>4</div>
                  <div className='progress-title font-ibmPlexSans font-light lg:text-sm 2xl:text-base 3xl:text-lg'>We submit a detailed project proposal to develop custom software for you.</div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='w-[50%]'>
          <div className='flex flex-col gap-[30px]'>
            <div>
              <select
                value={selectedValue}
                onChange={handleChange}
                className={`bg-black w-full border-b p-2 pl-4 focus:outline-none font-ibmPlexSans font-normal text-base
                 ${selectedValue === "" ? "text-dull-grey" : "text-white"}`} >
                <option value="" disabled className="text-dull-grey">Select your industry*</option>
                <option value="option1" className="text-white">Option 1</option>
                <option value="option2" className="text-white">Option 2</option>
                <option value="option3" className="text-white">Option 3</option>
              </select>
            </div>


            <div className='flex gap-5'>
              <div className='border-b w-full '>
                <input className='py-[0.6rem] bg-black w-full focus:outline-none focus:border-none placeholder-dull-grey
                font-ibmPlexSans font-normal text-base' placeholder='Name*' />
              </div>
              <div className='border-b w-full bg-black'>
                <input className=' py-[0.6rem] bg-black w-full focus:outline-none focus:border-none placeholder-dull-grey
                font-ibmPlexSans font-normal text-base' placeholder='Corporate E-mail*' />
              </div>
            </div>



            <div className='border-b w-full bg-black flex justify-between '>
              <input className='py-[0.6rem] bg-black w-full focus:outline-none focus:border-none placeholder-dull-grey
              font-ibmPlexSans font-normal text-base' placeholder='Phone*' />
            </div>



            <div className=' font-ibmPlexSans font-extralight lg:text-base 3xl:text-lg'>We will call you ASAP or you can schedule a call </div>


            <div className='border-b w-full bg-black flex justify-between'>
              <input className='py-[0.6rem] bg-black w-full focus:outline-none focus:border-none font-ibmPlexSans font-normal text-base' />
            </div>


            <div className='flex gap-4 '>
              <input type="checkbox" className='w-5 h-5' />
              <div className='font-ibmPlexSans font-extralight lg:text-sm 3xl:text-base '>I want to protect my data by signing an NDA.</div>
            </div>

            <div className=' text-dull-grey font-ibmPlexSans font-normal lg:text-base 3xl:text-lg'>
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
            <div className=' border py-2 px-9 flex w-fit items-center justify-center bg-white text-black
            font-normal text-lg'> Send Request </div>

          </div>

        </div>

      </div>







    </div>
  )
}

export default Consult