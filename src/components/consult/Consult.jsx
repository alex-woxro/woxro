import Image from 'next/image'
import React from 'react'

const Consult = () => {
  return (
    <div className=' pt-48 bg-black text-white   pb-[10rem]'>

      {/* flex justify-center gap-44 */}

      <div className='flex m-auto justify-between w-[80%]'>
        <div>
          <div className='font-roboto text-5xl font-light'>Grab a chance to get <br />a free IT Consultation</div>
          <div className='mt-24'>
            <div className='font-ibmPlexSans font-light text-xl'>What happens next ?</div>
            <div className='mt-10'>
              <div className='progress-container'>
                <div className="progress-line"></div>
                <div className='progress-step' style={{ top: '0%' }}>
                  <div className='progress-circle'>1</div>
                  <div className='progress-title font-ibmPlexSans font-light text-lg'>An expert contacts you after having analyzed your requirements;</div>
                </div>
                <div className='progress-step' style={{ top: '33%' }}>
                  <div className='progress-circle'>2</div>
                  <div className='progress-title font-ibmPlexSans font-light text-lg'>If needed, we sign an NDA to ensure the highest privacy level;</div>
                </div>
                <div className='progress-step' style={{ top: '66%' }}>
                  <div className='progress-circle'>3</div>
                  <div className='progress-title font-ibmPlexSans font-light text-lg' >If needed, we sign an NDA to ensure the highest privacy level;</div>
                </div>
                <div className='progress-step' style={{ top: '100%' }}>
                  <div className='progress-circle'>4</div>
                  <div className='progress-title font-ibmPlexSans font-light text-lg'>We submit a detailed project proposal to develop custom software for you.</div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='max-w-[600px] w-full'>
          <div className='col-span-6 text-white'>
            <div className='border-b w-full bg-black flex justify-between '>
              <div className='flex'>
                <Image src='/public/assets/icons/consult/i-button.svg' width={16} height={16} />
                <p className='px-5 py-[0.6rem] text-dull-grey font-ibmPlexSans font-normal text-lg' >Select your industry*</p>
              </div>
              <Image src='/public/assets/icons/consult/down-arrow.svg' width={16} height={16} />
            </div>

            <div className='flex gap-5 mt-[1.563rem]'>
              <div className='border-b w-full '>
                <input className='py-[0.6rem] bg-black w-full focus:outline-none focus:border-none placeholder-dull-grey' placeholder='Name*' />
              </div>


              <div className='border-b w-full bg-black'>
                <input className=' py-[0.6rem] bg-black w-full focus:outline-none focus:border-none placeholder-dull-grey' placeholder='Corporate E-mail*' />
              </div>
            </div>

            <div className='border-b w-full bg-black flex justify-between mt-[1.563rem] '>
              <input className='py-[0.6rem] bg-black w-full focus:outline-none focus:border-none placeholder-dull-grey' placeholder='Phone*' />
            </div>


            <div className='mt-[1.563rem]'>
              <p className='font-ibmPlexSans font-extralight text-lg'>We will call you ASAP or you can schedule a call </p>
              <div className='border-b w-full bg-black flex justify-between mt-[0.625rem]'>
                <textarea className='w-full bg-black focus:outline-none focus:border-none' />
              </div>
            </div>


            <div className='flex gap-4 mt-[3.125rem]'>
              <input type="checkbox" />
              <p className='font-ibmPlexSans font-extralight text-base '>I want to protect my data by signing an NDA.</p>
            </div>


            <div className='mt-7 text-dull-grey font-ibmPlexSans font-normal text-lg'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. </div>
            <div className='mt-9 border py-2 px-9 flex w-fit items-center justify-center bg-white text-black'> Send request </div>

          </div>

        </div>




      </div>







    </div>
  )
}

export default Consult