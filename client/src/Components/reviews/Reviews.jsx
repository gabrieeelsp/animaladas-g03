import React, { useRef, useState } from "react";
import "./reviews.css";
import default_user from "../../img/perfil_default.png";
import axios from "axios";
import SuccesModal from "../SuccessModal/SuccesModal";
import { useSelector } from "react-redux";
export default function Reviews(props) {
  console.log("esta son las props de reviews", props);
  const ref = useRef();
  let disabled = true;
  let deletedisabled = true;
  let disabledpost = true;
  const user_profile = useSelector((state) => state.UserReducer);
  let profile_singin = false;

  const { MessageModal, SetMessageModal } = props;
  console.log("valor de setmessagep", MessageModal);
  const [score_initial, Setscore_initial] = useState(0);
  const [ShowModalSucces, SetShowModalSucces] = useState(false);
  let errornumber = "";
  let showerrornumber = false;
  const [opinion_data, Setopiniondata] = useState({
    score: "",
    comment: "",
    userId: 1,
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
    console.log("la data que se va en axis", opinion_data);
    const resp = await axios.post(
      "http://localhost:3001/review/createReviews",
      opinion_data
    );
    const { data } = resp;
    if (data) {
      console.log("ingreso al condicional del data");
      SetMessageModal(
        "¡Bien! se ha registrado tu opinion. En breve un administrador la revisara para su aprobación."
      );
      SetShowModalSucces(true);
    }
  };
  const remove_content = () => {
    Setopiniondata({
      score: "",
      comment: "",
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
  console.log();
  if (Number(opinion_data.comment)) {
    showerrornumber = true;
    errornumber = "El campo debe contener letras y/o alfanumericos";
  } else {
    errornumber = "";
    showerrornumber = false;
  }
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
        <SuccesModal
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalSucces}
          SetShowModalMessage={SetShowModalSucces}
        ></SuccesModal>
      </div>
    </>
  );
}
