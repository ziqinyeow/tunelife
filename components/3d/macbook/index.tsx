"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./model";

const Macbook = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1, 4], fov: 10 }}
      className="w-full h-full max-w-full transition-all ease-in"
    >
      <ambientLight color={`#ffcccb`} intensity={0.8} />
      <directionalLight
        castShadow
        position={[-8, 16, -8]}
        intensity={0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight color={`#fff`} position={[3, -50, 0]} intensity={3} />
      {/* <pointLight color={`#FDDC5C`} position={[-10, -10, 10]} intensity={2} /> */}
      <pointLight color={`#fff`} position={[10, 20, 10]} intensity={10} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls autoRotate rotateSpeed={5} enableZoom={false} />
    </Canvas>
  );
};

export default Macbook;
