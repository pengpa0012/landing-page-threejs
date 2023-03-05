import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export const Mesh = (props: any) => {
  const mesh = useRef()
  
  return (
   
    <Canvas style={{ height: 600, background: "#000" }}>
      <mesh
        {...props}
        ref={mesh}>
        {props.component}
        <ambientLight intensity={.05} />
        <pointLight position={[10, 0, 7]} />
        <OrbitControls autoRotate enableRotate={false} enableZoom={false} />
      </mesh>
    </Canvas>
  )
}