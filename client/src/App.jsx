import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import Adoptar from "./Views/Adoptar/adoptar";
import NavBar from "./Views/NavBar/NavBar";
import Detail from "./Views/Detail/Detail";
import Contact from "./Views/Contact/Contact";
import Adoptado from "./Views/Adoptado/Adoptado";
import About from "./Views/About/About";
import Login from "./Views/login/login";
function App() {
  let showNav = true;
  const location = useLocation();

  if (location.pathname === "/login") {
    showNav = false;
  }

  return (
    <div className="App">
      {showNav ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adoptar" element={<Adoptar />}></Route>
        <Route path="/adoptado" element={<Adoptado />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
