import React, { useEffect, useRef, useState } from "react";
import "./reviews.css";
import default_user from "../../img/perfil_default.png";
import axios from "axios";
import SuccesModal from "../SuccessModal/SuccesModal";
import { useSelector } from "react-redux";
export default function Reviews(props) {
  let basedata_reviews = [];
  const ref = useRef();
  let disabled = true;
  let deletedisabled = true;
  let disabledpost = true;
  const user_profile = useSelector((state) => state.UserReducer);
  let profile_singin = false;

  const [MessageModal, SetMessageModal] = useState("");
  const [posted, Setposted] = useState(false);
  const [score_initial, Setscore_initial] = useState(0);
  const [ShowModalSucces, SetShowModalSucces] = useState(false);
  let errornumber = "";
  let showerrornumber = false;
  const [opinion_data, Setopiniondata] = useState({
    score: "",
    comment: "",
    userId: user_profile.id ? user_profile.id : "",
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

  const urlBaseAxios =
    import.meta.env.VITE_ENV === "DEV"
      ? import.meta.env.VITE_URL_DEV
      : import.meta.env.VITE_URL_PROD;

  const post_comment = async () => {
    const resp = await axios.post(
      `${urlBaseAxios}/review/createReviews`,
      opinion_data
    );
    const { data } = resp;
    if (data) {
      Setposted(true);
      SetMessageModal(
        "¡Bien! se ha registrado tu opinion. En breve un administrador la revisara para su aprobación."
      );
      SetShowModalSucces(true);
      remove_content();
    }
    get_allreviews();
  };
  const remove_content = () => {
    Setopiniondata({
      score: "",
      comment: "",
      userId: user_profile.id,
    });
    Setscore_initial(0);
    ref.current.value = "";
  };
  if (opinion_data.score !== "" || opinion_data.comment !== "") {
    deletedisabled = false;
  }
  if (
    opinion_data.score !== "" &&
    opinion_data.comment !== "" &&
    errornumber === ""
  ) {
    disabled = false;
  }
  if (user_profile.email !== undefined) {
    profile_singin = true;
  }
  if (Number(opinion_data.comment)) {
    showerrornumber = true;
    errornumber = "El campo debe contener letras y/o alfanumericos";
  } else {
    errornumber = "";
    showerrornumber = false;
  }

  const get_allreviews = async () => {
    console.log("ingreso a la funcion get all reviews");
    const resp = await axios.get(`${urlBaseAxios}/review/allReviews`);
    const { data } = resp;
    console.log("data :", data);
    basedata_reviews.concat(data);
    console.log("basedate", basedata_reviews);
  };
  useEffect(() => {
    get_allreviews();
  }, [posted]);
  return (
    <>
      {profile_singin && (
        <div
          className="testimonial-box-container"
          style={{ marginTop: "50px" }}
        >
          <div className="testimonial-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-img">
                  <img src={user_profile.imageProfile} />
                </div>
                <div className="name-user">
                  <strong>
                    {user_profile.name} {user_profile.lastName}
                  </strong>
                  <span>
                    @{user_profile.name}
                    {user_profile.lastName}
                  </span>
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
              {showerrornumber && (
                <div class="input-group mb-1 alert alert-warning" role="alert">
                  {errornumber}
                </div>
              )}
              <textarea
                name="comment"
                ref={ref}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={handleonchange}
                vale={opinion_data.comment}
              ></textarea>
            </div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <button
                type="button"
                className="btn btn-warning"
                style={{ width: "100%" }}
                onClick={post_comment}
                disabled={disabled}
              >
                Publicar
              </button>

              <button
                type="button"
                className="btn btn-danger"
                style={{ width: "100%" }}
                onClick={remove_content}
                disabled={deletedisabled}
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      )}
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
                    <img src="https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039507/Proyecto_animaladas/default/Foto_Perfil__kaihwx.jpg" />
                  </div>
                  <div className="name-user">
                    <strong>Pedro garcia</strong>
                    <span>@Pedrogarcia</span>
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
                    <img src="https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039507/Proyecto_animaladas/default/Foto_Perfil__kaihwx.jpg" />
                  </div>
                  <div className="name-user">
                    <strong>Pedro garcia</strong>
                    <span>@Pedrogarcia</span>
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
                    <img src="https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039507/Proyecto_animaladas/default/foto_perfil_2_cqrzyj.jpg" />
                  </div>
                  <div className="name-user">
                    <strong>Patricia delgado</strong>
                    <span>@Patriciadelgado</span>
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
                    <img src="https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039506/Proyecto_animaladas/default/fotoperfil4_ksiccw.jpg" />
                  </div>
                  <div className="name-user">
                    <strong>Christian toledo</strong>
                    <span>@Christiantoledo</span>
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
                    <img src="https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039506/Proyecto_animaladas/default/fotoperfil6_h5vs4g.webp" />
                  </div>
                  <div className="name-user">
                    <strong>Jennifer Lopez</strong>
                    <span>@Jenniferlopez</span>
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
                    <img src="https://res.cloudinary.com/dwgufqzjd/image/upload/v1708039507/Proyecto_animaladas/default/fotoperfil_5_vadiww.png" />
                  </div>
                  <div className="name-user">
                    <strong>Cindy Cataño</strong>
                    <span>@Cindycataño</span>
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
        <SuccesModal
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalSucces}
          SetShowModalMessage={SetShowModalSucces}
        ></SuccesModal>
      </div>
    </>
  );
}
