import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Views/Home/Home";
import Adoptar from "./Views/Adoptar/adoptar";
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Detail from "./Views/Detail/Detail";
import Contact from "./Views/Contact/Contact";
import Adoptado from "./Views/Adoptado/Adoptado";
import About from "./Views/About/About";

function App() {

  return (
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adoptar" element={<Adoptar />}></Route>
          <Route path= "/adoptado" element={<Adoptado />}></Route>
          <Route path= "/detail" element={<Detail />}></Route>
          <Route path= "/contact" element={<Contact />}></Route>
          <Route path= "/about" element={<About />}></Route>


        </Routes>s
      </div>
    );
}

export default App;