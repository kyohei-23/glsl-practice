import { Canvas} from "@react-three/fiber";
import { FC } from "react";
import vertexShader from '/src/shader/wavy.vert?raw'
import fragmentShader from '/src/shader/wavy.frag?raw'
import { Container } from '../components/Container';
import { Plane } from "../components/webgl/Plane";

export const Wavy:FC = () => {
  return (
    <Container>
      <Canvas dpr={[1,2]}>
        <ambientLight intensity={ 0.1 } />
        <directionalLight position={[ 0, 0, 5 ]} />
        <Plane
          vertexShader={ vertexShader }
          fragmentShader={ fragmentShader }
        />
      </Canvas>
    </Container>
  )
}
