import { Canvas, useLoader, useThree } from '@react-three/fiber'
import './App.css'
import { Mesh } from './Components/Mesh'
import { CameraControls, Grid, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { RockBasicColor, RockNormal, RockRoughness } from './assets'
import { TextureLoader } from 'three'
import { useEffect } from 'react'
function App() {
  
  const [rockMap, rockNormal, rockRoughness] = useLoader(TextureLoader, [
    RockBasicColor,
    RockNormal,
    RockRoughness,
  ])

  return (
    <div className="App">
      <div className="relative">
        <Canvas style={{ height: "100vh", background: "#000" }}>
          <gridHelper rotation={[0.1,0,0]} />
          <Mesh
            component={
            <>
              <sphereGeometry args={[1, 50, 50]}/>
              <meshStandardMaterial normalMap={rockNormal} map={rockMap} roughnessMap={rockRoughness} />
            </>
          } position={[2, 0, 2]} />
        </Canvas>
        <h1 className="text-white font-bold text-6xl absolute top-[50%] -translate-y-[50%] left-[100px]">Sample Header Here <br /> test test</h1>
      </div>
      <div className="min-h-screen"></div>
      <div className="min-h-screen"></div>
    </div>
  )
}

export default App
