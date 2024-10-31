/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from "react";
import {
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import Disabled from "../canvas/Disabled";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import People from "../canvas/People";

const TopicsScene = (props) => {
  const portalMaterial = useRef();
  return (
    <div className="bg-white relative text-black dark:bg-gray-800 dark:text-white m-0 p-0 w-full h-dvh">
      <div className="flex relative h-dvh w-full">
        <Canvas shadows={true} className="overflow-visible w-full scroll">
          <ambientLight intensity={1} />
          <OrbitControls />
          <Suspense fallback={<CanvasLoader />}>
            <group {...props}>
              <Text
                // font="fonts/Caprasimo-Regular.ttf"
                fontSize={0.3}
                position={[0, -1.3, 0.051]}
                anchorY={"bottom"}
              >
                hello
                <meshBasicMaterial color={"red"} toneMapped={false} />
              </Text>
              <RoundedBox
                name={"hello"}
                args={[2, 3, 0.1]}
                // onDoubleClick={() => setActive(active === name ? null : name)}
                // onPointerEnter={() => setHovered(name)}
                // onPointerLeave={() => setHovered(null)}
              >
                <MeshPortalMaterial
                  ref={portalMaterial}
                  side={THREE.DoubleSide}
                  blend={1}
                >
                  <ambientLight intensity={1} />
                  <Environment
                    background
                    files={"./assets/images/belvedere_2k.hdr"}
                    ground={{ height: 5, radius: 60, scale: 170 }}
                    recieveShadow
                  />
                  {/* <Disabled position={[0, 0, 0]} /> */}
                  <People />
                  {/* <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh> */}
                </MeshPortalMaterial>
              </RoundedBox>
            </group>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default TopicsScene;
