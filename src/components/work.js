import React from 'react'
import './work.css'
import { FaCss3Alt, FaHtml5, FaReact, FaNode } from 'react-icons/fa';
import { SiJavascript, SiMongodb } from 'react-icons/si';


function Project(props) {


     const tech = {
    css: <FaCss3Alt />,
    js: <SiJavascript />,
    react: <FaReact />,
    html: <FaHtml5 />,
    node: <FaNode />,
    mongodb: <SiMongodb />
  };
    
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';


    return (
        <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map((t) => (
              <span key={t}> {tech[t]} </span>
            ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              Source code<i className="fas fa-external-link-alt" />
            </a>
    
          </div>
        </div>
      </div>
    )
  }

function work() {
  return (
    <section id="projects">
    <div className="projects-container">
      <div className="heading">
        <h3 className="title">Projetos</h3>
        <p className="separator" />
        <p className="subtitle">
          A seguir você pode conferir alguns dos projetos que trabalhei durante meu aprendizado. Esses projetos foram realizados por mim com o intuito de colocar minhas habilidades adquiridas em cursos da Threehouse e Freecodecamp em prática.
        </p>
      </div>
      <div className="projects-wrapper">
        <Project
          title="Clone do Medium.com"
          img={'https://user-images.githubusercontent.com/84079199/160910886-519ec166-bda6-4cd9-a710-41ff87299e41.JPG'}
          tech="react js css node mongodb"
          repo="https://github.com/amarodf/clone-medium"
        >
          <small>
            Construído com React, Express, MongoDB, Axios e MaterialUI.
          </small>
          <p>
            Aplicação fullstack que permite leitura e publicação de artigos e posts de blog. Conta com feed interativo, opção de dar like, deletar post e adicionar foto na sua publicação.
          </p>
        </Project>
        <Project
          title="crypto price tracker"
          img={'https://user-images.githubusercontent.com/84079199/160911140-4fd48975-0bfb-4f81-9d91-5ca9dd121b50.JPG'}
          tech="js html css react"
          repo="https://github.com/amarodf/dashboard-crypto"
        >
          <small>
            Uso de React, Javascript e Axios.
          </small>
          <p>
            Dashboard para visualização dos atuais preços e outros indicadores das principais Criptomoedas.
          </p>
        </Project>
        <Project
          title="Dashboard com tema escuro"
          img={'https://user-images.githubusercontent.com/84079199/157728876-ae873347-a59d-4792-8fa1-2a8d731d037b.gif'}
          tech="js html css "
          repo="https://github.com/amarodf/dashboard_port/tree/master"
        >
          <small>
            HTML, CSS, Javascript e Chartjs.
          </small>
          <p>
            This is a full-stack website that I made which lets the users read and post anonymous
            messages and replies.
          </p>
        </Project>
        <Project
          title="Website Portfolio"
          img={'https://user-images.githubusercontent.com/84079199/157728876-ae873347-a59d-4792-8fa1-2a8d731d037b.gif'}
          tech="react js html css "
          repo="https://github.com/amarodf/dashboard_port/tree/master"
        >
          <small>
            HTML, CSS, Javascript e React.
          </small>
          <p>
            Repositório do portfolio para mostar projetos.
          </p>
        </Project>
      </div>
    </div>
  </section>
  )
}

export default work