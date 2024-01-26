import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <div className="card text-bg-warning mb-3 d-inline-block p-0" style={{ width: "270px", borderRadius: "20px" }}>
      <img src="https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp" className="card-img" alt="..." style={{ borderRadius: "20px" }}/>
      <div className="card-body">
        <h3 className="card-title">Rupert</h3>
        <p className="card-text text-left">Edad: </p>
        <p className="card-text text-left">Tamaño: </p>
        <p className="card-text text-left">Peso: </p>
        <p className="card-text text-left">Comportamiento: </p>
        <Link to="#" className="btn btn-dark btn-block text-warning">Adoptar</Link>
      </div>
    </div>
  );
}
