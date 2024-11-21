import React from 'react'
import Bullet from '../Assets/images/Ellipse 220.png'
const BulletPoint = ({heading , content}) => {
  return (
    <div className='flex gap-6'>
     
        <img src={Bullet} alt='point' className='w-16 h-16'/>
     
      <div>
        <h2 className='text-[#FBC93E] text-2xl'>{heading}</h2>
        <p className='text-lg'>{content}</p>
      </div>
      
    </div>
  )
}

export default BulletPoint
