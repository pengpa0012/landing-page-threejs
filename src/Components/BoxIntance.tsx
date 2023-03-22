import { useBox } from '@react-three/cannon'
import { Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'
import { Building, BuildingNormal, BuildingRoughness } from '../assets'

export const BoxIntance = (props: any) => {
  const [ref] = useBox<any>(() => ({ mass: 100, position: [0, 0, 0], rotation: [0.4, 0.2, 0.5], ...props }))
  const [buildingBase, buildingNormal, buildingRoughness] = useLoader(TextureLoader, [Building, BuildingNormal, BuildingRoughness])
  const fixPosition = (box: number, boundary: number) => {
    return (
      boundary / 2 -
      box / 2 -
      (boundary - box) * (Math.round(Math.random() * 100) / 100)
    )
  }

  return (
    <>
      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((mesh, i) => (
          <mesh receiveShadow castShadow key={i} ref={ref} position={[fixPosition(1, 30), .5, fixPosition(1, 30)]} scale={[Math.floor(Math.random() * 3) + 1,Math.floor(Math.random() * 3) + 1,  1]}>
            <boxGeometry />
            <meshStandardMaterial color={Math.random() * 0xffffff} map={buildingBase} normalMap={buildingNormal} roughnessMap={buildingRoughness} />
            <Text
              scale={[.2, .2, .2]}
              position={[0,0,0]}
            >
              {(Math.random() * 0xffffff).toString().split(".")[0]}
            </Text>
          </mesh>
        ))
      }
    </>
  )
}