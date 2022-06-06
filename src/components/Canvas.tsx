import { Canvas } from "@react-three/fiber"
import { FC, useEffect } from "react"
import { Plane } from "./Plane"

type Props = {
    className?: string,
    index: number
}

export const ThreeCanvas:FC<Props> = ({ className, index })=>{

    return (
        <div className={className}>
            <Canvas
                dpr={[1,2]}
            >
                <ambientLight intensity={ 0.1 } />
                <directionalLight position={[ 0, 0, 5 ]} />
                <Plane 
                    index={ index }
                    position={[ 0, 0, 0 ]}
                />
            </Canvas>
        </div>
    )
}