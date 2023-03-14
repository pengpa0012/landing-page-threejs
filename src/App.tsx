import { Canvas, useLoader } from '@react-three/fiber'
import './App.css'
import { Mesh } from './Components/Mesh'
import { Grid, OrbitControls } from '@react-three/drei'
import { RockBasicColor, RockNormal, RockRoughness } from './assets'
import { TextureLoader } from 'three'
function App() {
  const [rockMap, rockNormal, rockRoughness] = useLoader(TextureLoader, [
    RockBasicColor,
    RockNormal,
    RockRoughness,
  ])
  
  // TODO
  // Add model
  // Control using arrow keys/mouse
  // Add background
  // Add different model
  return (
    <div className="App">
      <div className="relative">
        <Canvas style={{ height: "100vh", background: "#000" }}>
          <gridHelper />
          <Mesh
            
            component={
            <>
              <sphereGeometry args={[1, 50, 50]} />
              <meshStandardMaterial normalMap={rockNormal} map={rockMap} roughnessMap={rockRoughness} />
              <OrbitControls />
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
