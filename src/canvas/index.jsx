import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'

import Shirt from './Shirt'
import Box from './Box'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'

import { useSnapshot } from 'valtio'
import state from '../store'

const CanvasModel = () => {
  const snap = useSnapshot(state)

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <pointLight position={[8, 8, 8]} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <CameraRig>
        <Backdrop />
        <Center>
          {snap.model === 'tshirt' && (<Shirt />)}
          {snap.model === 'box' && (<Box />)}
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel