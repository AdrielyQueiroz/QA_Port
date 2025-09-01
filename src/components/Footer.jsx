import React from 'react';
import "../css/style.css";
import quality from "../img/quality.png";

const Footer = () => {
  return (
    <footer className="text-black py-5 bg-light">
      <div className="container d-flex align-items-center justify-content-between flex-wrap">
        <div className="footer-image">
          <img
            src={quality}
            alt="Quality"
            style={{ maxWidth: '250px', opacity: 0.5, marginLeft: '-180px' }}
          />
        </div>

        <div className="flex-grow-1 text-center">
          <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
            <a
              href="https://github.com/DeniseSantana/Automaao-Java"
              className="text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github fs-4"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/denise-santana-21964b98/"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>

            <span className="d-flex align-items-center fs-6 fst-italic text-danger">
              <i className="bi bi-envelope-at me-2 fs-4"></i>
              denise.cristiane.silva@gmail.com
            </span>
          </div>
          
          <div className="mt-4">
            <p className="mb-1">Todos os direitos reservados.</p>
            <p className="mb-0">&copy; {new Date().getFullYear()} Denise Santana</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
