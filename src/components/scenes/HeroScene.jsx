import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  ScrollControls,
  Float,
  Cloud,
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

const BG_SPEED = 0.1;

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
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [orbitEnabled, setOrbitEnabled] = useState(false);
  const startYRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const handleTouchStart = (event) => {
    startYRef.current = event.touches[0].clientY;
    setScrollEnabled(true);
    setOrbitEnabled(false);
  };

  const handleTouchMove = (event) => {
    const currentY = event.touches[0].clientY;
    const diffY = Math.abs(currentY - startYRef.current);

    // Enable orbit only for non-scrolling gestures (horizontal or idle touches)
    if (diffY < 10) {
      setScrollEnabled(false);
      setOrbitEnabled(true);
    } else {
      setScrollEnabled(true);
      setOrbitEnabled(false);
    }
  };

  const handleTouchEnd = () => {
    setScrollEnabled(true);
    setOrbitEnabled(false);
  };

  return (
    <div
      className="bg-white relative text-black dark:bg-gray-800 dark:text-white m-0 p-0 w-full h-dvh"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex relative h-dvh w-full">
        <Canvas shadows={true} className="overflow-visible w-full scroll">
          <ambientLight intensity={1} />
          <Suspense fallback={<CanvasLoader />}>
            <ScrollControls pages={2} damping={0.25} enabled={scrollEnabled}>
              <Background />
              <StarsCanvas />
              <Float floatIntensity={1.8} speed={1.1}>
                <Cloud
                  speed={0.6}
                  width={500}
                  depth={7.5}
                  segments={80}
                  color={"#C4E9EC"}
                  fade={30}
                  opacity={0.8}
                  position={[0, 2, 0]}
                  castShadow={false}
                />
              </Float>
              <Float floatIntensity={1.5} speed={1}>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 6}
                  enabled={orbitEnabled}
                />
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
