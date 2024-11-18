/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useRef, useState } from "react";
import {
  CameraControls,
  Environment,
  MeshPortalMaterial,
  RoundedBox,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import TropicalIsland from "../canvas/TropicalIsland";
import TeachersLife from "../canvas/TeachersLife";
//TODO:  and complete the logic to portal activation and desactivation "camer look at , and fading in and out "
// TODO: complete the worlds
const TopicsScene = () => {
  const portalMaterial = useRef();
  const [active, setActive] = useState(null);
  const handleDoubleClick = (e) => {
    !active && setActive(e.eventObject?.name);
  };
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="bg-white relative text-black dark:bg-gray-800 dark:text-white m-0 p-0 w-full h-dvh">
      <div
        className={`flex relative h-dvh ${
          active ? "w-full" : isMobile ? "w-6/12" : "w-8/12"
        } mx-auto`}
      >
        <Canvas shadows={true} className=" w-full scroll mx-auto">
          <ambientLight intensity={1} />
          <CameraControls enableZoom={active} enablePan={false} makeDefault />
          <Suspense fallback={<CanvasLoader />}>
            <group position={[0, 0, 0]}>
              <Text
                // font="fonts/Caprasimo-Regular.ttf"
                fontSize={0.3}
                position={[0, -1.3, 0.051]}
                anchorY={"bottom"}
              >
                Ecology
                <meshBasicMaterial color={"red"} toneMapped={false} />
              </Text>
              <RoundedBox
                name={"Ecology"}
                args={[2, 3, 0.1]}
                // onDoubleClick={() => setActive(active === name ? null : name)}
                // onPointerEnter={() => setHovered(name)}
                // onPointerLeave={() => setHovered(null)}
                onDoubleClick={handleDoubleClick}
              >
                <MeshPortalMaterial
                  ref={portalMaterial}
                  side={THREE.DoubleSide}
                  blend={active === "Ecology" ? 1 : 0}
                >
                  <ambientLight intensity={1} />
                  <Environment preset="sunset" recieveShadow />
                  <TropicalIsland />
                </MeshPortalMaterial>
              </RoundedBox>
            </group>
            <group
              position={isMobile ? [0, 3.5, 0] : [-2.5, 0, 0.5]}
              rotation-y={isMobile ? 0 : Math.PI / 8}
            >
              <Text
                // font="fonts/Caprasimo-Regular.ttf"
                fontSize={0.3}
                position={[0, -1.3, 0.051]}
                anchorY={"bottom"}
              >
                Education
                <meshBasicMaterial color={"red"} toneMapped={false} />
              </Text>
              <RoundedBox
                name={"Education"}
                args={[2, 3, 0.1]}
                // onDoubleClick={() => setActive(active === name ? null : name)}
                // onPointerEnter={() => setHovered(name)}
                // onPointerLeave={() => setHovered(null)}
                onDoubleClick={handleDoubleClick}
              >
                <MeshPortalMaterial
                  ref={portalMaterial}
                  side={THREE.DoubleSide}
                  blend={active === "Education" ? 1 : 0}
                >
                  <ambientLight intensity={1} />
                  <TeachersLife />
                </MeshPortalMaterial>
              </RoundedBox>
            </group>
            <group
              position={isMobile ? [0, -3.5, 0] : [2.5, 0, 0.5]}
              rotation-y={isMobile ? 0 : -Math.PI / 8}
            >
              <Text
                // font="fonts/Caprasimo-Regular.ttf"
                fontSize={0.3}
                position={[0, -1.3, 0.051]}
                anchorY={"bottom"}
              >
                Rights
                <meshBasicMaterial color={"red"} toneMapped={false} />
              </Text>
              <RoundedBox
                name={"Rights"}
                args={[2, 3, 0.1]}
                // onDoubleClick={() => setActive(active === name ? null : name)}
                // onPointerEnter={() => setHovered(name)}
                // onPointerLeave={() => setHovered(null)}
                onDoubleClick={handleDoubleClick}
              >
                <MeshPortalMaterial
                  ref={portalMaterial}
                  side={THREE.DoubleSide}
                  blend={active === "Rights" ? 1 : 0}
                >
                  <ambientLight intensity={1} />
                  <Environment preset="sunset" recieveShadow />
                  <TropicalIsland />
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
