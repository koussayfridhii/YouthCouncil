/* eslint-disable react/no-unknown-property */

import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  Text,
  Plane,
  MeshReflectorMaterial,
  Environment,
} from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";
import Recycle from "./Recycle";

export default function TropicalIsland(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF("./assets/models/tropical_island.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions[names[0]];
    action?.reset()?.fadeIn(0.5)?.play();
    action.setLoop(THREE.LoopRepeat); // Set the animation to loop indefinitely

    return () => {
      action.fadeOut(0.5);
    };
  }, [actions, names]);
  return (
    <>
      <group position={[-10, 1, 1]}>
        {/* Background Plane */}
        <Environment preset="sunset" />
        <Plane args={[12, 10]} position={[0, 1, -0.2]} rotation={[0, 0, 0]}>
          <MeshReflectorMaterial
            color="#ffffff"
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={30}
            roughness={0}
            depthScale={1}
            minDepthThreshold={0.9}
            maxDepthThreshold={1}
            reflectorOffset={1}
          />
        </Plane>
        <Text
          fontSize={0.3}
          color="#5D5700"
          fontWeight="bold"
          position={[0, 3, 0]}
        >
          DROITS DES GÉNÉRATIONS FUTURES
        </Text>
        <Text
          fontSize={0.25}
          color="black"
          position={[-5.5, 2.5, 0]}
          anchorX="left"
          anchorY="middle"
        >
          • La conservation de ce qui existe déjà du patrimoine culturel
          matériel et immatériel.
        </Text>
        <Text
          fontSize={0.25}
          color="black"
          position={[-5.5, 2, 0]}
          anchorX="left"
          anchorY="middle"
        >
          • La rationalisation de l’utilisation et de la gestion des ressources
          naturelles exploitées
        </Text>
        <Text
          fontSize={0.25}
          color="black"
          position={[-5.3, 1.5, 0]}
          anchorX="left"
          anchorY="middle"
        >
          , notamment l’eau, le sol, l’énergie et la diversité biologique, y
          compris la
        </Text>
        <Text
          fontSize={0.25}
          color="black"
          position={[-5.5, 1, 0]}
          anchorX="left"
          anchorY="middle"
        >
          • L’abstention de s’emparer de toutes les ressources naturelles et de
          les dilapider.
        </Text>
        <Text
          fontSize={0.25}
          color="black"
          position={[-5.5, 0.5, 0]}
          anchorX="left"
          anchorY="middle"
        >
          • Le développement des ressources existantes en recherchant de
          nouvelles ressources
        </Text>
        <Text
          fontSize={0.25}
          color="black"
          position={[-5.3, 0, 0]}
          anchorX="left"
          anchorY="middle"
        >
          pour les générations futures
        </Text>
      </group>
      <Recycle />
      <group
        ref={group}
        {...props}
        dispose={null}
        position={[0, 0, -4]}
        rotation={[0.2, 3.1, 0]}
        onDoubleClick={() => {
          props.active === "Ecology"
            ? props.setActive(null)
            : props.setActive("Ecology");
        }}
      >
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group
                  name="_15cf_Var2_LOD0_0"
                  position={[3.492, -0.398, 1.482]}
                  rotation={[0.053, -0.004, -0.111]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_4"
                    geometry={nodes.Object_4.geometry}
                    material={materials.Cat_Palm}
                  />
                </group>
                <group
                  name="_18f6_Var1_LOD0_1"
                  position={[-4.135, -0.127, 0.833]}
                  rotation={[-0.014, -0.002, 0.105]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.Areca_Palm}
                  />
                </group>
                <group
                  name="_1ffc_Var3_LOD0_2"
                  position={[2.461, -0.034, -1.376]}
                  rotation={[-0.046, 0.882, -0.101]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Areca_Palm}
                  />
                </group>
                <group
                  name="_2688_Var3_LOD0_3"
                  position={[2.128, -0.253, 1.614]}
                  rotation={[0.054, 0, -0.111]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.Cat_Palm}
                  />
                </group>
                <group
                  name="_3b4f_Var2_LOD0_4"
                  position={[-1.028, 0.078, 2.394]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Tropical_Palm}
                  />
                </group>
                <group
                  name="_7303_Var2_LOD0_5"
                  position={[1.802, -0.287, 2.491]}
                  rotation={[0.132, -0.013, -0.135]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.Areca_Palm}
                  />
                </group>
                <group
                  name="_89e2_Var5_LOD0_6"
                  position={[-3.59, -0.085, -0.283]}
                  rotation={[-0.014, -0.002, 0.105]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.Areca_Palm}
                  />
                </group>
                <group
                  name="_8b2b_Var4_LOD0_7"
                  position={[2.423, -0.143, 0.464]}
                  rotation={[0.054, 0, -0.111]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.Areca_Palm}
                  />
                </group>
                <group
                  name="_a2c9_Var3_LOD0_8"
                  position={[2.602, -0.299, 1.901]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_20"
                    geometry={nodes.Object_20.geometry}
                    material={materials.Tropical_Palm}
                  />
                </group>
                <group
                  name="_e0f8_Var1_LOD0_9"
                  position={[-2.797, 0.038, -1.87]}
                  rotation={[Math.PI / 2, 0, -1.124]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials.Tropical_Palm}
                  />
                </group>
                <group
                  name="_e1f4_Var1_LOD0_10"
                  position={[-4.374, -0.13, -0.19]}
                  rotation={[0.091, 0.002, 0.028]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_24"
                    geometry={nodes.Object_24.geometry}
                    material={materials.Cat_Palm}
                  />
                </group>
                <group
                  name="_e74b_Var4_LOD0_11"
                  position={[1.968, 0.046, -2.182]}
                  rotation={[0.016, 0.669, -0.027]}
                  scale={0.01}
                >
                  <mesh
                    name="Object_26"
                    geometry={nodes.Object_26.geometry}
                    material={materials.Cat_Palm}
                  />
                </group>
                <group name="Armature_40" position={[-0.28, 0.622, 0]}>
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name="Spiral002_39" />
                    <skinnedMesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials["Material.001"]}
                      skeleton={nodes.Object_31.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Aset_other__M_ufhsea0fa_LOD2_41"
                  position={[-0.023, 0.053, 1.664]}
                  rotation={[1.631, -0.021, -1.584]}
                >
                  <mesh
                    name="Object_60"
                    geometry={nodes.Object_60.geometry}
                    material={materials.Treibholz}
                  />
                </group>
                <group
                  name="Aset_other_forest_root_M_ufhrfjefa_LOD2_42"
                  position={[-0.336, 0.006, -1.974]}
                >
                  <mesh
                    name="Object_62"
                    geometry={nodes.Object_62.geometry}
                    material={materials.Root}
                  />
                </group>
                <group
                  name="Aset_rock_assembly_M_udxkec2fa_LOD2_43"
                  position={[1.64, -2.196, 12.346]}
                >
                  <mesh
                    name="Object_64"
                    geometry={nodes.Object_64.geometry}
                    material={materials.RocksBig}
                  />
                </group>
                <group name="Beach_44" position={[-0.28, 0, 0]}>
                  <mesh
                    name="Object_66"
                    geometry={nodes.Object_66.geometry}
                    material={materials.BeachBaked}
                  />
                </group>
                <group
                  name="Palme_45"
                  position={[2.076, 0.016, -1.778]}
                  rotation={[1.544, -0.079, -2.333]}
                >
                  <mesh
                    name="Object_68"
                    geometry={nodes.Object_68.geometry}
                    material={materials.Palme}
                  />
                </group>
                <group
                  name="Plane024_46"
                  position={[2.844, 3.561, -2.033]}
                  rotation={[-3.137, -0.584, -3.103]}
                >
                  <mesh
                    name="Object_70"
                    geometry={nodes.Object_70.geometry}
                    material={materials.Palme_Blaetter}
                  />
                </group>
                <group
                  name="RocksSmall_47"
                  position={[-11.774, -1.788, -7.852]}
                >
                  <mesh
                    name="Object_72"
                    geometry={nodes.Object_72.geometry}
                    material={materials.RocksSmall}
                  />
                </group>
                <group
                  name="Skybox_48"
                  position={[-0.019, -1.968, 0]}
                  rotation={[-Math.PI, -0.788, -Math.PI]}
                  scale={0.518}
                >
                  <mesh
                    name="Object_74"
                    geometry={nodes.Object_74.geometry}
                    material={materials["Skybox.001"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("./assets/models/tropical_island.glb");
