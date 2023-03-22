import { Canvas, extend, useLoader, useThree } from '@react-three/fiber'
import './App.css'
import { Mesh } from './Components/Mesh'
import { Brick, BrickNormal, BrickRoughness } from './assets'
import { TextureLoader } from 'three'
import { Plane } from './Components/Plane'
import { Physics } from '@react-three/cannon'
import { BoxIntance } from './Components/BoxIntance'


function App() {
 

  return (
    <div className="App">
       <Canvas style={{ height: "100vh", background: "#000" }} shadows>
          <Physics gravity={[0, -20, 0]}>
            <Mesh />
            {/* <BoxIntance /> */}
            <Plane position={[0, 0, 0]} />
          </Physics>
        </Canvas>
    </div>
  )
}

export default App
