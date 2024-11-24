import React, { useState } from 'react'
import logo from "../Assets/images/Logo.png"
import { HeaderNav } from '../static/data'
import {Link} from 'react-router-dom'
import { BsList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
const Header = ({position}) => {
  const[active , setActive] = useState(false);
  return (
    <div className={` ${ position?"my-7":"absolute top-7 "} z-10 w-full flex justify-between lg:items-center lg:px-36 px-7 `}>
     <Link to="/"> <img src={logo} alt='logo' className='w-10 lg:w-full ' /></Link>
      <div className={`lg:flex bg-gradient-to-t from-[#FFFFFF24] to-[#FFFFFF00] ${active ?"flex":"hidden"} px-10 py-4 rounded-2xl`}> 
  
       <ul className={`flex flex-col lg:flex-row gap-10 `}>
        {
            HeaderNav.map((item)=> <Link to={item.link}><li>{item.content}</li></Link>)
        }
       </ul>
      </div>
      <div className=' hidden lg:block bg-gradient-to-t from-[#FFFFFF24] to-[#FFFFFF00] px-10 py-4 rounded-2xl'> 
        <span className=''>
            Explore Now
        </span>
       
      </div>
      {
          active ? (<RxCross1 className='p-0' size={30}   onClick={()=>setActive(!active)}/>):(<BsList size={40}  className='lg:hidden' onClick={()=>setActive(!active)}/>)
        }
    </div>
  )
}

export default Header
