import React from 'react'
import BulletPoint from '../../utils/BulletPoint'
import Circle from '../../Assets/images/circle.png'
import Square from '../../Assets/images/square.png'
import Quad from '../../Assets/images/quad.png'
import Diamond from '../../Assets/images/diamond.png'

const TeificValues = () => {
  return (
    <div className='w-full h-screen py-10 bg-[#1D1D1F]'>
    <h2 className='text-3xl font-bold px-24'>Teific Technology <span className='text-[#FBC93E]'>Values</span></h2>
    <div className='px-36 flex w-full h-full flex-row-reverse'>
        <div className='w-1/2 h-full flex flex-col  gap-2 justify-evenly'> 
        
            <div>
                <div className='flex'>
                    <img src={Diamond} alt='' className='w-48 h-48'  />
                    <img src={Square} alt=''  className='w-48 h-48' />
                    
                </div>
                <div className='flex'>
                    <img src={Quad} alt='' className='w-48 h-48' />
                    <img src={Circle} alt='' className='w-48 h-48'/>
                    
                </div>
            </div>
        </div>

        <div className='w-1/2 h-full flex flex-col justify-evenly px-12 ' >
            <BulletPoint heading={"Innovation"} content={"We stay at the forefront of technology, offering cutting-edge solutions that enhance your lifestyle."}/>
            <BulletPoint heading={"Quality"} content={"Our products are built with the highest quality standards, guaranteeing reliability and durability. "}/>
            <BulletPoint heading={"Expertise"} content={"Our team of experts has extensive knowledge and experience in their respective fields, ensuring top-notch service. "}/>
            <BulletPoint heading={"Customer Satisfaction"} content={"We prioritize customer satisfaction and strive to provide exceptional support throughout your journey."}/>
        </div>

    </div>
  
</div>
  )
}

export default TeificValues
