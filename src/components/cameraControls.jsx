import React, { useRef } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();

  camera.position.z = 900;

  useFrame(() => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={false}
      enableZoom={false}
      dampingFactor={0.5}
      rotateSpeed={0.3}
      enablePan={false}
      maxPolarAngle={Math.PI / 2 + .2}
      minPolarAngle={Math.PI / 2 - .2}
    />
  );
};

export default CameraControls;
