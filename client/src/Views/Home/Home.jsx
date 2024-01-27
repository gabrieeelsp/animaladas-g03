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
  style={{ width: "1100px", margin: "auto", marginTop: "50px" }}
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src="https://images.unsplash.com/photo-1508109657675-38fe91fb2ada?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="d-block w-100 rounded"
        alt="..."
        style={{ borderRadius: "100px", height: "390px", objectFit: "cover" }}
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1542765826-d17aa264390d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="d-block w-100 rounded"
        alt="..."
        style={{ borderRadius: "100px", height: "390px", objectFit: "cover" }}
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1510878356388-93a357c7a57c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="d-block w-100 rounded"
        alt="..."
        style={{ borderRadius: "100px", height: "390px", objectFit: "cover" }}
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
    style={{ filter: "drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.8))" }}
  >
    <span
      className="carousel-control-prev-icon"
      aria-hidden="true"
      style={{ filter: "invert(1)" }} 
    ></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
    style={{ filter: "drop-shadow(-2px 2px 2px rgba(255, 255, 255, 0.8))" }}
  >
    <span
      className="carousel-control-next-icon"
      aria-hidden="true"
      style={{ filter: "invert(1)" }} 
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
          <button className="btn btn-warning btn-custom-yellow">¡QUIERO APORTAR!</button>

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
  
    </div>
  );
}
