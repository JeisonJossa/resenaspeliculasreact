import React from "react";
import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="Filter">
      <label htmlFor="filter">Ordenar por:</label>
      <select id="filter" value={value} onChange={handleChange}>
        <option value="popularity.desc">Más populares</option>
        <option value="vote_average.desc">Mejor valoradas</option>
        <option value="primary_release_date.desc">Más recientes</option>
      </select>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
