/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 .\public\assets\models\birds.glb 
Author: Zacxophone (https://sketchfab.com/Zacxophone)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/birds-3a9bb97be78944f9bffc23fb25c2154e
Title: Birds
*/

import React, { useEffect, useLayoutEffect } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import gsap from "gsap";
import PropTypes from "prop-types";

Birds.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default function Birds({ isMobile, ...props }) {
  const group = React.useRef();
  const tl = React.useRef();
  const { scene, animations } = useGLTF("./assets/models/birds.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions[names[0]];
    action?.reset()?.fadeIn(0.5)?.play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [actions, names]);
  const scroll = useScroll();
  useFrame(() => {
    tl.current.seek(scroll?.offset * tl.current.duration());
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // First two animations simultaneous
    tl.current.to(group.current.position, { x: 0, y: 1, z: 3, duration: 2 });
    tl.current.to(
      group.current.scale,
      { x: 1.5, y: 1.5, z: 1.5, duration: 2 },
      "<"
    );
    tl.current.to(
      group.current.rotation,
      { x: 0, y: -3, z: 0, duration: 2 },
      "<"
    );

    // Second two animations simultaneous
    tl.current.to(group.current.position, { x: 4, y: 2, z: 0, duration: 2 });
    tl.current.to(
      group.current.scale,
      { x: 0.5, y: 0.5, z: 0.5, duration: 2 },
      "<"
    );
    tl.current.to(
      group.current.rotation,
      { x: 0, y: -1.57, z: 0, duration: 2 },
      "<"
    );
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={isMobile ? 0.2 : 0.5}
      position={[-3, 2, 0]}
      rotation={[0, -2.35, 0]}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.021}
        >
          <group
            name="caa1de82125e43cab16cdc38a1378805fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane"
                  position={[0.013, -11.995, -9.062]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={10}
                />
                <group
                  name="Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={10}
                >
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_8"
                      position={[0.013, -11.995, -9.062]}
                      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                      scale={10}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      color="#DBE9f4"
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials["Material.001"]}
                      skeleton={nodes.Object_10.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Plane001"
                  position={[27.963, -10.427, 20.368]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={9.562}
                />
                <group
                  name="Armature001"
                  position={[27.95, 1.043, 29.034]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={9.562}
                >
                  <group name="Object_22">
                    <primitive object={nodes._rootJoint_1} />
                    <group
                      name="Object_24"
                      position={[27.963, -10.427, 20.368]}
                      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                      scale={9.562}
                    />
                    <skinnedMesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      color="#DBE9f4"
                      skeleton={nodes.Object_25.skeleton}
                    />
                    <skinnedMesh
                      name="Object_26"
                      geometry={nodes.Object_26.geometry}
                      material={materials["Material.001"]}
                      skeleton={nodes.Object_26.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Plane002"
                  position={[-32.582, -13.038, 34.371]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={10}
                />
                <group
                  name="Armature002"
                  position={[-32.595, -1.043, 43.433]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={10}
                >
                  <group name="Object_38">
                    <primitive object={nodes._rootJoint_2} />
                    <group
                      name="Object_40"
                      position={[-32.582, -13.038, 34.371]}
                      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                      scale={10}
                    />
                    <skinnedMesh
                      name="Object_41"
                      geometry={nodes.Object_41.geometry}
                      color="#DBE9f4"
                      skeleton={nodes.Object_41.skeleton}
                    />
                    <skinnedMesh
                      name="Object_42"
                      geometry={nodes.Object_42.geometry}
                      material={materials["Material.001"]}
                      skeleton={nodes.Object_42.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Plane003"
                  position={[37.88, -14.187, 65.866]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={10}
                />
                <group
                  name="Armature003"
                  position={[37.867, -2.192, 74.928]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={10}
                >
                  <group name="Object_54">
                    <primitive object={nodes._rootJoint_3} />
                    <group
                      name="Object_56"
                      position={[37.88, -14.187, 65.866]}
                      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                      scale={10}
                    />
                    <skinnedMesh
                      name="Object_57"
                      geometry={nodes.Object_57.geometry}
                      color="#DBE9f4"
                      skeleton={nodes.Object_57.skeleton}
                    />
                    <skinnedMesh
                      name="Object_58"
                      geometry={nodes.Object_58.geometry}
                      material={materials["Material.001"]}
                      skeleton={nodes.Object_58.skeleton}
                    />
                  </group>
                </group>
                <group
                  name="Plane004"
                  position={[-39.023, -7.775, 87.42]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={8.298}
                />
                <group
                  name="Armature004"
                  position={[-39.034, 2.179, 94.94]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={8.298}
                >
                  <group name="Object_70">
                    <primitive object={nodes._rootJoint_4} />
                    <group
                      name="Object_72"
                      position={[-39.023, -7.775, 87.42]}
                      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                      scale={8.298}
                    />
                    <skinnedMesh
                      name="Object_73"
                      geometry={nodes.Object_73.geometry}
                      color="#DBE9f4"
                      skeleton={nodes.Object_73.skeleton}
                    />
                    <skinnedMesh
                      name="Object_74"
                      geometry={nodes.Object_74.geometry}
                      material={materials["Material.001"]}
                      skeleton={nodes.Object_74.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/birds.glb");
