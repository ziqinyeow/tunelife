/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/3d/coffre-minecraft.glb
*/

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSpring, animated } from "react-spring";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Model({ open, setOpen, ...props }: Props) {
  const group = useRef();
  const { nodes, materials, animations }: any = useGLTF(
    "/3d/coffre-minecraft.glb"
  );
  // const { actions } = useAnimations(animations, group);

  const actions = useRef();
  // @ts-ignore
  // const [mixer] = useState(() => new THREE.AnimationMixer());
  // useFrame((state, delta) => mixer.update(delta));
  // useEffect(() => {
  //   // @ts-ignore
  //   actions.current = {
  //     ArmatureAction: mixer.clipAction(animations[0], group.current),
  //   };
  //   return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  // }, [animations, mixer]);

  const handleAnimation = () => {
    setOpen(!open);
  };

  // Chest open animation
  const chestOpen = useSpring({
    rotation: open ? [0, 0, 0] : [1.61, 0, 0],
    position: open ? [0, -1.5, 0] : [0, 0, 0],
  });

  return (
    <group onClick={handleAnimation} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Light"
          position={[4.076, 5.904, -1.005]}
          rotation={[1.89, 0.881, -2.045]}
        />
        <group
          name="Camera"
          position={[7.359, 4.958, 6.926]}
          rotation={[1.242, 0.33, -0.76]}
        />
        <group
          name="Armature"
          // rotation={chestOpen.rotation}
          position={[0, -0.985, 0]}
        >
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <skinnedMesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials.Material}
            skeleton={nodes.Cube.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/3d/coffre-minecraft.glb");
