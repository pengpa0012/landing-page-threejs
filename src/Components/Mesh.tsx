import { animated, useSpring } from "@react-spring/three"
import { OrbitControls, PerspectiveCamera, Plane, Sparkles, Stars, Text, TransformControls } from "@react-three/drei"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { handleKeyDown, handleKeyUp } from "../utilities"
import { useRaycastVehicle, useSphere } from '@react-three/cannon'
import { Object3D, Quaternion, SphereGeometry, TextureLoader, Vector3 } from "three"
import * as THREE from "three";
import { Ice, IceNormal, IceRoughness } from "../assets"
import { useForwardRaycast } from "../utilities/raycast"

export const Mesh = (props: any) => {
  let count = 0
  const [counter, setCounter] = useState(count)
  const [ref, api] = useSphere(() => ({
    mass: 500,
    position: [0, 0, 0],
    onCollide: () => setCounter(count++)
  }),
  useRef(null))
  const [iceBase, iceNormal, iceRoughness] = useLoader(TextureLoader, [Ice, IceNormal, IceRoughness])
  const { viewport } = useThree()
  // const ref = useRef<any>()
  const cameraRef = useRef<any>()
  const textRef = useRef<any>()
  const textCameraRef = useRef<any>()
  const lightRef = useRef<any>()
  const starRef = useRef<any>()
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

  useFrame((state, delta) => {
    if(ref.current && cameraRef.current) {
      updateVelocity()
      api.velocity.set(velocity.current.x, velocity.current.y, velocity.current.z)
      let position = new Vector3(0,0,0)
      position.setFromMatrixPosition(ref.current.matrixWorld)
      

      let wDir = new Vector3(0,0,-1)

      let cameraPosition = position.clone().add(
        wDir.clone().multiplyScalar(-1).add(
          new Vector3(0,2,7)
        )
      )

      textRef.current.position.copy(position);
      textRef.current.position.y += 1.5;

      textCameraRef.current.position.copy(position);
      textCameraRef.current.position.y += 4;

      starRef.current.position.copy(position)

      lightRef.current.position.copy(position)
      lightRef.current.position.y += 10;


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
        ref={cameraRef}
      ></PerspectiveCamera>
      <Text
        scale={[.8, .8, .8]}
        position={[0,2.5,0]}
        ref={textRef}
      >
      {counter}
      </Text>
      <Text
        scale={[.3, .3, .3]}
        position={[0,2.5,0]}
        ref={textCameraRef}
      >
        use WASD to move
      </Text>
      <animated.mesh
        castShadow
        {...props}
        ref={ref}>
          <sphereGeometry args={[1, 50, 50 * 2]}/>
          <meshStandardMaterial map={iceBase} normalMap={iceNormal} roughnessMap={iceRoughness}/>
          {/* <OrbitControls enableZoom={false} /> */}
      </animated.mesh>
      <Stars ref={starRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

// TODO
// -Import character model
// -Walk Animation
// -Infinite Plane
// -Import model for instannces (trees, car, building)
//  -Use meshes if its too big to load