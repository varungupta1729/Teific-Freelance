import React from 'react'
import Bullet from '../Assets/images/Ellipse 220.png'
const BulletPoint = ({heading , content}) => {
  return (
    <div className='flex gap-6'>
     
        <img src={Bullet} alt='point' className='w-10 h-10 md:w-16 md:h-16'/>
     
      <div>
        <h2 className='text-[#FBC93E] text-lg md:text-2xl'>{heading}</h2>
        <p className='md:text-lg text-justify'>{content}</p>
      </div>
      
    </div>
  )
}

export default BulletPoint
