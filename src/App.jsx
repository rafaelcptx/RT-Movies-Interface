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
      <Outlet />
    </div>
  );
}

export default App;
