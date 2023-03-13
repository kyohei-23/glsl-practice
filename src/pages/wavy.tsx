import { useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { FC } from "react";
import vertexShader from '/src/shader/wavy.vert?raw'
import fragmentShader from '/src/shader/wavy.frag?raw'

const Plane:FC = () => {
  const { clock } = useThree()
  const texture = useTexture('https://source.unsplash.com/F1tIyqDysbs')
  
  const uniform = {
    u_time:{ value: clock.getElapsedTime() },
    u_texture: {value: texture}
  }

  useFrame(({clock})=>{
    uniform.u_time.value = clock.getElapsedTime()
  })



  return (
    <mesh
      position={[0, 0, 0]}
    >
      <planeGeometry 
        args={[1.618 * 3, 1 * 3, 16, 16]}
      />
      <shaderMaterial
        attach={"material"}
        uniforms={ uniform }
        vertexShader={ vertexShader }
        fragmentShader={ fragmentShader }
        uniformsNeedUpdate={ true }
      />
    </mesh>
  )
}

export const Wavy:FC = () => {
  return (
    <div className={"h-screen w-full"}>
      <Canvas dpr={[1,2]}>
        <ambientLight intensity={ 0.1 } />
        <directionalLight position={[ 0, 0, 5 ]} />
        <Plane />
      </Canvas>
    </div>
  )
}
