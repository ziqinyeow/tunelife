// Component: Floor
// Def: Floor plane for our chest, does recieve a shadow

import React from "react";
import * as THREE from "three";

const Floor = () => {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" opacity={0.4} />
      </mesh>
    </>
  );
};

export default Floor;
