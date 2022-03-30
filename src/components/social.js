import React from 'react'
import './social.css'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function social() {
  return (
    <div className="social">
    <a
      href="https://www.linkedin.com/in/amaro-ferreira-034530206/?locale=pt_BR"
      target="_blank"
      rel="noopener noreferrer"
      title="Link to author's link profile"
    >
      {' '}
      <FaLinkedinIn />
      
    </a>
    <a
      href="https://github.com/amarodf"
      target="_blank"
      rel="noopener noreferrer"
      title="Link to author's gith Profile"
    >
      {' '}
     <FaGithub />
    </a>
  </div>
  )
}

export default social