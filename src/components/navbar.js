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
          <a href='https://drive.google.com/file/d/1RlLiA25EP-DSGPLMO_FKx5Hdm76dujd8/view?usp=sharing' className='nav_button'>Currículo</a>
        </div>
    </nav>
  )
}

export default navbar