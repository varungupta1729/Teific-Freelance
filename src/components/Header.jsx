import React from 'react'
import logo from "../Assets/images/Logo.png"
import { HeaderNav } from '../static/data'
import {Link} from 'react-router-dom'
const Header = ({position}) => {
  return (
    <div className={` ${ position?"my-7":"absolute top-7 z-10"} w-full flex justify-between items-center px-36  `}>
      <img src={logo} alt='logo'/>
      <div className='bg-gradient-to-t from-[#FFFFFF24] to-[#FFFFFF00] px-10 py-4 rounded-2xl'> 
       <ul className='flex gap-10'>
        {
            HeaderNav.map((item)=> <Link to={item.link}><li>{item.content}</li></Link>)
        }
       </ul>
      </div>
      <div className='bg-gradient-to-t from-[#FFFFFF24] to-[#FFFFFF00] px-10 py-4 rounded-2xl'> 
        <span>
            Explore Now
        </span>
      </div>
    </div>
  )
}

export default Header
