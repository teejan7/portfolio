"use client";

import { Float, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

const orbitPalette = ["#7dd3fc", "#38bdf8", "#67e8f9", "#fbbf24", "#fde68a"];

const OrbitalCore = () => {
  const coreRef = useRef<Mesh>(null);
  const shellRef = useRef<Mesh>(null);
  const ringRef = useRef<Group>(null);
  const nodesRef = useRef<Group>(null);

  const nodeConfigs = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => ({
        angle: (index / 6) * Math.PI * 2,
        radius: index % 2 === 0 ? 1.7 : 1.25,
        y: index % 2 === 0 ? 0.18 : -0.22,
        scale: index % 3 === 0 ? 0.15 : 0.11,
        color: orbitPalette[index % orbitPalette.length],
      })),
    [],
  );

  useFrame(({ clock }, delta) => {
    const elapsed = clock.getElapsedTime();

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.2;
      coreRef.current.rotation.y += delta * 0.45;
      coreRef.current.position.y = Math.sin(elapsed * 0.85) * 0.08;
    }

    if (shellRef.current) {
      shellRef.current.rotation.y -= delta * 0.2;
      shellRef.current.rotation.z += delta * 0.08;
      shellRef.current.position.y = Math.sin(elapsed * 0.85) * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.18;
      ringRef.current.rotation.x = Math.sin(elapsed * 0.25) * 0.1;
    }

    if (nodesRef.current) {
      nodesRef.current.rotation.y -= delta * 0.25;
      nodesRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[2.5, 2, 3]}
        intensity={1.2}
        color="#e0f2fe"
      />
      <pointLight
        position={[0, 0, 2.5]}
        intensity={18}
        color="#38bdf8"
        distance={7}
      />
      <pointLight
        position={[-2, -1, 1]}
        intensity={10}
        color="#f59e0b"
        distance={7}
      />

      <Stars
        radius={24}
        depth={18}
        count={1200}
        factor={3}
        saturation={0}
        fade
        speed={0.4}
      />
      <Sparkles
        count={85}
        scale={[5, 5, 3]}
        size={2}
        speed={0.35}
        color="#67e8f9"
        opacity={0.75}
      />

      <Float floatIntensity={1.2} rotationIntensity={0.45} speed={1.8}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.88, 4]} />
          <meshStandardMaterial
            color="#0ea5e9"
            emissive="#082f49"
            emissiveIntensity={1.7}
            metalness={0.55}
            roughness={0.15}
          />
        </mesh>
      </Float>

      <mesh ref={shellRef} scale={1.32}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#bae6fd"
          transparent
          opacity={0.14}
          wireframe
        />
      </mesh>

      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2.2, 0.32, 0]}>
          <torusGeometry args={[1.5, 0.035, 24, 220]} />
          <meshStandardMaterial color="#7dd3fc" transparent opacity={0.55} />
        </mesh>
        <mesh rotation={[0.95, 0.8, 0.32]}>
          <torusGeometry args={[1.08, 0.018, 16, 180]} />
          <meshStandardMaterial color="#fbbf24" transparent opacity={0.45} />
        </mesh>
      </group>

      <group ref={nodesRef}>
        {nodeConfigs.map(({ angle, radius, y, scale, color }, index) => (
          <Float
            key={`node-${index}`}
            speed={1.4 + index * 0.12}
            rotationIntensity={1.05}
            floatIntensity={1.1}
          >
            <mesh
              position={[Math.cos(angle) * radius, y, Math.sin(angle) * radius]}
              scale={scale}
            >
              <icosahedronGeometry args={[1, 1]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.7}
                metalness={0.4}
                roughness={0.18}
              />
            </mesh>
          </Float>
        ))}
      </group>
    </group>
  );
};

export const OrbitalScene = () => {
  return (
    <div className="scene-shell relative h-[380px] overflow-hidden rounded-[2rem] border border-white/10 sm:h-[460px] lg:h-[560px]">
      <div className="scan-beam" />
      <Canvas camera={{ position: [0, 0, 4.8], fov: 50 }} dpr={[1, 1.75]}>
        <Suspense fallback={null}>
          <OrbitalCore />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.45}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.4}
            maxPolarAngle={Math.PI / 1.65}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
