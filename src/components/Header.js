import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="home-link">
        Inicio
      </Link>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/populares">Películas populares</Link>
          </li>
          <li>
            <Link to="/mejor-calificadas">Películas mejor calificadas</Link>
          </li>
          <li>
            <Link to="/proximos-estrenos">Próximos estrenos</Link>
          </li>
        </ul>
      </nav>
      <SearchBar onBuscar={() => {}} />
    </header>
  );
};

export default Header;
