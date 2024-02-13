import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Adoptar from "./Views/Adoptar/Adoptar";
import Detail from "./Views/Detail/Detail";
import Contact from "./Views/Contact/Contact";
import Adoptado from "./Views/Adoptado/Adoptado";
import Login from "./Views/login/login";
import Register from "./Views/Register/Register";
import Rescatado from "./Views/Rescatado/Rescatado";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Requisitos from "./Views/Requisitos/Requisitos";
import Donar from "./Views/Donar/donar";
import Addanimal from "./Views/Add-animal/Add-animal";
import Verify_user from "./Views/VerifyUser/Verify_user";
import Estadisticas from "./Views/Estadisticas/Estadisticas";
import { useState } from "react";
//!Bien! Tu cuenta ha sido verificada.
function App() {
  const [MessageModal, SetMessageModal] = useState("");

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adoptar" element={<Adoptar />}></Route>
        <Route path="/adoptados" element={<Adoptado />}></Route>
        <Route path="/rescatados" element={<Rescatado />}></Route>

        <Route
          path="/detail/:id"
          element={
            <Detail
              MessageModal={MessageModal}
              SetMessageModal={SetMessageModal}
            />
          }
        />

        <Route path="/contacto" element={<Contact />}></Route>
        <Route
          path="/login"
          element={
            <Login
              MessageModal={MessageModal}
              SetMessageModal={SetMessageModal}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Register
              MessageModal={MessageModal}
              SetMessageModal={SetMessageModal}
            />
          }
        />
        <Route
          path="/add"
          element={
            <Addanimal
              MessageModal={MessageModal}
              SetMessageModal={SetMessageModal}
            />
          }
        />
        <Route path="/requisitos" element={<Requisitos />}></Route>

        <Route
          path="/donar"
          element={
            <Donar
              MessageModal={MessageModal}
              SetMessageModal={SetMessageModal}
            />
          }
        />
        <Route
          path="/verifyUser/:infoUser"
          element={
            <Verify_user
              MessageModal={MessageModal}
              SetMessageModal={SetMessageModal}
            />
          }
        />
        <Route
          path="/estadisticas"
          element={
            <Estadisticas />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
