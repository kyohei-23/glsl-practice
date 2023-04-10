import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { Container } from "../components/Container";
import { Plane } from "../components/webgl/Plane";
import fragmentShader from "../shader/wavy.frag?raw";
import vertexShader from "../shader/diagonal.vert?raw"

export const WavyDiagonal:FC = () => {
  return (
    <Container>
      <Canvas>
        <Plane 
          fragmentShader={fragmentShader}
          vertexShader={vertexShader} 
        />
      </Canvas>
    </Container>
  )
}