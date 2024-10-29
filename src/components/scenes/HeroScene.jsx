/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  ScrollControls,
  Float,
  Environment,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import CanvasLoader from "../Loader";
import * as Three from "three";
import { Depth, LayerMaterial, Noise } from "lamina";
import HeroNature from "../canvas/Essence_of_nature";
import StarsCanvas from "../canvas/Stars";
import Birds from "../canvas/Birds";
import HeroOverlay from "../overlays/HeroOverlay";
import People from "../canvas/People";

const BG_SPEED = 0.4;

const Background = () => {
  const bgRef = useRef();
  useFrame((_state, delta) => {
    if (bgRef.current) {
      bgRef.current.rotation.x += delta * BG_SPEED;
      bgRef.current.rotation.y += delta * BG_SPEED;
      bgRef.current.rotation.z += delta * BG_SPEED;
    }
  });
  return (
    <mesh scale={100} ref={bgRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={Three.BackSide}>
        <Depth
          colorA={"#87CEEB"}
          colorB={"#040720"}
          alpha={1}
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={100}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.3}
        />
      </LayerMaterial>
    </mesh>
  );
};

function HeroScene() {
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
      <div className="flex relative h-dvh w-full">
        <Canvas
          shadows={true}
          className="overflow-visible w-full scroll"
          camera={{ position: [-10, 16, 50], fov: 5 }}
        >
          <Environment preset="sunset" />
          <Suspense fallback={<CanvasLoader />}>
            <ScrollControls pages={2} damping={0.25}>
              <Background />
              <StarsCanvas />
              <Float floatIntensity={1.5} speed={1}>
                {!isMobile && (
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 6}
                  />
                )}
                <People isMobile={isMobile} />
                <Birds isMobile={isMobile} />
                <HeroNature isMobile={isMobile} />
                <ContactShadows position={[0, -1.7, 0]} />
              </Float>
              <HeroOverlay />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default HeroScene;
