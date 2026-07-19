'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const YELLOW = '#f2b705';
const GREEN = '#1b7a4b';
const RED = '#d6402c';
const INK = '#161512';

type Atom = { pos: [number, number, number]; color: string; size: number };

// A hand-placed cluster — reads as a molecular model, not a random point cloud.
const atoms: Atom[] = [
  { pos: [0, 0, 0], color: INK, size: 0.52 },
  { pos: [1.5, 0.35, 0.2], color: RED, size: 0.4 },
  { pos: [-1.45, 0.5, -0.3], color: GREEN, size: 0.42 },
  { pos: [0.3, 1.55, -0.4], color: YELLOW, size: 0.38 },
  { pos: [-0.4, -1.5, 0.3], color: GREEN, size: 0.36 },
  { pos: [1.2, -1.2, -0.5], color: YELLOW, size: 0.3 },
  { pos: [-1.9, -0.8, 0.5], color: RED, size: 0.3 },
  { pos: [2.4, 1.2, -0.2], color: INK, size: 0.26 },
  { pos: [0.9, 2.4, 0.4], color: RED, size: 0.24 },
  { pos: [-2.3, 1.4, -0.4], color: YELLOW, size: 0.24 },
];

const bonds: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 5],
  [1, 7],
  [2, 6],
  [2, 9],
  [3, 8],
];

function Bond({ a, b }: { a: THREE.Vector3; b: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null);
  const { position, quaternion, length } = useMemo(() => {
    const dir = new THREE.Vector3().subVectors(b, a);
    const len = dir.length();
    const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    );
    return { position: mid, quaternion: quat, length: len };
  }, [a, b]);

  return (
    <mesh ref={ref} position={position} quaternion={quaternion}>
      <cylinderGeometry args={[0.035, 0.035, length, 12]} />
      <meshStandardMaterial color={INK} roughness={0.5} metalness={0.1} opacity={0.55} transparent />
    </mesh>
  );
}

function Structure({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const vecs = useMemo(() => atoms.map((a) => new THREE.Vector3(...a.pos)), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    const targetX = pointer.current.y * 0.35;
    const targetY = group.current.rotation.y + pointer.current.x * 0.0009;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
  });

  return (
    <group ref={group} scale={0.9}>
      {bonds.map(([i, j], k) => (
        <Bond key={k} a={vecs[i]} b={vecs[j]} />
      ))}
      {atoms.map((atom, i) => (
        <mesh key={i} position={atom.pos}>
          <icosahedronGeometry args={[atom.size, 3]} />
          <meshStandardMaterial
            color={atom.color}
            roughness={0.35}
            metalness={0.15}
            emissive={atom.color}
            emissiveIntensity={0.06}
          />
        </mesh>
      ))}
    </group>
  );
}

function Rig({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.current.x / 120 - camera.position.x) * 0.04;
    camera.position.y += (-pointer.current.y / 120 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Molecule() {
  const pointer = useRef({ x: 0, y: 0 });

  return (
    <div
      className="h-full w-full"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointer.current.x = e.clientX - r.left - r.width / 2;
        pointer.current.y = e.clientY - r.top - r.height / 2;
      }}
      onPointerLeave={() => {
        pointer.current.x = 0;
        pointer.current.y = 0;
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 9.6], fov: 40 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[4, 6, 5]} intensity={1.5} />
        <directionalLight position={[-5, -3, -4]} intensity={0.5} color={YELLOW} />
        <Structure pointer={pointer} />
        <Rig pointer={pointer} />
      </Canvas>
    </div>
  );
}
