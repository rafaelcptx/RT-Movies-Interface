import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <h1>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/movies/:id">Movies</Link>
        <br></br>
        <Link to="/search">Search</Link>
      </h1>
      <Outlet />
    </div>
  );
}

export default App;
