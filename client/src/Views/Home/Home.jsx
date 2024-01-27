import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


export default function Home() {
  return (
    <div>
      {/* Carrusel */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{ maxWidth: "700px", margin: "auto", marginTop: "50px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.universodelasaludanimal.com/wp-content/uploads/sites/61/2021/07/Cacho-e-gato-juntos-no-chao-posando-pra-foto_3.jpg"
              className="d-block w-100 rounded"
              alt="..."
              style={{ borderRadius: "100px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://guauandcat.com/wp-content/uploads/2021/08/mitos-perros-gatos.jpg"
              className="d-block w-100 rounded"
              alt="..."
              style={{ borderRadius: "100px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/fotos-premium/perros-gatos-grupo-contra-fondo-blanco_410516-46390.jpg?w=2000"
              className="d-block w-100 rounded"
              alt="..."
              style={{ borderRadius: "100px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


<div className="container mt-6">
  <div className="card bg-dark text-light about-us-card">
    <div className="card-body">
      <div className="hover-text">

        <p>
          <br />
          Apoya nuestra causa y haz una donación en línea para ayudarnos a seguir rescatando y
          cuidando a los animales necesitados.
          <br />
          <br />
          <a href="tu-enlace-de-donacion" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-warning">¡QUIERO APORTAR!</button>
          </a>
        </p>
      </div>
      <h2 className="text-warning" style={{ fontSize: "1.5rem", color: "#FFC107" }}>
        ¿Quiénes Somos?
      </h2>
      <p className="text-light" style={{ marginTop: "8px" }}>
        Somos Animaladas, una organización de personas en Salta Capital, Argentina,
        dedicada al rescate de perros y gatos en situación de abandono, maltrato y
        otras circunstancias. Nuestra misión es proporcionar amor,
        atención y un hogar seguro para aquellos que más lo necesitan.
      </p>
    </div>
  </div>
</div>

  

<div className="container mt-5">
      <div className="row">
        {/*Rescatados */}
        <div className="col-md-4 mb-4">
          <Link to="/rescatados" style={{ textDecoration: "none", cursor: "pointer" }}>
            <div className="card bg-dark text-warning shadow-card">
              <img
                src="https://img.freepik.com/foto-gratis/seccion-baja-mujer-pie-hierba-verde-su-gato-atigrado_23-2148045682.jpg?w=740&t=st=1706325042~exp=1706325642~hmac=5fbc9cd5cc95a8bd1258bba7d437a2d54200153f4473e0465cd5ce6c21f47296"
                className="card-img-top equal-image"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Rescatados</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* Adoptar */}
        <div className="col-md-4 mb-4">
          <Link to="/adoptar" style={{ textDecoration: "none", cursor: "pointer" }}>
            <div className="card bg-dark text-warning shadow-card">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-labrador-negro-sacando-lengua-tumbado-hierba-verde_23-2148045693.jpg?w=740&t=st=1706325071~exp=1706325671~hmac=c3505bee8c972a68bda762f470a82e68591bb3d453a8b1ad824725cae83a5633"
                className="card-img-top equal-image"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Adoptar</h5>
              </div>
            </div>
          </Link>
        </div>

        {/* Adoptado */}
        <div className="col-md-4 mb-4">
          <Link to="/adoptados" style={{ textDecoration: "none", cursor: "pointer" }}>
            <div className="card bg-dark text-warning shadow-card">
              <img
                src="https://img.freepik.com/foto-gratis/mujer-hermosa-joven-su-gato-gato-atigrado-precioso-parque_23-2148045683.jpg?w=740&t=st=1706325117~exp=1706325717~hmac=1f6c00c5fcd07a7e1e056b6baba1bb0c34710b6af9dea744a0fd749f3a1d214e"
                className="card-img-top equal-image"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Adoptados</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  

  
      <footer className="text-center mt-5">
        <p style={{ color:  "#fff" }}>
          &copy; 2024 Animaladas. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
