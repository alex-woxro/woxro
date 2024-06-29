import React from 'react'

const Consult = () => {
  return (
    <div className='flex bg-black text-white  px-36 pb-[10rem]'>


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







      <div>











      </div>











    </div>
  )
}

export default Consult