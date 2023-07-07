"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import { useSpring } from "react-spring";
import Lights from "@/components/chest/lights";
import Floor from "@/components/chest/floor";
import Model from "@/components/chest/model";

const ZoomWithOrbital = () => {
  const { gl, camera } = useThree();

  useSpring({
    from: {
      z: 30,
    },
    x: -5,
    y: 4,
    z: 4,
    // React Springs onFrame
    onFrame: ({ x, y, z }) => {
      camera.position.x = x;
      camera.position.y = y;
      camera.position.z = z;
    },
  });

  return (
    // Oribital controls via drei
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
};

export default function Chest() {
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  });

  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 4, 4], fov: 40 }}
      >
        <Suspense fallback={null}>
          <>
            <Lights />
            {/* <Model open={open} setOpen={setOpen} /> */}
            <Floor />
          </>
          <ZoomWithOrbital />
        </Suspense>
      </Canvas>
      {/* Loading bar */}
      <Loader />
      {/* Chest Modal UI */}
      {/* <ChestModal open={open} setOpen={setOpen} /> */}
    </>
  );
}
