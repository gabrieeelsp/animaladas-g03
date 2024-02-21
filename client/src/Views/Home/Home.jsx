import React, { useEffect } from "react"; 
import { useSelector, useDispatch } from 'react-redux'; 
import { Link } from "react-router-dom";
import { isTokenExpired } from "../../scripts/istokenexpired";
import "./Home.css";
import {  get_allreviews } from "../../redux/actions/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  console.log("pagina home.jsx");
  const allReviews = useSelector((state) => state.rootReducer.allreviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_allreviews());
  }, [dispatch]);

  const renderReviews = () => {
    return allReviews.data && allReviews.data.slice(0, 4).map((review, index) => (
      <div className="col-md-6 mb-4" key={index}>
        <div className="card bg-dark text-light shadow testimonial-box">
          <div className="card-body">
            <div className="profile d-flex align-items-center mb-3">
              <div className="profile-img me-3">
                <img
                  src={review.user_img}
                  alt="User"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </div>
              <div className="name-user">
                <strong className="text-warning">{review.user_name} {review.user_lastName}</strong>
                <span className="text-light">@{review.user_name}{review.user_lastName}</span>
              </div>
            </div>
            <div className="reviews mb-3">
              {[...Array(review.score)].map((_, index) => (
                <i className="bi bi-star-fill text-warning" key={index}></i>
              ))}
              {[...Array(5 - review.score)].map((_, index) => (
                <i className="bi bi-star text-warning" key={index}></i>
              ))}
            </div>
            <div className="user-comment text-white">
              <p style={{ maxHeight: "40px", overflow: "hidden", textOverflow: "ellipsis", color: "white" }}>{review.comment}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{ paddingTop: "45px" }}>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{ width: "100%", height: "250px", margin: "auto", marginTop: "40px", marginBottom: "10px", maxWidth: "1100px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1515952782260-36998d667f89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 rounded"
              alt="..."
              style={{
                borderRadius: "100px",
                height: "220px",
                objectFit: "cover",
              }}
            />
          </div>
        
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1542765826-d17aa264390d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 rounded"
              alt="..."
              style={{
                borderRadius: "100px",
                height: "220px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1509195605820-8eb07b921387?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 rounded"
              alt="..."
              style={{
                borderRadius: "100px",
                height: "220px",
                objectFit: "cover",
              }}
            />
          </div>

          
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1625107012478-2fb7eceb7577?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 rounded"
              alt="..."
              style={{
                borderRadius: "100px",
                height: "220px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          style={{
            filter: "drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.8))",
          }}
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
          style={{
            filter: "drop-shadow(-2px 2px 2px rgba(255, 255, 255, 0.8))",
          }}
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
            <h2
              className="text-warning text-center mb-4"
              style={{
                fontSize: "2.5rem", 
                color: "#FFC107",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" 
              }}
            >
              <FontAwesomeIcon icon={faPaw} style={{ color: "#FFC107", fontSize: "2.5rem" }} /> ¿Quiénes somos? <FontAwesomeIcon icon={faPaw} style={{ color: "#FFC107", fontSize: "2.5rem" }} />
            </h2>
            <p className="text-light" style={{ marginTop: "8px", fontSize: "1.2rem" }}>
              Somos Animaladas, una organización de personas en Salta Capital,
              Argentina, dedicada al rescate de perros y gatos en situación de
              abandono, maltrato y otras circunstancias. Nuestra misión es
              proporcionar amor, atención y un hogar seguro para aquellos que
              más lo necesitan.
            </p>
            <div className="hover-text">
              <p>
                <br />
                Apoya nuestra causa y haz una donación en línea para ayudarnos a
                seguir rescatando y cuidando a los animales necesitados.
                <br />
                <br />
                <Link to="/donar">
                  <button className="btn btn-warning btn-custom-yellow my-custom-button">
                    ¡QUIERO APORTAR!
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link to="/rescatados" className="custom-card-link">
              <div className="card bg-dark text-warning shadow-card custom-card">
                <img
                  src="https://img.freepik.com/foto-gratis/seccion-baja-mujer-pie-hierba-verde-su-gato-atigrado_23-2148045682.jpg?w=740&t=st=1706325042~exp=1706325642~hmac=5fbc9cd5cc95a8bd1258bba7d437a2d54200153f4473e0465cd5ce6c21f47296"
                  className="card-img-top equal-image"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="cardcustom-title text-center">Rescatados</h5>
                  <p className="cardcustom-text">
                    ¡Ayúdanos a brindar atención urgente a nuestros animalitos!
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/adoptar" className="custom-card-link">
              <div className="card bg-dark text-warning shadow-card custom-card">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-labrador-negro-sacando-lengua-tumbado-hierba-verde_23-2148045693.jpg?w=740&t=st=1706325071~exp=1706325671~hmac=c3505bee8c972a68bda762f470a82e68591bb3d453a8b1ad824725cae83a5633"
                  className="card-img-top equal-image"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="cardcustom-title text-center">Adoptar</h5>
                  <p className="cardcustom-text">
                    Encuentra a tu próximo mejor amigo disponible para adopción.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/adoptados" className="custom-card-link">
              <div className="card bg-dark text-warning shadow-card custom-card">
                <img
                  src="https://img.freepik.com/foto-gratis/mujer-hermosa-joven-su-gato-gato-atigrado-precioso-parque_23-2148045683.jpg?w=740&t=st=1706325117~exp=1706325717~hmac=1f6c00c5fcd07a7e1e056b6baba1bb0c34710b6af9dea744a0fd749f3a1d214e"
                  className="card-img-top equal-image"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="cardcustom-title text-center">Adoptados</h5>
                  <p className="cardcustom-text">
                    Descubre historias felices de animales que encontraron un
                    hogar.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-4 latest-reviews-section">
  <h2 className="cardcustom-title text-warning mb-4 text-start"
   style={{ marginLeft: "20px" }}>Experiencias con Animaladas:</h2>
  <div className="row">
    {renderReviews()}
  </div>
</div>

    </div>
  );
}