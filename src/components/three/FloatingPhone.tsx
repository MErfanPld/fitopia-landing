"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function PhoneModel({ screenIndex = 0 }: { screenIndex?: number }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.25) * 0.35;
    group.current.rotation.x = Math.sin(t * 0.18) * 0.08;
  });

  const screenColor = useMemo(() => {
    const colors = ["#1a1a22", "#12121a", "#0f0f16", "#15151e"];
    return colors[screenIndex % colors.length];
  }, [screenIndex]);

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={group} position={[0, 0, 0]} scale={1.15}>
        <RoundedBox args={[1.4, 2.8, 0.12]} radius={0.12} smoothness={4}>
          <meshStandardMaterial color="#1a1a1f" metalness={0.85} roughness={0.2} />
        </RoundedBox>

        <RoundedBox
          args={[1.25, 2.55, 0.02]}
          radius={0.08}
          smoothness={4}
          position={[0, 0, 0.07]}
        >
          <meshStandardMaterial
            color={screenColor}
            emissive={screenColor}
            emissiveIntensity={0.15}
            metalness={0.1}
            roughness={0.4}
          />
        </RoundedBox>

        <mesh position={[0, 1.15, 0.08]}>
          <boxGeometry args={[0.35, 0.06, 0.01]} />
          <meshStandardMaterial color="#0a0a0c" />
        </mesh>

        <mesh position={[0, 0.85, 0.09]}>
          <planeGeometry args={[0.9, 0.08]} />
          <meshBasicMaterial color="#FF6A00" transparent opacity={0.9} />
        </mesh>

        {[-0.2, -0.55, -0.9].map((y, i) => (
          <mesh key={i} position={[0, y, 0.09]}>
            <planeGeometry args={[0.95, 0.28]} />
            <meshBasicMaterial color="#22222c" transparent opacity={0.85} />
          </mesh>
        ))}

        <mesh position={[-0.72, 0.4, 0]}>
          <boxGeometry args={[0.03, 0.25, 0.04]} />
          <meshStandardMaterial color="#2a2a30" metalness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

function Particles({ count = 60 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#FF6A00"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function FloatingPhoneScene({ screenIndex = 0 }: { screenIndex?: number }) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 6, 5]} intensity={1.2} />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#FF6A00" />
        <pointLight position={[0, 0, 3]} intensity={0.6} color="#FF6A00" />

        <Suspense fallback={null}>
          <PhoneModel screenIndex={screenIndex} />
          <Particles />
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.35}
            scale={8}
            blur={2.5}
            far={4}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
