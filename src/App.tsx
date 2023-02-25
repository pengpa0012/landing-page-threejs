import { Canvas } from '@react-three/fiber'
import './App.css'
import { Box } from './Components/Box'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <div className="App">
      <div className="min-h-screen">
        <Canvas style={{ height: 500 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 0, 0]} scale={[2,2,2]} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  )
}

export default App
