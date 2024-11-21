import React from 'react'
import HeroBg from '../../Assets/images/HeroBg.png'
const Hero = () => {
  return (
    <div className='' >
      <img src={HeroBg} alt='bg-hero' className='bg-cover w-full h-screen'/>
      <div className='absolute top-[40%] right-36 text-right'>
        <h2 className='absolute text-8xl text-[#FBC93E] bg-[#FBC93E] bg-clip-text blur-xl shadow-inner  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>Teific <br/> Technology</h2>
        <h2 className='relative top-0 text-8xl text-[#FBC93E] bg-[#FBC93E] bg-clip-text font-bold '>Teific <br/> Technology</h2>
       <p className='text-2xl mt-5'>Empowering ease of your life</p>
      </div>
    </div>
  )
}

export default Hero
