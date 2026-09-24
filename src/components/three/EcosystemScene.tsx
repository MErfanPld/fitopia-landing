"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Text } from "@react-three/drei";
import * as THREE from "three";

const sports = [
  { label: "بدنسازی", angle: 0 },
  { label: "کراس‌فیت", angle: 60 },
  { label: "بوکس", angle: 120 },
  { label: "MMA", angle: 180 },
  { label: "یوگا", angle: 240 },
  { label: "TRX", angle: 300 },
];

function OrbitingIcon({
  label,
  angle,
  radius = 2.4,
}: {
  label: string;
  angle: number;
  radius?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const rad = (angle * Math.PI) / 180;

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime() * 0.15;
    const a = rad + t;
    ref.current.position.x = Math.cos(a) * radius;
    ref.current.position.z = Math.sin(a) * radius;
    ref.current.position.y = Math.sin(t * 2 + rad) * 0.25;
  });

  return (
    <group ref={ref}>
      <Float speed={2} floatIntensity={0.3}>
        <mesh>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial
            color="#FF6A00"
            emissive="#FF6A00"
            emissiveIntensity={0.4}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
        <Text
          position={[0, -0.4, 0]}
          fontSize={0.16}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.2}
        >
          {label}
        </Text>
      </Float>
    </group>
  );
}

function CentralSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <Sphere ref={ref} args={[0.7, 32, 32]}>
      <meshStandardMaterial
        color="#FF6A00"
        emissive="#FF6A00"
        emissiveIntensity={0.5}
        metalness={0.7}
        roughness={0.25}
      />
    </Sphere>
  );
}

function OrbitRing() {
  const geometry = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * 2.4, 0, Math.sin(a) * 2.4));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#FF6A00" transparent opacity={0.25} />
    </line>
  );
}

export function EcosystemScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 2]} intensity={1} />
        <pointLight position={[0, 0, 0]} intensity={1.2} color="#FF6A00" />
        <Suspense fallback={null}>
          <CentralSphere />
          <OrbitRing />
          {sports.map((s) => (
            <OrbitingIcon key={s.label} label={s.label} angle={s.angle} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
