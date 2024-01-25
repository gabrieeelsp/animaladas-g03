import React from 'react';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <p></p>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style={{ maxWidth: "700px", margin: "auto" }}>
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p></p>
      <Footer />
    </div>
  );
}
