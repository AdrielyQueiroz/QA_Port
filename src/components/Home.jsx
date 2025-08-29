import React from 'react';
import "../css/style.css";
import fundo from '../img/fundo.png';

const Home = () => {
  return (
    <div className="home d-flex flex-wrap align-items-center justify-content-between">
      <div className="home-text d-flex flex-column justify-content-center align-items-center text-center p-5">
        <h1 className='lh-base text-uppercase'>QA Engineer</h1>
        <h4>
          Automação de testes e garantia de <span className="bg-primary-subtle p-1">qualidade de software.</span>
        </h4>
      </div>

      <div className="home-image d-flex justify-content-center align-items-center p-3">
        <img
          src={fundo}
          alt="QA"
          style={{ maxWidth: '100%', height: 'auto', opacity: 0.3 }}
        />
      </div>
    </div>
  );
};

export default Home;

