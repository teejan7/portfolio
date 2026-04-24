"use client";

import { Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Group } from "three";

const ConstellationField = () => {
  const ref = useRef<Group>(null);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.01;
      ref.current.rotation.x += delta * 0.004;
    }
  });

  return (
    <group ref={ref}>
      <Stars
        radius={90}
        depth={50}
        count={4500}
        factor={4}
        saturation={0}
        fade
        speed={0.45}
      />
      <Sparkles
        count={160}
        scale={[25, 25, 12]}
        size={2.1}
        speed={0.18}
        color="#67e8f9"
        opacity={0.42}
      />
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="pointer-events-none fixed inset-0 -z-20">
    <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ConstellationField />
      </Suspense>
    </Canvas>
  </div>
);
