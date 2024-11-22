import React from 'react'
import bg from '../../Assets/images/Group 1000000926.png'
const AboutHero = () => {
  return (
    <div className='h-screen relative'>
      <img src={bg} alt='bg' className='bg-cover h-screen w-full'/>
      <div className='w-1/3 absolute right-28 px-10 text-justify text-balance flex flex-col gap-4 top-[30%]' >
        <h2 className='text-3xl font-bold'>
        Organization <span className='text-[#FBC93E]'>Overview</span>
        </h2>
        <p>Teific Technology is a dynamic and innovative company specializing in customized drones, smart  healthcare devices, and smart home products. With a focus on cutting-edge technology and  personalized solutions, we are dedicated to improving lives and transforming industries.  Our team of skilled professionals is passionate about creating products that are both functional  and user-friendly. We combine our expertise in engineering, design, and technology to develop  solutions that meet the evolving needs of our customers.  Whether you're looking for a customized drone for aerial photography, a smart healthcare device  to monitor your health, or a smart home system to enhance your living space, Teific Technology  has the expertise to deliver the perfect solution.</p>
      </div>
    </div>
  )
}

export default AboutHero
