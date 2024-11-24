import React from 'react'
import WhyLogo from '../../Assets/images/whyteificbg.png'
import Circle from '../../Assets/images/Ellipse 219.png'
const WhyTeificHero = () => {
  return (
    <div className='flex lg:px-32  py-20'>
      <div className='text-center lg:w-1/2 flex flex-col gap-4 px-10 justify-center lg:text-justify'>
        <h2 className='text-3xl font-bold'>Why <span className='text-[#FBC93E]'>Teific </span>Technology?</h2>
        <p>Teific Technology is your trusted partner for innovative solutions in the fields of customized drones,  smart healthcare devices, and smart home products. We are committed to providing exceptional  products and services that meet your unique needs, backed by our expertise and dedication to  excellence.</p>
      </div>
      <div className='hidden lg:block lg:w-1/2 relative'>
      <img src={WhyLogo} alt='whyteific'/>
      <img src={Circle} alt='circle' className='absolute bottom-0 right-0 lg:w-[27%] animate-spinSlow'/>
      </div>
    </div>
  )
}

export default WhyTeificHero
