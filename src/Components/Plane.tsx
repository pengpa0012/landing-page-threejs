import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import React, { useState } from 'react'
import { DoubleSide, TextureLoader } from "three";
import { Floor, FloorNormal, FloorRoughness } from '../assets';

export const Plane = (props: any) => {
  const [ref] = usePlane<any>(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  const [floorBase, floorNormal, floorRoughness] = useLoader(TextureLoader, [Floor, FloorNormal, FloorRoughness])
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="red" map={floorBase} normalMap={floorNormal} roughnessMap={floorRoughness}/>
    </mesh>
  )
}
