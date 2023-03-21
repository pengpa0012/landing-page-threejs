import { useBox } from '@react-three/cannon'
import { Text } from '@react-three/drei'
import React from 'react'

export const BoxIntance = (props: any) => {
  const [ref] = useBox<any>(() => ({ mass: 1, position: [0, 0, 0], rotation: [0.4, 0.2, 0.5], ...props }))
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
        [1,2,3,4,5,6,7,8,9,10].map((mesh, i) => (
          <mesh receiveShadow castShadow key={i} ref={ref} position={[fixPosition(1, 30), .5, fixPosition(1, 30)]} scale={[Math.floor(Math.random() * 3) + 1,Math.floor(Math.random() * 3) + 1,  1]}>
            <boxGeometry />
            <meshLambertMaterial color={Math.random() * 0xffffff} />
            <Text
              scale={[.2, .2, .2]}
              position={[0,1,0]}
            >
              {(Math.random() * 0xffffff).toString().split(".")[0]}
            </Text>
          </mesh>
        ))
      }
    </>
  )
}