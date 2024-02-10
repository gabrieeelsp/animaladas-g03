import React from "react";
import "./reviews.css";
import default_user from "../../img/perfil_default.png";
export default function Reviews(props) {
  const score = 3;
  const ArrayStarts = [...new Array(5)];
  console.log(ArrayStarts);
  const scoring = (score) => {
    console.log("este es el scoring", score);
  };
  return (
    <div style={{ boxSizing: "border-box", margin: "0px", padding: "0px" }}>
      {ArrayStarts.map((start, index) => {
        return index < score ? (
          <i
            className="bi bi-star-fill"
            onClick={(e) => scoring(index)}
            style={{ cursor: "pointer" }}
          ></i>
        ) : (
          <i className="bi bi-star"></i>
        );
      })}
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
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
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
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
                <i className="bi bi-star-fill"></i>
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
                <i className="bi bi-star"></i>
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
