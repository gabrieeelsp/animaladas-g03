import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <div className="card text-bg-dark text-warning mb-3 d-inline-block p-0 mt-3 mb-3" style={{ width: "350px", borderRadius: "30px" }}>
      <img src="https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp" className="card-img p-3" alt="..." style={{ borderRadius: "30px" }} />
      <div className="card-body">
        <h3 className="card-title">Rupert</h3>
        <p className="card-text text-left">Edad: </p>
        <p className="card-text text-left">Tamaño: </p>
        <p className="card-text text-left">Peso: </p>
        <p className="card-text text-left">Discapacidad y/o enfermedad crónica: </p>
        <p className="card-text text-left">Comportamiento: </p>
        <Link to="/requisitos" className="btn btn-warning btn-block text-dark" style={{margin: "10px"}}>Requisitos</Link>
        <Link to="/detail/:id" className="btn btn-warning btn-block text-dark" style={{margin: "10px"}}>Adoptar</Link>
      </div>
    </div>
  );
}
