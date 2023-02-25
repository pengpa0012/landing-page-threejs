import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export const Box = (props: any) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshStandardMaterial />
    </mesh>
  )
}