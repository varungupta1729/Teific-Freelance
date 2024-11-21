import React from "react";
const Template = ({ id, bgText, heading, content, imageUrl }) => {
  return (
    <div className="w-full h-screen ">
      <h2 className="text-[10rem] font-bold text-center absolute whitespace-nowrap w-full -z-[10] text-[#FFFFFF33] mt-10 overflow-x-hidden">
        {bgText.slice(0, 1)}
        <span className="text-[#FBC93E33]">{bgText[1]}</span>

        {bgText.slice(2)}
      </h2>
      <div
        className={`h-full flex ${
          id % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } `}
      >
        {/* Left Div */}
        <div className="w-1/2 h-full  flex flex-col justify-center px-28 gap-4">
          <h2 className="text-[#FBC93E] text-5xl font-bold  leading-relaxed pr-9">
            {heading}{" "}
          </h2>
          <p className="text-2xl tracking-wide "> {content}</p>
        </div>
        {/* Right Div  */}
        <div className="w-1/2 h-full  flex justify-center items-center ">
          <img src={imageUrl} alt="ambu" />
        </div>
      </div>
    </div>
  );
};

export default Template;
