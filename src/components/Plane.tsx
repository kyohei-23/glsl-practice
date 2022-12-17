import vertex from '../shader/vertex.vert?raw'
import fragment from '../shader/fragment.frag?raw'
import { FC, useEffect, useMemo, useRef } from 'react'
import { MeshProps, useThree } from '@react-three/fiber'
import { Vector2, Texture, ShaderMaterial } from 'three'
import { useTexture } from '@react-three/drei'
import gsap from 'gsap'



export const Plane:FC<MeshProps & { index: number }> =  props =>{
    const { index } = props
    
    const textures = useTexture([
        'https://source.unsplash.com/ofMlR_YQIfs',
        'https://source.unsplash.com/VwtWZzAxNBk',
        'https://source.unsplash.com/F1tIyqDysbs',
    ])

    const textureRef = useRef<ShaderMaterial>(null!)

    const uniform = useMemo(()=>({
        u_time: { value: 0.0 },
        u_mouse: { value: new Vector2(0, 0) },
        u_dist: { value: 0.0 },
        u_texture: { value: textures.at(index) },
        u_texture_old: { value: textures.at(0) },
        u_progress: { value: 0.0 }
    })
    , [index])

    const size = useThree(({size})=>size)
    
    const center = {
        x: size.width / 2,
        y: size.height / 2
    }

    useEffect(()=>{
        textureRef.current.uniformsNeedUpdate = true
        window.addEventListener('mousemove', e=>{
            uniform.u_dist.value = e.movementY * .001
            const distX = ( e.clientX - center.x ) / center.x
            const distY = ( e.clientY - center.y ) * -1 / center.y
            uniform.u_mouse.value = new Vector2( distX, distY)
            
        })
        const liArr = document.querySelectorAll('li')
        liArr.forEach((li, idx)=>{
            li.addEventListener('mouseover',()=>{
                uniform.u_texture_old.value = uniform.u_texture.value
                uniform.u_texture.value = textures.at(idx)
                gsap.fromTo(uniform.u_progress, {
                    value: 0.0
                },
                {
                    value: 1.0,
                    duration: .3,
                    ease: "power2.ease"
                })
            })
        })
    },[])

    useEffect(()=>{
        textureRef.current.needsUpdate = true
        uniform.u_texture = { value: textures.at(index) }        
    },[index])


    return (
        <mesh
            {...props}
        >
            <planeGeometry
                args={[1.618 * 3, 1 * 3, 16, 16]}
            />
            <shaderMaterial
                attach={"material"}
                ref={ textureRef }
                uniforms={ uniform }
                vertexShader={ vertex }
                fragmentShader={ fragment }
                uniformsNeedUpdate={ true }
            />
        </mesh>
    )
}