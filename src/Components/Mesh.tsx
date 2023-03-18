import { animated, useSpring } from "@react-spring/three"
import { OrbitControls, PerspectiveCamera, TransformControls } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { handleKeyDown, handleKeyUp } from "../utilities"
import { useSphere } from '@react-three/cannon'

export const Mesh = (props: any) => {
  // const [ref, api] = useSphere(() => ({
  //   mass: 1,
  //   position: [0, 0, 0]
  // }));

  const ref = useRef<any>()
  const cameraRef = useRef<any>()
  const lightRef = useRef<any>()
  const [spring, setSpring] = useSpring(() => (
    { 
      y: 0.5,  
      config: {
        friction: 20,
        tension: 210,
      } 
    }
  ))
  const [isFalling, setIsFalling] = useState(false);
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
  useFrame(({ clock }) => {
    if(ref.current && cameraRef.current) {
      if(keys.w) {
        ref.current.position.z -= 0.075
        cameraRef.current.position.z -= 0.075
      }
      if(keys.a) {
        ref.current.position.x -= 0.075
        cameraRef.current.position.x -= 0.075
      }
      if(keys.s) {
        ref.current.position.z += 0.075
        cameraRef.current.position.z += 0.075
      }
      if(keys.d) {
        ref.current.position.x += 0.075
        cameraRef.current.position.x += 0.075
      }
      if(keys.space && !isFalling && ref.current.position.y === 0.5) {
        setSpring({ y: 2 })
        setIsFalling(true)
      }
      if(isFalling && ref.current.position.y === 2) {
        setSpring({ y: 0.5 })
        setIsFalling(false)
      }
    }
  })

  return (
    <>
      <ambientLight intensity={.1} />
      <pointLight position={[10, 10, 7]} ref={lightRef} castShadow />
      <PerspectiveCamera
        fov={75}
        rotation={[0, 0, 0]}
        makeDefault={true}
        position={[0, 2, 4]}
        ref={cameraRef}
      />
      <animated.mesh
        castShadow
        {...props}
        ref={ref}
        position-y={spring.y}>
          {props.component}
        {/* <OrbitControls autoRotate enableRotate={false} enableZoom={false} /> */}
      </animated.mesh>
    </>
  )
}