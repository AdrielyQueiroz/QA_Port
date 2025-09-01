import React from 'react';
import "../css/style.css";
import jira from '../img/jira.png';
import postman from '../img/postman.png';
import cypress from '../img/cypress.png';
import js from '../img/JavaScript.png';
import nodejs from '../img/NodeJS.png';
import git from '../img/git.png';
import github from '../img/github.png';
import gitlab from '../img/gitlab.png';
import java from '../img/java.png';

const skills = [
  {
    img: jira,
    alt: 'Jira',
    desc: 'O Jira é uma ferramenta utilizada para o gerenciamento de tarefas, controle de bugs e acompanhamento de testes dentro de metodologias ágeis como Scrum e Kanban.',
  },
  {
    img: postman,
    alt: 'Postman',
    desc: 'O Postman permite enviar requisições HTTP, validar respostas e simular diferentes cenários de teste. Também permite criação de coleções automatizadas e integração com CI/CD.',
  },
  {
    img: cypress,
    alt: 'Cypress',
    desc: 'O Cypress é uma ferramenta moderna de testes end-to-end, com execução direta no navegador, suporte a validações de interface e integração com CI/CD.',
  },
  {
    img: js,
    alt: 'JavaScript',
    desc: 'JavaScript é a linguagem base para testes com Cypress e automações web, com foco em lógica, manipulação de DOM e integração com ferramentas de QA modernas.',
  },
  {
    img: java,
    alt: 'GitLab',
    desc: 'Linguagem de programação orientada a objetos, robusta e multiplataforma, amplamente utilizada no desenvolvimento de aplicações corporativas, web e mobile (Android).',
    className: "gitlab"
  },
  {
    img: nodejs,
    alt: 'Node.js',
    desc: 'Node.js é usado como base para o ambiente de execução de ferramentas como Cypress, permitindo integração com bibliotecas de automação e testes modernos.',
    className: 'node'
  },
  {
    img: git,
    alt: 'Git',
    desc: 'O Git é utilizado no versionamento de código, permitindo controle de alterações, colaboração entre times e integração com plataformas como GitHub e GitLab.',
    className: 'icons-img'
  },
  {
    img: github,
    alt: 'GitHub',
    desc: 'GitHub é uma plataforma de hospedagem de código que integra versionamento, pull requests e automações via GitHub Actions.',
    className: 'icons-img'
  },
  {
    img: gitlab,
    alt: 'GitLab',
    desc: 'GitLab é uma alternativa ao GitHub, muito utilizada em empresas para controle de código, CI/CD integrado e gerenciamento de pipelines de teste.',
    className: "gitlab"
  }
];

const Skills = () => {
  return (
    <div className="skills p-5" id='habilidades'>
      <h2 className="mb-5 text-center">Habilidades</h2>
      <div className="row g-3 m-2">
        {skills.map((skill, index) => (
          <div className="col-sm-12 col-md-5 col-lg-4 col-xl-3 p-3" key={index}>
            <div className="card h-100" >
              <img src={skill.img} className={`card-img-top p-5 ${skill.className || ''}`} alt={skill.alt} />
              <div className="card-body">
                <p className="card-text text-justify">{skill.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

