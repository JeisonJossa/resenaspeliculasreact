import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/SearchBar.css";

function SearchBar({ onBuscar }) {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (event) => {
    const terminoBusqueda = event.target.value;
    setBusqueda(terminoBusqueda);
  };

  const handleClick = () => {
    onBuscar(busqueda);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onBuscar(busqueda);
    }
  };

  return (
    <div className="SearchBar">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar una película"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onBuscar: PropTypes.func.isRequired,
};

export default SearchBar;
