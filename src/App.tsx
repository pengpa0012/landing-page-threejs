import { Canvas, extend, useLoader, useThree } from '@react-three/fiber'
import './App.css'
import { Mesh } from './Components/Mesh'
import { Brick, BrickNormal, BrickRoughness } from './assets'
import { TextureLoader } from 'three'
import { Plane } from './Components/Plane'
import { Physics } from '@react-three/cannon'
import { BoxIntance } from './Components/BoxIntance'


function App() {
  const [bricksBase, bricksNormal, bricksRoughness] = useLoader(TextureLoader, [Brick, BrickNormal, BrickRoughness])

  return (
    <div className="App">
       <Canvas style={{ height: "100vh", background: "#000" }} shadows>
          <Physics>
            <Mesh
              component={
              <>
                <sphereGeometry args={[.5, 50, 50]}/>
                <meshStandardMaterial map={bricksBase} normalMap={bricksNormal} roughnessMap={bricksRoughness}/>
              </>
            } position={[0, .5, 0]}/>
            <BoxIntance />
            <Plane position={[0, 0, 0]} />
          </Physics>
        </Canvas>
    </div>
  )
}

export default App
