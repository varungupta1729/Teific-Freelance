import React from "react";
import Logo from "../Assets/images/Logo.png";
import { FooterData } from "../static/data";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="px-24">
      <div className="flex justify-between py-10 items-center border-b  border-[#FFFFFF3D] ">
        <div className="text-3xl">
          {" "}
          Join our newsletter to <br /> keep up to date with us!
        </div>
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center relative">
            <BiUser className="absolute left-4 text-[#FFFFFFB8]" /> 
            <input
            type="email"
            className="px-10 py-2 rounded-full text-white bg-black border  border-[#FFFFFF3D] w-80"
            placeholder="Enter your Email"
          />
            </div>
        
          <button className="bg-[#FBC93E] text-black px-7 py-2 rounded-full">
            Subsribe
          </button>
        </div>
      </div>
      <div className="flex w-full py-10 items-center border-b  border-[#FFFFFF3D] ">
        <div className="w-1/2 flex flex-col gap-4">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <h2 className="text-2xl">Teific Technology Pvt. Ltd</h2>
          <h3 className="text-[#FBC93ECC]">
            <i>Empowering ease of your life</i>
          </h3>
        </div>
        <div className="w-1/2  flex justify-between">
        {
            FooterData.map((item)=>
             <ul className="flex flex-col gap-3">
                <li className="text-[#FBC93ECC]">{item.title}</li>
                {
                    item.links.map((innerItem)=><Link to={innerItem.url}><li>{innerItem.name}</li></Link>)
                }
             </ul>
            )
        }
        </div>
      </div>
      {/* Address and Contact */}
      <div className="py-16 flex w-full justify-between text-[#FFFFFFCC] "> 
        <div className="w-1/3  flex flex-col gap-7">
            <h4 className="text-[#FBC93ECC]">Registered Office Address
            </h4>
            <p>Mf-1, First Floor, 9/15, Ved Homes, Sector- 3, Rajendra Nagar, Ghaziabad,(U.P)201005, India</p>
        </div>
        <div>
            <ul>
                <li><span className="text-[#FBC93ECC]">Tel No:</span> +91 9971105343
                </li>
                <li>Contact Person: Manager - Customer Services
                </li>
                <li className="text-[#FBC93ECC]">For Customer Support please write to : </li>
                <li>support@teific.in</li>
            </ul>
        </div>

      </div>
      <div className="flex justify-between pb-12 text-[#FFFFFFCC]">
        <div>© 2024 Teific Technology Pvt. Ltd</div>
        <div>
            <ul className="flex gap-8">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Warranty</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
