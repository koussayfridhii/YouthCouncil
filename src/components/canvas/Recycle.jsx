/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\assets\models\trash_can_recycle_bin_16mb_4part.glb 
Author: Mehdi Shahsavan (https://sketchfab.com/ahmagh2e)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/trash-can-recycle-bin-16mb-4part-9b2efbe8e0734be49fdcbb432f7a0ea8
Title: Trash Can_Recycle Bin_16MB_4PART
*/

import { useGLTF } from "@react-three/drei";

export default function Recycle(props) {
  const { nodes, materials } = useGLTF(
    "./assets/models/trash_can_recycle_bin_16mb_4part.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.005} position={[7.5, -0.7, -4]} rotation-y={-Math.PI / 6}>
        <group position={[187.143, 99.236, 0.019]}>
          <group position={[0, 99.236, 0.019]}>
            <mesh
              geometry={nodes.door_01_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes["01_2_01_0"].geometry}
              material={materials.material}
              position={[0, 67.741, -30.885]}
            />
          </group>
          <mesh
            geometry={nodes.base_01_0.geometry}
            material={materials.material}
            position={[0, -99.236, -0.019]}
          />
        </group>
        <group position={[0, 99.236, 0.019]}>
          <group position={[0, 99.236, 0.019]}>
            <mesh
              geometry={nodes.door_2_02_0.geometry}
              material={materials.material_1}
            />
            <mesh
              geometry={nodes["01_3_02_0"].geometry}
              material={materials.material_1}
              position={[0, 67.741, -30.885]}
            />
          </group>
          <mesh
            geometry={nodes.base_2_02_0.geometry}
            material={materials.material_1}
            position={[0, -99.236, -0.019]}
          />
        </group>
        <group position={[-188.074, 99.236, 0.019]}>
          <group position={[0, 99.236, 0.019]}>
            <mesh
              geometry={nodes.door_3_03_0.geometry}
              material={materials.material_2}
            />
            <mesh
              geometry={nodes["01_4_03_0"].geometry}
              material={materials.material_2}
              position={[0, 67.741, -30.885]}
            />
          </group>
          <mesh
            geometry={nodes.base_3_03_0.geometry}
            material={materials.material_2}
            position={[0, -99.236, -0.019]}
          />
        </group>
        <group position={[-359.448, 99.236, 0.019]}>
          <group position={[0, 99.236, 0.019]}>
            <mesh
              geometry={nodes.door_4_04_0.geometry}
              material={materials.material_3}
            />
            <mesh
              geometry={nodes["01_5_04_0"].geometry}
              material={materials.material_3}
              position={[0, 67.741, -30.885]}
            />
          </group>
          <mesh
            geometry={nodes.base_4_04_0.geometry}
            material={materials.material_3}
            position={[0, -99.236, -0.019]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/trash_can_recycle_bin_16mb_4part.glb");