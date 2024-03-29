import { useBox } from '@react-three/cannon'
import { Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useState } from 'react'
import { TextureLoader } from 'three'
import { Building, BuildingNormal, BuildingRoughness } from '../assets'

export const BoxIntance = (props: any) => {
  const [color, setColor] = useState(Math.random() * 0xffffff)
  const [ref] = useBox<any>(() => ({
    mass: 500, 
    position: [0, 0, 0], 
    rotation: [0, 0, 0],
    onCollide: () => setColor(Math.random() * 0xffffff),
    ...props 
  }))
  const [buildingBase, buildingNormal, buildingRoughness] = useLoader(TextureLoader, [Building, BuildingNormal, BuildingRoughness])
  const fixPosition = (box: number, boundary: number) => {
    return (
      boundary / 2 -
      box / 2 -
      (boundary - box) * (Math.round(Math.random() * 100) / 100)
    )
  }

  return (
    <mesh receiveShadow castShadow ref={ref} position={[fixPosition(1, 30), 0, fixPosition(1, 30)]} scale={[2,2,2]}>
      <boxGeometry />
      <meshStandardMaterial color={color} map={buildingBase} normalMap={buildingNormal} roughnessMap={buildingRoughness} />
      <Text
        scale={[.2, .2, .2]}
        position={[0,0,0]}
      >
        {(Math.random() * 0xffffff).toString().split(".")[0]}
      </Text>
    </mesh>
        
  )
}