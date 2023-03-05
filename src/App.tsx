import { Canvas, useLoader } from '@react-three/fiber'
import './App.css'
import { Mesh } from './Components/Mesh'
import { OrbitControls } from '@react-three/drei'
import { RockBasicColor, RockNormal, RockRoughness } from './assets'
import { TextureLoader } from 'three'

function App() {
  const [rockMap, rockNormal, rockRoughness] = useLoader(TextureLoader, [
    RockBasicColor,
    RockNormal,
    RockRoughness,
  ])
  return (
    <div className="App">
      <div className="min-h-screen">
        <Mesh 
          component={
          <>
            <sphereGeometry args={[1, 50, 50]} />
            <meshStandardMaterial normalMap={rockNormal} map={rockMap} roughnessMap={rockRoughness} />
          </>
        } position={[0, 0, 0]} scale={[2,2,2]} />
      </div>
    </div>
  )
}

export default App
