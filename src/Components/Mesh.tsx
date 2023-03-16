import { animated } from "@react-spring/three"
import { OrbitControls, PerspectiveCamera, TransformControls } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"

export const Mesh = (props: any) => {
  const mesh = useRef<any>()
  const cameraRef = useRef<any>()
  const lightRef = useRef<any>()

  const [keys, setKeys] = useState({
    w: false,
    a: false,
    s: false,
    d: false
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "KeyW") {
        setKeys(keys => ({ ...keys, w: true }))
      }
      if (e.code === "KeyA") {
        setKeys(keys => ({ ...keys, a: true }))
      }
      if (e.code === "KeyS") {
        setKeys(keys => ({ ...keys, s: true }))
      }
      if (e.code === "KeyD") {
        setKeys(keys => ({ ...keys, d: true }))
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "KeyW") {
        setKeys(keys => ({ ...keys, w: false }))
      }
      if (e.code === "KeyA") {
        setKeys(keys => ({ ...keys, a: false }))
      }
      if (e.code === "KeyS") {
        setKeys(keys => ({ ...keys, s: false }))
      }
      if (e.code === "KeyD") {
        setKeys(keys => ({ ...keys, d: false }))
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  useFrame(({ clock }) => {
    if (keys.w) {
      mesh.current.position.z -= 0.075
      cameraRef.current.position.z -= 0.075
      
    }
    if (keys.a) {
      mesh.current.position.x -= 0.075
      cameraRef.current.position.x -= 0.075
    }
    if (keys.s) {
      mesh.current.position.z += 0.075
      cameraRef.current.position.z += 0.075
    }
    if (keys.d) {
      mesh.current.position.x += 0.075
      cameraRef.current.position.x += 0.075
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
        ref={mesh}>
          {props.component}
        {/* <OrbitControls autoRotate enableRotate={false} enableZoom={false} /> */}
      </animated.mesh>
    </>
  )
}