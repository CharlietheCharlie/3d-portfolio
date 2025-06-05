import React, { useEffect } from 'react'
import { techStackIcons } from '../../../constants'
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const TechIcon = ({model}:{model:typeof techStackIcons[number]}) => {
  const scene = useGLTF(model.modelPath)
  useEffect(() => {
    if(model.name === "Interactive Developer"){
      scene.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "#ffffff" })
          }
        }
      })
    }
  },[scene])
  return (
    <Canvas>
      <ambientLight intensity={0.3}></ambientLight>
      <directionalLight position={[0, 0, 5]} intensity={1}></directionalLight>
      <Environment preset="city"></Environment>
      <OrbitControls enableZoom={false}></OrbitControls>
      <Float speed={5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation as [number, number, number]}> 
          <primitive object={scene.scene}></primitive>
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon