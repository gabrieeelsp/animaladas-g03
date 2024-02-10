import React, { useRef, useState } from "react";
import "./reviews.css";
import default_user from "../../img/perfil_default.png";
import axios from "axios";
export default function Reviews(props) {
  const ref = useRef();
  const [score_initial, Setscore_initial] = useState(0);
  const [opinion_data, Setopiniondata] = useState({
    score: "",
    comment: "",
  });
  const ArrayStarts = [...new Array(5)];
  const handleonchange = (e) => {
    Setopiniondata({
      ...opinion_data,
      [e.target.name]: e.target.value,
    });
  };
  const scoring_opinion = (score) => {
    const score_opinion = score + 1;
    Setscore_initial(score_opinion);
    Setopiniondata({
      ...opinion_data,
      score: score_opinion,
    });
  };
  const post_comment = async () => {
    const resp = await axios.post(
      "http://localhost:3001/user/createUser",
      opinion_data
    );
  };
  const remove_content = () => {
    Setopiniondata({
      score: "",
      comment: "",
    });
    Setscore_initial(0);
    ref.current.value = "";
  };

  return (
    <>
      <div className="testimonial-box-container" style={{ marginTop: "50px" }}>
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
              {ArrayStarts.map((start, index) => {
                return index < score_initial ? (
                  <i
                    className="bi bi-star-fill"
                    onClick={(e) => scoring_opinion(index)}
                    style={{ cursor: "pointer" }}
                  ></i>
                ) : (
                  <i
                    className="bi bi-star"
                    onClick={(e) => scoring_opinion(index)}
                  ></i>
                );
              })}
            </div>
          </div>
          <div className="form-group">
            <label
              for="exampleFormControlTextarea1"
              style={{
                fontSize: "1.5rem",
                color: "#f9d71c",
                fontWeight: "bold",
              }}
            >
              Escribe tu opinion
            </label>
            <textarea
              name="comment"
              ref={ref}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={handleonchange}
            ></textarea>
          </div>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <div
              type="button"
              className="btn btn-warning"
              style={{ width: "100%" }}
            >
              Publicar
            </div>

            <div
              type="button"
              className="btn btn-danger"
              style={{ width: "100%" }}
              onClick={remove_content}
            >
              Borrar
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}
