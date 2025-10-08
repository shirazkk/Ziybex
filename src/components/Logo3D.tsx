// import { Canvas } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
// import { Suspense } from "react";

// function LogoModel() {
//   // ✅ Use your hosted Vercel Blob URL here
//   const { scene } = useGLTF(
//     "https://mkvt5vvvhjh9ofgz.public.blob.vercel-storage.com/ziybex_3d_logo.glb"
//   );
//   return <primitive object={scene} scale={2.6} />;
// }

// export default function Logo3D() {
//   return (
//     <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
//       <Canvas
//         camera={{ position: [0, 0, 5], fov: 50 }}
//         style={{ background: "transparent" }}
//       >
//         <Suspense fallback={null}>
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[10, 10, 5]} intensity={1} />
//           <LogoModel />
//           <OrbitControls
//             enableZoom={false}
//             enablePan={false}
//             autoRotate
//             autoRotateSpeed={1}
//           />
//           <Environment preset="studio" />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }

// // ✅ Preload your hosted file (for faster caching)
// useGLTF.preload(
//   "https://mkvt5vvvhjh9ofgz.public.blob.vercel-storage.com/ziybex_3d_logo.glb"
// );
