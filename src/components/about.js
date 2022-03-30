import React from 'react'
import './about.css'
import Social from './social.js'
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FaAngleDown } from 'react-icons/fa';

function Box() {

    return (
      <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshNormalMaterial attach="material" />
      </mesh>
    );
  
  }

function about() {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="desc_wrapper">
            
              <div className="desc">
                <div className='title_wrapper'>
                  <h3 className="title">Sobre Mim</h3>
                   <p className="separator" />
                  </div>
                <p>
                  Programador motivado com forte interesse em desenvolvimento web. Utilizo o Javascript para o frontend e backend, também uso tecnologias como React, Express, MongoDB e MySQL, além disso estou iniciando em Python e Django.
                  Entusiasmado, sempre gostei de resolver problemas complexos e posso adaptar-me a qualquer ambiente.
                  
                </p>
                <p id="interact">
                Arraste o cubo ao lado que criei utilizando a biblioteca Three.js e surpreenda-se com os efeitos 3D.
                
                </p>
                <Social></Social>
                
              </div>

              <div className='desc' id='desc-box'>
                <div className='box'>
    
                <Canvas clasName="canvas">
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} />
                    <Suspense fallback={null}>
                      <Box />
                    </Suspense>
                  </Canvas>
                </div>
      
              </div>

            </div>
             <div className='scroll'>
                <a href='#projects'><FaAngleDown /></a>
            </div>
        </article>
      </div>
      
  </section>
  )
}

export default about