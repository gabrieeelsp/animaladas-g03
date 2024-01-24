import './App.css';
import Home from "./Views/Home/Home";
import Adoptar from "./Views/Adoptar/adoptar";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adoptar" element={<Adoptar />}></Route>
        </Routes>
      </div>
    );
}

export default App;