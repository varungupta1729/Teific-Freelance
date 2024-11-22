import React from 'react'
import bg from '../../Assets/images/bgabouteam.png'
import image from '../../Assets/images/Image Section.png'
const Team = () => {
  return (
    <div className='h-screen relative'>
      <img src={bg} alt='bg' />
      <div className='absolute top-0 h-full flex flex-col justify-center items-center w-full gap-7'>
      <h2 className='text-3xl font-bold'>
      Leadership <span className='text-[#FBC93E]'>Team</span> 
      </h2>
      <img src={image} alt=''/>
      </div>
   
    </div>
  )
}

export default Team
