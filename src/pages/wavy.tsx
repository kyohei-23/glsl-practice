import { Canvas } from "@react-three/fiber";
import { FC } from "react";

export const Wavy:FC = () => {
  return (
    <div className={"h-screen w-full"}>
      <Canvas>
        <ambientLight intensity={ 0.1 } />
        <directionalLight position={[ 0, 0, 5 ]} />
        <mesh
          position={[0, 0, 0]}
        >
          <planeGeometry 
            args={[1.618 * 3, 1 * 3, 16, 16]}
          />
          <shaderMaterial
            wireframe={true}
          />
        </mesh>
      </Canvas>
    </div>
  )
}