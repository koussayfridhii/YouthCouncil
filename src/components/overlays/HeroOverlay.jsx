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
        className={`w-screen absolute top-full flex items-center justify-center flex-col`}
        style={{ height: "300dvh" }}
      >
        <h1 className="text-center text-red-700 text-5xl font-bold">
          Youth Council
        </h1>
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
          bibendum felis, at ultricies lectus. Donec non orci ut urna dictum
          pharetra. Donec vitae tristique est, at maximus arcu. Donec non mauris
          et felis bibendum consectetur.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Scroll>
  );
}
