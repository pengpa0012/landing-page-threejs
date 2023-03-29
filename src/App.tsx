import { Canvas, extend, useLoader, useThree } from '@react-three/fiber'
import './App.css'
import { Mesh } from './Components/Mesh'
import { Brick, BrickNormal, BrickRoughness } from './assets'
import { TextureLoader } from 'three'
import { Plane } from './Components/Plane'
import { Physics } from '@react-three/cannon'
import { BoxIntance } from './Components/BoxIntance'
import { Sky, Stars } from '@react-three/drei'
import { Controls, withControls } from 'react-three-gui'


function App() {
  return (
    <div className="App">
      <Controls.Provider>
       <Controls.Canvas style={{ height: "100vh", background: "#000" }} shadows>
          <Physics gravity={[0, -50, 0]}>
            <Mesh />
            {
              [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((box, i) => (
                <BoxIntance key={i} />
              ))
            }
            <Plane position={[0, 0, 0]} />
          </Physics>
        </Controls.Canvas>
        <Controls />
        </Controls.Provider>
    </div>
  )
}

export default App
