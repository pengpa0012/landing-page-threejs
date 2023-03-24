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
      <planeBufferGeometry  args={[30, 30]} />
      <MeshReflectorMaterial map={floorBase} normalMap={floorNormal} roughnessMap={floorRoughness}  transparent={true}
          envMapIntensity={0.35}
          metalness={0.05}
          roughness={0.4}
          dithering={true}
          blur={[1024, 512]} // Blur ground reflections (width, heigt), 0 skips blur
          mixBlur={10} // How much blur mixes with surface roughness (default = 1)
          mixStrength={5} // Strength of the reflections
          mixContrast={1} // Contrast of the reflections
          resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
          mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
          minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
          maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
          depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [bl
          reflectorOffset={0.02} //
          />
    </mesh>
  )
}
