import { Canvas, extend, useLoader, useThree } from '@react-three/fiber'
import './App.css'
import { Mesh } from './Components/Mesh'
import { Brick, BrickNormal, BrickRoughness } from './assets'
import { TextureLoader } from 'three'
import { Plane } from './Components/Plane'
import { Physics } from '@react-three/cannon'
import { BoxIntance } from './Components/BoxIntance'
import { Sky, Stars } from '@react-three/drei'


function App() {
 

  return (
    <div className="App">
       <Canvas style={{ height: "100vh", background: "#000" }} shadows>
          <Physics gravity={[0, -50, 0]}>
            <Mesh />
            {
              [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((box, i) => (
                <BoxIntance key={i} />
              ))
            }
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Plane position={[0, 0, 0]} />
          </Physics>
        </Canvas>
    </div>
  )
}

export default App
