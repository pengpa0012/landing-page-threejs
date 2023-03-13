import { animated } from "@react-spring/three"
import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export const Mesh = (props: any) => {
  const mesh = useRef()

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current!.rotation.y = a;
  });

  return (
    <animated.mesh
      {...props}
      ref={mesh}>
      {props.component}
      <ambientLight intensity={.1} />
      <pointLight position={[10, 0, 7]} />
      {/* <OrbitControls autoRotate enableRotate={false} enableZoom={false} /> */}
    </animated.mesh>
  )
}