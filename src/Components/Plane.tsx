import { usePlane } from '@react-three/cannon';
import React from 'react'
import { DoubleSide } from "three";

export const Plane = (props: any) => {
  const [ref] = usePlane<any>(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="red"/>
    </mesh>
  )
}
