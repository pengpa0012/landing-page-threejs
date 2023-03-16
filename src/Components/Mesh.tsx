import { animated, useSpring } from "@react-spring/three"
import { OrbitControls, PerspectiveCamera, TransformControls } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { handleKeyDown, handleKeyUp } from "../utilities"
import { useForwardRaycast } from "../utilities/raycast"

export const Mesh = (props: any) => {
  const mesh = useRef<any>()
  const cameraRef = useRef<any>()
  const lightRef = useRef<any>()
  const raycast = useForwardRaycast(mesh)
  const [spring, setSpring] = useSpring(() => ({ y: 0.5 }))
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
    if(mesh.current && cameraRef.current) {
      if(keys.w) {
        mesh.current.position.z -= 0.075
        cameraRef.current.position.z -= 0.075
      }
      if(keys.a) {
        mesh.current.position.x -= 0.075
        cameraRef.current.position.x -= 0.075
      }
      if(keys.s) {
        mesh.current.position.z += 0.075
        cameraRef.current.position.z += 0.075
      }
      if(keys.d) {
        mesh.current.position.x += 0.075
        cameraRef.current.position.x += 0.075
      }
      if(keys.space && !isFalling) {
        setSpring({ y: 3 })
        setIsFalling(true)
      }
      if(isFalling && spring.y.goal === 3) {
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
        position={[0, 1, 3]}
        ref={cameraRef}
      />
      <animated.mesh
        castShadow
        {...props}
        ref={mesh}
        position-y={spring.y}>
          {props.component}
        {/* <OrbitControls autoRotate enableRotate={false} enableZoom={false} /> */}
      </animated.mesh>
    </>
  )
}