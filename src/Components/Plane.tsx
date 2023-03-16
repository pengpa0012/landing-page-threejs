import React from 'react'
import { DoubleSide } from "three";

export const Plane = (props: any) => {
  return (
    <mesh {...props} receiveShadow>
      <planeGeometry />
      <meshStandardMaterial side={DoubleSide} />
    </mesh>
  )
}
