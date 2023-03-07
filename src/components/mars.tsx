import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Sphere from "./sphere";
import CameraControls from "./cameraControls";

const Mars = () => {
  return (
    <>
      <Canvas className="canvas" style={{ zIndex: 1000 }}>
        <CameraControls />
        <directionalLight
          intensity={1}
          position={[200, 0, -500]}
          //change its color to an orange
          color={"#ff9a00"}
        />
        <ambientLight color={"#21e995"} intensity={0.01} />
        <ambientLight color={"#ff9a00"} intensity={0.02} />
        <Sphere />
      </Canvas>
    </>
  );
};

export default Mars;
