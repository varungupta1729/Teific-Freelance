import React from 'react'
import WhyLogo from '../../Assets/images/Group 1000000915.png'
const WhyTeificHero = () => {
  return (
    <div className='flex md:px-32  py-20'>
      <div className='text-center md:w-1/2 flex flex-col gap-4 px-10 justify-center md:text-justify'>
        <h2 className='text-3xl font-bold'>Why <span className='text-[#FBC93E]'>Teific </span>Technology?</h2>
        <p>Teific Technology is your trusted partner for innovative solutions in the fields of customized drones,  smart healthcare devices, and smart home products. We are committed to providing exceptional  products and services that meet your unique needs, backed by our expertise and dedication to  excellence.</p>
      </div>
      <div className='hidden md:block md:w-1/2'>
      <img src={WhyLogo} alt='whyteific'/>
      </div>
    </div>
  )
}

export default WhyTeificHero
