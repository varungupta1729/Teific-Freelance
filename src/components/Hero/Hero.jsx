import React from 'react'
import HeroBg from '../../Assets/images/HeroBg.png'
const Hero = () => {
  return (
    <div className='' >
      <img src={HeroBg} alt='bg-hero' className='bg-cover w-full md:h-screen'/>
      <div className='absolute  top-[20%] md:top-[40%] md:right-36 text-center w-full md:text-right'>
        <h2 className='absolute text-4xl top-0 right-[20%] md:right-0  md:text-8xl text-[#FBC93E] bg-[#FBC93E] bg-clip-text blur-xl   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>Teific <br className='hidden md:block'/> Technology</h2>
        <h2 className='relative top-0  text-4xl md:text-8xl text-[#FBC93E] bg-[#FBC93E] bg-clip-text font-bold '>Teific <br className='hidden md:block'/> Technology</h2>
       <p className='md:text-2xl mt-5'>Empowering ease of your life</p>
      </div>
    </div>
  )
}

export default Hero
