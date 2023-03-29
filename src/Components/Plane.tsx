import { usePlane } from '@react-three/cannon';
import { MeshReflectorMaterial } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useState } from 'react'
import { DoubleSide, TextureLoader } from "three";
import { Floor, FloorNormal, FloorRoughness } from '../assets';

export const Plane = (props: any) => {
  const [ref] = usePlane<any>(() => ({ 
    type: "Static", 
    rotation: [-Math.PI / 2, 0, 0], 
    ...props 
  }))
  const [floorBase, floorNormal, floorRoughness] = useLoader(TextureLoader, [Floor, FloorNormal, FloorRoughness])
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry  args={[1000, 1000]} />
      <MeshReflectorMaterial map={floorBase} normalMap={floorNormal} roughnessMap={floorRoughness}  transparent={true}
          envMapIntensity={0.35}
          roughness={0.7}
          dithering={true}
          blur={[1024, 512]} 
          mixBlur={10} 
          mixStrength={5} 
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0} 
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25} 
          reflectorOffset={0.02} 
          />
    </mesh>
  )
}
