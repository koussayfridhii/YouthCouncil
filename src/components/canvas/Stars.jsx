/* eslint-disable react/no-unknown-property */
import { useState, useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useFrame } from "@react-three/fiber";

const Stars = (props) => {
  const ref = useRef();

  const [sphere] = useState(() => random.inSphere(new Float32Array( 50000), { radius: 10 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.02 }
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


export default Stars;