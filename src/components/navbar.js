import React from 'react'
import './navbar.css'

function navbar() {
  return (
    <nav id='navbar'>
        <div className="logo"> 
            <a href="#projects">Amaro Ferreira - Portfolio</a>
        </div>
        <div className='nav_links'>
          <a href='#contact' className='nav_link'>Contato</a>
          <a href='./amaroferreira.docx.pdf' download="cv" className='nav_button'>Download CV</a>
        </div>
    </nav>
  )
}

export default navbar