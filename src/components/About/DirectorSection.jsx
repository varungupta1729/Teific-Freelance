import React from 'react'
import DirectorPhoto from '../../Assets/images/Frame 1.png'
const DirectorSection = () => {
  return (
    <div className='px-28 py-20 flex'>
        <div className='w-1/2 text-right flex flex-col gap-7 justify-center '>
            <h2 className='text-[#9DC4FF] text-7xl font-bold'>
            Keshav <br/>Raina 
            </h2>
            <p className='text-[#FBC93E] text-2xl'>DIRECTOR</p>
            <p>I'm Keshav Raina, the Director of Teific Technology, and I'm delighted to welcome you to our community of innovative solutions. 
<br/><br/>
At Teific, we are passionate about creating products that enhance lives and transform industries. Whether you're exploring the skies with our customized drones, monitoring your health with our 
smart healthcare devices, or transforming your home into a smart living space, we are committed 
to delivering exceptional solutions that exceed your expectations. 
<br/><br/>
Our team of talented professionals is dedicated to providing personalized service and support. We 
believe in building long-lasting relationships with our customers and are always here to assist youin any way we can. </p>
        </div>
        <div>
<img src={DirectorPhoto}/>
        </div>
      
    </div>
  )
}

export default DirectorSection
