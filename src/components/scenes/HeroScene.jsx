/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  ScrollControls,
  Float,
  Text,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { LayerMaterial, Noise, Depth } from "lamina";
import * as Three from "three";
import { useSpring, animated } from "@react-spring/three";
import CanvasLoader from "../Loader";
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

  const textRef = useRef();
  const props = useSpring({
    loop: { reverse: true },
    from: { position: [0, 0.5, 4] },
    to: { position: [0, 0.52, 4] },
    config: { duration: 1000 },
  });

  return (
    <div className="bg-white relative text-black dark:bg-gray-800 dark:text-white m-0 p-0 w-full h-dvh">
      <div className="flex relative h-dvh w-full">
        <Canvas shadows={true} className="overflow-visible w-full scroll">
          <ambientLight intensity={1} />
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
            <animated.mesh {...props} ref={textRef}>
              <Text
                color="white"
                fontSize={0.1}
                anchorX="center"
                anchorY="middle"
                font="./fonts/Pacifico-Regular.ttf"
              >
                Scroll Down
              </Text>
            </animated.mesh>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default HeroScene;
