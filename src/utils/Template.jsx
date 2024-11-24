import React from "react";
import ThreeModel from "../components/Home/ThreeModel";
const Template = ({ id, bgText, heading, content, imageUrl }) => {
  return (
    <div className="w-full md:h-screen my-10 relative">
      <h2 className="text-6xl md:text-[10rem] font-bold text-center absolute whitespace-nowrap w-full -z-[10] text-[#FFFFFF33] mt-10 overflow-hidden">
        {bgText.slice(0, 1)}
        <span className="text-[#FBC93E33]">{bgText[1]}</span>

        {bgText.slice(2)}
      </h2>
      <div
        className={`h-full  flex flex-col gap-10 md:gap-0 ${
          id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } `}
      >
        {/* Left Div */}
        <div className="w-full md:w-1/2 h-full  flex flex-col justify-center px-10  md:px-28 gap-4">
          <h2 className="text-[#FBC93E] text-2xl text-center md:text-left md:text-5xl font-bold  md:leading-relaxed pr-9">
            {heading}{" "}
          </h2>
          <p className=" md:text-2xl tracking-wide  text-justify"> {content}</p>
        </div>
        {/* Right Div  */}
        <div className=" w-full md:w-1/2 h-full  flex justify-center items-center ">
        {
          imageUrl ?  (<img src={imageUrl} alt="ambu" className="w-[60%] md:h-[70%]" />) :(<ThreeModel/>)
        }
          
        </div>
      </div>
    </div>
  );
};

export default Template;
