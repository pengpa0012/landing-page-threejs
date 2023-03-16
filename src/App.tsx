import { Canvas, useLoader, useThree } from '@react-three/fiber'
import './App.css'
import { Mesh } from './Components/Mesh'
import { CameraControls, Grid, OrbitControls, PerspectiveCamera, TransformControls, useTexture } from '@react-three/drei'
import { Brick, BrickNormal, BrickRoughness, Pavement, PavementNormal, PavementRoughness, RockBasicColor, RockNormal, RockRoughness, WallStone, WallStoneNormal, WallStoneRoughness } from './assets'
import { AmbientLight, Texture, TextureLoader } from 'three'
import { useEffect, useState } from 'react'
import { Plane } from './Components/Plane'
function App() {
  // const [bricksBase, bricksNormal, bricksRoughness] = useLoader(TextureLoader, [Brick, BrickNormal, BrickRoughness])
  // const [pavementBase, pavementNormal, pavementRoughness] = useLoader(TextureLoader, [Pavement, PavementNormal, PavementRoughness])
  // const [wallStoneBase, wallStoneNormal, wallStoneRoughess] = useLoader(TextureLoader, [WallStone, WallStoneNormal, WallStoneRoughness])
  // const [rockMap, rockNormal, rockRoughness] = useLoader(TextureLoader, [
  //   RockBasicColor,
  //   RockNormal,
  //   RockRoughness,
  // ])
  // const [texture, setTexture] = useState<any>({
  //   base: bricksBase,
  //   normnal: bricksNormal,
  //   roughness: bricksRoughness
  // })

  // const onChangeTexture = (texture: string) => {
  //   switch(texture) {
  //     case "brick":
  //       setTexture({
  //         base: bricksBase,
  //         normal: bricksNormal,
  //         roughness: bricksRoughness
  //       })
  //       break;
  //     case "pavement":
  //       setTexture({
  //         base: pavementBase,
  //         normal: pavementNormal,
  //         roughness: pavementRoughness
  //       })
  //       break;
  //     default:
  //       setTexture({
  //         base: wallStoneBase,
  //         normal: wallStoneNormal,
  //         roughness: wallStoneRoughess
  //       })
  //   }
  // }

  return (
    <div className="App">
       <Canvas style={{ height: "100vh", background: "#000" }} shadows>
          <Mesh
            player
            component={
            <>
              <sphereGeometry args={[.5, 50, 50]}/>
              <meshStandardMaterial/>
            </>
          } position={[0, .5, 0]}/>
          <mesh position={[3, .5, 2]}>
            <boxGeometry/>
            <meshStandardMaterial/>
          </mesh>
          <Plane rotation={[Math.PI / 2, 0, 0]} scale={[30, 30, 1]} />
        </Canvas>
      {/* <div className="relative">
        <Canvas style={{ height: "100vh", background: "#000" }}>
          <Mesh
            component={
            <>
              <sphereGeometry args={[1, 50, 50]}/>
              <meshStandardMaterial normalMap={rockNormal} map={rockMap} roughnessMap={rockRoughness} />
            </>
          } position={[1.5, 0, 2]} />
        </Canvas>
        <h1 className="text-white font-bold text-6xl absolute top-[50%] -translate-y-[50%] left-[200px]">Sample Header Here <br /> test test</h1>
      </div>
      <div className="relative">
        <Canvas style={{ height: "100vh", background: "#000" }}>
          <Mesh
            opacity={0}
            component={
            <>
              <sphereGeometry args={[1, 50, 50]}/>
              <meshStandardMaterial map={texture.base} normalMap={texture.normal} roughnessMap={texture.roughness} />
            </>
          } position={[-1.5, 0, 2]} />
        </Canvas>
        <div className="absolute top-[50%] -translate-y-[50%] right-[200px]">
          <h1 className="text-white font-bold text-6xl mb-4">Sample Header Here <br /> test test</h1>
          <select onChange={(e) => onChangeTexture(e.target.value)}>
            <option value="brick">Brick</option>
            <option value="pavement">Pavement</option>
            <option value="wall-stone">Wall Stone</option>
          </select>
        </div>
      </div> */}
    </div>
  )
}

export default App
