import React, { useEffect, useState } from 'react';
import "../css/style.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid fixed-top">
        <ul className="navbar-nav flex-row flex-wrap justify-content-end w-100 custom-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#habilidades">Habilidades</a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="/cv.pdf"
              download
            >
              Baixar CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
