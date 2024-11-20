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
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";

// components
import CanvasLoader from "../Loader";
import TropicalIsland from "../canvas/TropicalIsland";
import TeachersLife from "../canvas/TeachersLife";
// TODO: complete the worlds
const TopicsScene = () => {
  const [active, setActive] = useState(null);
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
          <TopicsSceneCanvas
            active={active}
            setActive={setActive}
            isMobile={isMobile}
          />
        </Canvas>
      </div>
    </div>
  );
};

const TopicsSceneCanvas = ({ active, setActive, isMobile }) => {
  const portalMaterialEcology = useRef();
  const portalMaterialEducation = useRef();
  const portalMaterialRights = useRef();
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);
  const handleDoubleClick = (e) => {
    let name = e.eventObject?.name;
    setActive((prev) => {
      return prev === name ? null : name;
    });
  };

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        -2.8,
        0,
        5.5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 0, 5, 0, 0, 0, true);
    }
  }, [active]);

  useFrame((_state, delta) => {
    // Determine if any portal is active
    // const worldOpen = active !== null; // Select the active portal material based on the active state
    // const activePortal =
    //   active === "Education"
    //     ? portalMaterialEducation
    //     : active === "Ecology"
    //     ? portalMaterialEcology
    //     : active === "Rights"
    //     ? portalMaterialRights
    //     : null;
    // if (activePortal && activePortal.current) {
    //   easing.damp(activePortal.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
    // }
    if (active === "Education") {
      easing.damp(portalMaterialEducation.current, "blend", 1, 0.2, delta);
    } else if (active === "Rights") {
      easing.damp(portalMaterialRights.current, "blend", 1, 0.2, delta);
    } else if (active === "Ecology") {
      easing.damp(portalMaterialEcology.current, "blend", 1, 0.2, delta);
    } else {
      easing.damp(portalMaterialEcology.current, "blend", 0, 0.2, delta);
      easing.damp(portalMaterialEducation.current, "blend", 0, 0.2, delta);
      easing.damp(portalMaterialRights.current, "blend", 0, 0.2, delta);
    }
  });
  return (
    <>
      <ambientLight intensity={1} />
      <CameraControls
        enableZoom={active}
        enablePan={false}
        makeDefault
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />
      <Suspense fallback={<CanvasLoader />}>
        <group position={[0, 0, 0]}>
          <Text fontSize={0.3} position={[0, -1.3, 0.051]} anchorY={"bottom"}>
            Ecology
            <meshBasicMaterial color={"red"} toneMapped={false} />
          </Text>
          <RoundedBox
            name={"Ecology"}
            args={[2, 3, 0.1]}
            onDoubleClick={handleDoubleClick}
          >
            <MeshPortalMaterial
              ref={portalMaterialEcology}
              side={THREE.DoubleSide}
              name={"Ecology"}
            >
              <ambientLight intensity={1} />
              <Environment preset="sunset" receiveShadow />
              <TropicalIsland setActive={setActive} active={active} />
            </MeshPortalMaterial>
          </RoundedBox>
        </group>
        <group
          position={isMobile ? [0, 3.5, 0] : [-2.5, 0, 0.5]}
          rotation-y={isMobile ? 0 : Math.PI / 8}
        >
          <Text fontSize={0.3} position={[0, -1.3, 0.051]} anchorY={"bottom"}>
            Education
            <meshBasicMaterial color={"red"} toneMapped={false} />
          </Text>
          <RoundedBox
            name={"Education"}
            args={[2, 3, 0.1]}
            onDoubleClick={handleDoubleClick}
          >
            <MeshPortalMaterial
              name={"Education"}
              ref={portalMaterialEducation}
              side={THREE.DoubleSide}
            >
              <ambientLight intensity={1} />
              <TeachersLife active={active} setActive={setActive} />
            </MeshPortalMaterial>
          </RoundedBox>
        </group>
        <group
          position={isMobile ? [0, -3.5, 0] : [2.5, 0, 0.5]}
          rotation-y={isMobile ? 0 : -Math.PI / 8}
        >
          <Text fontSize={0.3} position={[0, -1.3, 0.051]} anchorY={"bottom"}>
            Rights
            <meshBasicMaterial color={"red"} toneMapped={false} />
          </Text>
          <RoundedBox
            name={"Rights"}
            args={[2, 3, 0.1]}
            onDoubleClick={handleDoubleClick}
          >
            <MeshPortalMaterial
              name={"Rights"}
              ref={portalMaterialRights}
              side={THREE.DoubleSide}
            >
              <ambientLight intensity={1} />
              <Environment preset="sunset" receiveShadow />
              <TropicalIsland />
            </MeshPortalMaterial>
          </RoundedBox>
        </group>
      </Suspense>
    </>
  );
};

export default TopicsScene;
