import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroOverlay() {
  const scroll = useScroll();
  const overlayRef = useRef();
  const tl = useRef();

  useFrame(() => {
    tl.current.seek(scroll?.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(overlayRef.current, { opacity: 1 }, "start");
  });

  return (
    <Scroll html>
      <div
        ref={overlayRef}
        className="w-screen absolute top-full flex items-center justify-center flex-col"
        style={{ height: "300dvh" }}
      >
        <a
          href="#"
          className="group block max-w-md p-6 bg-indigo border-2 border-seaBreeze rounded-lg shadow hover:bg-seaBreeze hover:border-indigo duration-500"
        >
          <h5 className="mb-2 text-2xl font-poppins font-bold tracking-tight text-seaBreeze group-hover:text-indigo duration-500">
            Youth Council 2024
          </h5>
          <p className="font-normal text-gray-100 dark:text-gray-400">
            The Youth Council, created by Participate, is composed of 15 young
            individuals from Kasserine. It serves as a platform for these youths
            to voice their opinions, engage in civic activities, and influence
            local policies, aiming to foster leadership skills and empower the
            youth community.
          </p>
        </a>
      </div>
    </Scroll>
  );
}
