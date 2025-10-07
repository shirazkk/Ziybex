"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

function LogoModel() {
  const { scene } = useGLTF("/ziybex_3d_logo.glb");
  return <primitive object={scene} scale={2.6} />;
}

export default function Logo3D() {
  return (
    <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <LogoModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload("/ziybex_3d_logo.glb");
