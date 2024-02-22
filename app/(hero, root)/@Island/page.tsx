"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Stage,
  useFBX,
  useHelper,
} from "@react-three/drei";
import { JSX, Suspense, useRef } from "react";
import { Loader } from "../_components/Loader";

const Scene = (
  props:
    | JSX.IntrinsicAttributes
    | { object: object }
    | {
        [properties: string]: any;
      }
) => {
  const fbx = useFBX("/Model.fbx");
  const ref = useRef<THREE.Object3D>(null); // Add type annotation to useRef
  useFrame((_, delta) => (ref.current!.rotation.y += delta * 0.2)); // Add type assertion to ensure ref.current is not null
  return (
    <primitive
      {...props}
      ref={ref}
      object={fbx}
      scale={0.005}
      position={[0, -1.3, 0]}
    />
  );
};

export default function IslandPage() {
  return (
    <>
      <Canvas camera={{ position: [6, 2.5, 5], fov: 25 }} frameloop="always">
        <Suspense fallback={<Loader />}>
          <Stage shadows={false} adjustCamera={1.3}>
            <ambientLight intensity={0.7} />
            <directionalLight color="white" position={[1, 1, 1]} />
            <directionalLight color="white" position={[-1, -1, -1]} />
            <Scene />
            <OrbitControls />
          </Stage>
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
}
