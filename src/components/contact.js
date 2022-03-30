import React from 'react'
import './contact.css'
import { FaArrowCircleUp } from 'react-icons/fa';

function contact() {
  return (
  <>
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
                Contato
            </p>
            <p className="separator" />
            <p className="subtitle">
              Mande uma mensagem para{' '}
              <span className="mail">
                amarowdferreira@gmail.com 
              </span>
              {' '}ou (51)982606813:
            </p>
          </div>
        </div>
        <form id="contact-form" action="#">
          <input placeholder="Nome" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Mensagem" type="text" name="message" />
          <input className="button" id="submit" value="Enviar" type="submit" />
        </form>
      </div>
    </section>
    <div className='footer'>

      <a href='#navbar'><FaArrowCircleUp /></a>
    </div>
  </>
  )
}

export default contact