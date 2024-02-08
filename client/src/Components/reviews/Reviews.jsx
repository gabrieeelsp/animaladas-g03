import React from "react";
import "./reviews.css";
import default_user from "../../img/perfil_default.png";
export default function Reviews() {
  return (
    <div style={{ boxSizing: "border-box", margin: "0px", padding: "0px" }}>
      <section id="testimonials">
        <div className="testimonial-heading">
          <span>Comentarios</span>
          <h1>Las personas dicen</h1>
        </div>
        <div className="testimonial-box-container">
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={default_user} />
                </div>
                <div className="name-user">
                  <strong>Fabio Garces</strong>
                  <span>@fgarces06</span>
                </div>
              </div>
              <div className="reviews">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="user-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, sed. Explicabo similique, cum culpa qui delectus
                ratione sapiente maxime. Quis commodi illo tempore! Iure
                possimus impedit et quo enim corrupti.
              </p>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={default_user} />
                </div>
                <div className="name-user">
                  <strong>Fabio Garces</strong>
                  <span>@fgarces06</span>
                </div>
              </div>
              <div className="reviews">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="user-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, sed. Explicabo similique, cum culpa qui delectus
                ratione sapiente maxime. Quis commodi illo tempore! Iure
                possimus impedit et quo enim corrupti.
              </p>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={default_user} />
                </div>
                <div className="name-user">
                  <strong>Fabio Garces</strong>
                  <span>@fgarces06</span>
                </div>
              </div>
              <div className="reviews">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="user-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, sed. Explicabo similique, cum culpa qui delectus
                ratione sapiente maxime. Quis commodi illo tempore! Iure
                possimus impedit et quo enim corrupti.
              </p>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={default_user} />
                </div>
                <div className="name-user">
                  <strong>Fabio Garces</strong>
                  <span>@fgarces06</span>
                </div>
              </div>
              <div className="reviews">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="user-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, sed. Explicabo similique, cum culpa qui delectus
                ratione sapiente maxime. Quis commodi illo tempore! Iure
                possimus impedit et quo enim corrupti.
              </p>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={default_user} />
                </div>
                <div className="name-user">
                  <strong>Fabio Garces</strong>
                  <span>@fgarces06</span>
                </div>
              </div>
              <div className="reviews">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
              </div>
            </div>
            <div className="user-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae, sed. Explicabo similique, cum culpa qui delectus
                ratione sapiente maxime. Quis commodi illo tempore! Iure
                possimus impedit et quo enim corrupti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
