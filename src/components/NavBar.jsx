import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div className="navDiv">
      <form id="buscar">
        <div id="searchDiv">
          <input id="searchBar" type="text" placeholder="Digite um filme..." />
          <div id="button">
            <img src="../assets/lupa.png" alt="lupa" id="lupa" />
          </div>
        </div>
      </form>
      <form id="filtrar">
        <select id="inputSelect">
          <option value="">Categorias</option>
          <option value="">Drama</option>
          <option value="">Drama</option>
        </select>
      </form>
    </div>
  );
};

export default NavBar;
