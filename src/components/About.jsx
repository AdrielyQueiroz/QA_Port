import React from 'react';
import "../css/style.css";
import aproved from "../img/aproved.png";

const About = () => {
  return (
    <div className='about-container mt-5' id="sobre">
      <div className="container-home row d-flex justify-content-center">
        <div className="col-11 bg-white lh-lg p-5 position-relative overflow-hidden">
          <img
            src={aproved}
            alt="aprovado"
            className="position-absolute top-0 end-0 m-3"
            style={{ width: '100px', opacity: 0.8 }}
          />

          <h2 className="mb-5 my-2">Olá</h2>
          <p className="p-4 mb-5">
            Me chamo <span className="bg-primary-subtle p-1">Denise Santana</span>, profissional com experiência sólida em <span className="bg-primary-subtle p-1">garantia da qualidade de software</span>, 
            com forte atuação em projetos baseados em <span className="bg-primary-subtle p-1">metodologias ágeis</span>, 
            como Scrum e Kanban. Possuo habilidade na elaboração e execução de cenários de teste manuais e automatizados, com foco em qualidade, entrega contínua e colaboração com o time 
            de desenvolvimento. 
            <br />
            Conhecimento prático nas ferramentas Jira, Postiman, Cypress e Eclipse, com domínio na criação de cenários em BDD, como Gherkin, Cucumber e uso de estruturas como Page Objects.
            Experiência na validação de testes web e API, geração de evidências em vídeo, execução em modo headles e criação de massa de dados e dinâmica e estática.
            <br />
            Vivência com Cypress em todas as etapas: instalação, configuração, utilização do Selector Playground, Checkpoints, execução local e via terminal. Noções em JavaScript, Node.js,
            Selenium IDE/WebDriver, e versionamento com Git, Github e GitLab.
            <br />
            Forte atuação na análise de defeitos, revalidação após correção, gerenciamento de bugs e documentação de evidências, garantindo a entrega de produtos com qualidade ao cliente e
            usuário final.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
