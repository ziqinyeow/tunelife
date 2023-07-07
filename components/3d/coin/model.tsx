import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

export default function Model(props: any) {
  const { nodes, materials }: any = useGLTF("/3d/coin.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Coin_Coin_0.geometry}
        material={materials.Coin}
        scale={0.01}
        rotation={[0.5, 0.5, 0.5]}
      />
    </group>
  );
}

useGLTF.preload("/3d/coin.glb");
