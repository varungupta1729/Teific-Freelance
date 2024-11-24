import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Drone } from "../Models/Drone";
import { Environment, OrbitControls } from "@react-three/drei";
import { easing } from "maath";
import Frame from "../../Assets/images/Frame 88.png";
import Frame16 from "../../Assets/images/Frame 16.png";
import Frame39 from "../../Assets/images/Frame 39.png";

// CameraRig Component to control camera movement
const CameraRig = ({ children, rotationTarget }) => {
  const group = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]); // Rotation state for CameraRig

  useFrame((state, delta) => {
    if (group.current) {
      // Apply smooth rotation using easing.dampE
      easing.dampE(group.current.rotation, rotationTarget, 0.25, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

const ThreeModel = () => {
  const [rotationTarget, setRotationTarget] = useState([0, 0, 0]); // Target rotation for CameraRig

  // Function to rotate the camera horizontally (Y-axis)
  const rotateHorizontal = () => {
    setRotationTarget((prevRotation) => [
      prevRotation[0],
      prevRotation[1] + Math.PI / 2, // Rotate around the Y-axis (horizontal)
      prevRotation[2],
    ]);
  };

  // Function to rotate the camera vertically (X-axis)
  const rotateVertical = () => {
    setRotationTarget((prevRotation) => [
      prevRotation[0] + Math.PI / 2, // Rotate around the X-axis (vertical)
      prevRotation[1],
      prevRotation[2],
    ]);
  };

  return (
    <div className="h-[80%] w-[80%] relative">
      <Canvas
        shadows
        camera={{ position: [0, 0, 7], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        {/* OrbitControls to allow mouse-based camera control */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />

        {/* Use CameraRig to manage rotations with smooth transition */}
        <CameraRig rotationTarget={rotationTarget}>
          <Drone />
        </CameraRig>
      </Canvas>

      {/* Background Images */}
      <img src={Frame} className="absolute top-0 -z-10 md:h-full  h-[100%] w-full"  alt="" />
      <div>
        <div className="flex gap-10 relative">
        <img src={Frame16} className="hidden xl:block   absolute -bottom-36  -left-7" alt="" />
        <img src={Frame39} className=" hidden xl:block md:absolute -bottom-44  -right-32" alt="" />
        </div>
      

      {/* Buttons for rotation */}
    
        <button
          onClick={rotateHorizontal}
          className="w-20 h-20  bg-transparent text-white rounded absolute -bottom-[9.38rem] z-10 -right-[6.4rem] "
        >
        
        </button>
        <button
          onClick={rotateVertical}
          className="w-20 h-20  bg-transparent text-white rounded absolute  -bottom-[2.9rem] z-10 -right-[6.4rem]"
        >
        
        </button>
      </div>
      
     
    </div>
  );
};

export default ThreeModel;
