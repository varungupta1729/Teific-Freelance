import React from "react";
import DirectorPhoto from "../../Assets/images/Frame 1.png";
import { slideAnimation } from "../../motion/motion";
import {motion} from 'motion/react'
const DirectorSection = () => {
  return (
    <div className="px-10 lg:px-28 py-20 flex lg:flex-row flex-col-reverse w-full mt-10 lg:mt-0">
      <motion.div  initial="initial"
  whileInView="animate"
  exit="exit"
  viewport={{ once: true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
  variants={slideAnimation('left')} className="w-full lg:w-1/2 flex flex-col gap-7 justify-center text-center lg:text-right">
        <h2 className="text-[#9DC4FF] text-7xl font-bold ">
          Keshav <br />
          Raina
        </h2>
        <p className="text-[#FBC9left3E] text-2xl">DIRECTOR</p>
        <p>
          I'm Keshav Raina, the Director of Teific Technology, and I'm delighted
          to welcome you to our community of innovative solutions.
          <br />
          <br />
          At Teific, we are passionate about creating products that enhance
          lives and transform industries. Whether you're exploring the skies
          with our customized drones, monitoring your health with our smart
          healthcare devices, or transforming your home into a smart living
          space, we are committed to delivering exceptional solutions that
          exceed your expectations.
          <br />
          <br />
          Our team of talented professionals is dedicated to providing
          personalized service and support. We believe in building long-lasting
          relationships with our customers and are always here to assist youin
          any way we can.{" "}
        </p>
      </motion.div>
      <motion.div  initial="initial"
  whileInView="animate"
  exit="exit"
  viewport={{ once: true, amount: 0.7 }} // Ensures it animates only once when 50% is in view
  variants={slideAnimation('right')} className="w-full lg:w-1/2 flex justify-center items-center">
        <img src={DirectorPhoto} alt="" />
      </motion.div>
    </div>
  );
};

export default DirectorSection;
