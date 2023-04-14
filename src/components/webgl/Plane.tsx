import { useTexture } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { FC } from "react";

type ShaderProps = Partial<{
  vertexShader: string;
  fragmentShader: string
}>

export const Plane:FC<ShaderProps> = ({
  vertexShader,
  fragmentShader
}) => {
  const texture = useTexture('https://source.unsplash.com/F1tIyqDysbs')
  
  const uniform = {
    u_time:{ value: 0},
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