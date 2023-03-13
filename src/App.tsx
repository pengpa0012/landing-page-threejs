import { Canvas, useLoader } from '@react-three/fiber'
import './App.css'
import { Mesh } from './Components/Mesh'
import { OrbitControls } from '@react-three/drei'
import { RockBasicColor, RockNormal, RockRoughness } from './assets'
import { TextureLoader } from 'three'
import { useEffect, useState } from 'react'
import { config, useSpring } from '@react-spring/three'

function App() {
  const [rockMap, rockNormal, rockRoughness] = useLoader(TextureLoader, [
    RockBasicColor,
    RockNormal,
    RockRoughness,
  ])
  const [size, setSize] = useState(1)
  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: size
  });
  

  useEffect(() => {
    const handleScroll = () => {
      setSize(window.scrollY * 0.005 + 1)
    }

    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])
  console.log(scale)
  // TODO
  // Scroll event with model resizing
  return (
    <div className="App">
      <div className="relative">
        <Canvas style={{ height: "100vh", background: "#000" }}>
          <Mesh
          onClick={() => setActive(!active)}
            component={
            <>
              <sphereGeometry args={[1, 50, 50]}  />
              <meshStandardMaterial normalMap={rockNormal} map={rockMap} roughnessMap={rockRoughness} />
            </>
          } position={[0, 0, 0]} scale={scale} />
        </Canvas>
      </div>
      <div className="min-h-screen"></div>
    </div>
  )
}

export default App
