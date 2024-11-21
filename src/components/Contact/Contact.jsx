import React from "react";
import BulletPoint from "../../utils/BulletPoint";
import image from "../../Assets/images/Group 1000000922.png";

const Contact = () => {
  return (
    <div className="px-20 flex flex-col gap-16 mb-10 mt-24">
      <div className="w-full flex">
        <div className="w-1/2 px-24 flex justify-center ">
          <BulletPoint
            heading={"B2B (Business-to-Business) "}
            content={
              "Teific Technology offers a comprehensive range of B2B solutions tailored to meet the unique needs of businesses across various industries. From customized drones for aerial inspections to advanced smart healthcare devices for medical facilities, our innovative products and services empower businesses to improve efficiency, reduce costs, and drive growth. "
            }
          />
        </div>
        <div className="w-[40%] flex justify-center items-center">
          <img src={image} alt="logo" />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 px-24 flex flex-col  mt-10 gap-6">
          <BulletPoint
            heading={"B2C (Business-to-Consumer)"}
            content={
              "Our B2C offerings are designed to enhance the lives of individuals by providing cutting-edge technology at affordable prices. From high-quality consumer drones for recreational use to smart health devices for personal wellness, our products offer convenience, reliability, and exceptional value."
            }
          />
          <BulletPoint
            heading={"B2G (Business-to-Government)"}
            content={
              "Teific Technology is committed to supporting government initiatives and contributing to public welfare. We offer a range of B2G solutions, including customized drones for government agencies, smart city technologies, and tailored product development to address specific government needs. Our goal is to leverage our expertise to develop innovative solutions that benefit society and drive positive change."
            }
          />
        </div>
        <div className="bg-[#193A4B4D] rounded-3xl px-10 w-[40%] py-10 flex flex-col gap-6">
          <h2 className="text-4xl font-bold">
            Get in <span className="text-[#FBC93E]">Touch</span>
          </h2>
          <p>
            Have a question, need assistance, or want to learn more about our
            products and services? We're here to help! <br />
            Feel free to contact us using the information below.
          </p>
          <form className="flex flex-col gap-3">
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3"
              placeholder="Full Name"
            />
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3"
              placeholder="Email"
            />
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3"
              placeholder="Phone Number"
            />
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3"
              placeholder="Organization Name"
            />
            <input
              className="bg-transparent border-b w-full border-[#737B7D] p-3"
              placeholder="Let’s talk about your idea"
            />
            <button className="bg-[#FBC93E] w-full py-3 rounded-xl mt-6">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
