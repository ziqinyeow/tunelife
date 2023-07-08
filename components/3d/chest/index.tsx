"use client";
import React, { Suspense, useState } from "react";
//Three
import { Canvas, useThree } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import { useSpring } from "react-spring";
import Model from "./model";

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
    onFrame: ({ x, y, z }: any) => {
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
      autoRotate
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
};

const Chest = ({ className }: { className?: string }) => {
  // State if chest is open
  const [open, setOpen] = useState(false);
  return (
    <>
      <Canvas
        // colorManagement
        // shadowMap
        className={className}
        camera={{ position: [-5, 4, 4], fov: 40 }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={["#fff", 0, 22]} />
          <ambientLight intensity={0.4} />
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
          <pointLight position={[20, 50, 0]} intensity={2} />
          <Model open={open} setOpen={setOpen} />
          {/* <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.4} />
          </mesh> */}
          <ZoomWithOrbital />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Chest;
