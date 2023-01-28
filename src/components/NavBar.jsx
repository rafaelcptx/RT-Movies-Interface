import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div className="navDiv">
      <form id="buscar">
        <div id="searchDiv">
          <input
            id="searchBar"
            type="text"
            placeholder="Pesquise um filme..."
          />
          <button id="button">
            <img src="../assets/lupa.png" alt="lupa" id="lupa" />
          </button>
        </div>
      </form>
      {/* 
      <form id="filtrar">
        <select id="inputSelect">
          <option value="">Categorias</option>
          <option value="">Drama</option>
          <option value="">Drama</option>
        </select>
      </form>
      */}
      s
    </div>
  );
};

export default NavBar;
