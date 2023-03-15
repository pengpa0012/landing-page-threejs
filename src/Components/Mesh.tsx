import { animated } from "@react-spring/three"
import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useState } from "react"

export const Mesh = (props: any) => {
  const mesh = useRef<any>()
  const lightRef = useRef<any>()

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.y = a / 3;
  });

  return (
    <animated.mesh
      {...props}
      ref={mesh}>
      {props.component}
      <ambientLight intensity={.1} />
      <pointLight position={[10, 0, 7]} ref={lightRef} />
      {/* <OrbitControls autoRotate enableRotate={false} enableZoom={false} /> */}
    </animated.mesh>
  )
}