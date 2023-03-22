import { animated, useSpring } from "@react-spring/three"
import { OrbitControls, PerspectiveCamera, Text, TransformControls } from "@react-three/drei"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { handleKeyDown, handleKeyUp } from "../utilities"
import { useRaycastVehicle, useSphere } from '@react-three/cannon'
import { Quaternion, TextureLoader, Vector3 } from "three"
import * as THREE from "three";
import { Brick, BrickNormal, BrickRoughness } from "../assets"

export const Mesh = (props: any) => {
  const [ref, api] = useSphere(() => ({
    mass: 500,
    position: [0, 0, 0]
  }),
  useRef(null))

  const [bricksBase, bricksNormal, bricksRoughness] = useLoader(TextureLoader, [Brick, BrickNormal, BrickRoughness])
  const { viewport } = useThree()
  // const ref = useRef<any>()
  const cameraRef = useRef<any>()
  const textRef = useRef<any>()
  const lightRef = useRef<any>()
  // const [spring, setSpring] = useSpring(() => (
  //   { 
  //     y: 0.5,  
  //     config: {
  //       duration: 200,
  //       friction: 20,
  //       tension: 210,
  //     } 
  //   }
  // ))
  // const [isFalling, setIsFalling] = useState(false);
  const [keys, setKeys] = useState({
    w: false,
    a: false,
    s: false,
    d: false,
    space: false
  }) 

  useEffect(() => { 
    document.addEventListener("keydown", (e) => handleKeyDown(e, setKeys))
    document.addEventListener("keyup", (e) => handleKeyUp(e, setKeys))

    return () => {
      document.removeEventListener("keydown", (e) => handleKeyDown(e, setKeys))
      document.removeEventListener("keyup", (e) => handleKeyUp(e, setKeys))
    }
  }, [])

  const velocity = useRef(new THREE.Vector3());
  const direction = new THREE.Vector3();

  const updateVelocity = () => {
    const speed = 2.5;
    direction.set(
      (keys.d ? 1 : 0) - (keys.a ? 1 : 0),
      0,
      (keys.s ? 1 : 0) - (keys.w ? 1 : 0)
    ).normalize();

    if(ref.current){
      velocity.current
      .copy(direction)
      .multiplyScalar(speed)
    }
  };

  useFrame((state) => {
    if(ref.current && cameraRef.current) {
      updateVelocity()
      api.velocity.set(velocity.current.x, velocity.current.y, velocity.current.z)
      let position = new Vector3(0,0,0)
      position.setFromMatrixPosition(ref.current.matrixWorld)

      let wDir = new Vector3(0,0,-1)

      let cameraPosition = position.clone().add(
        wDir.clone().multiplyScalar(-1).add(
          new Vector3(0,5,5)
        )
      )
      
      state.camera.position.copy(cameraPosition)
      state.camera.lookAt(position)
    }
  })

  return (
    <>
      <ambientLight intensity={.2} />
      <pointLight position={[0, 10, 0]} ref={lightRef} castShadow />
      <PerspectiveCamera
        fov={75}
        makeDefault={true}
        rotation={[-1,0,0]}
        position={[0, 10, 5]}
        ref={cameraRef}
      ></PerspectiveCamera>
      <Text
        scale={[.2, .2, .2]}
        position={[0,4.5,0]}
        ref={textRef}
      >
       use WASD to move
       and SPACE to jump
      </Text>
      <animated.mesh
        castShadow
        {...props}
        ref={ref}>
          <sphereGeometry args={[1, 50, 50 * 2]}/>
          <meshStandardMaterial map={bricksBase} normalMap={bricksNormal} roughnessMap={bricksRoughness}/>
          {/* <OrbitControls enableZoom={false} /> */}
      </animated.mesh>
    </>
  )
}