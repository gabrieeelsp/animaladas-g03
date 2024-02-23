import React, { useEffect, useRef, useState } from "react";
import "./reviews.css";
import default_img_user from "../../img/perfil_default.png";
import axios from "axios";
import SuccesModal from "../SuccessModal/SuccesModal";
import { useDispatch, useSelector } from "react-redux";
import { get_allreviews } from "../../redux/actions/actions";
import GeneralModal from "../GeneralModal/generalmodal";
export default function Reviews(props) {
  const dispatch = useDispatch();
  let basedata_reviews = [];
  const ref = useRef();
  let disabled = true;
  let deletedisabled = true;
  let disabledpost = true;
  const user_profile = useSelector((state) => state.UserReducer);
  const [id_sign_in, Setid_sign_in] = useState(user_profile.id);
  const allreviews = useSelector((state) => state.rootReducer.allreviews);
  let profile_singin = false;

  const [MessageModal, SetMessageModal] = useState("");
  const [posted, Setposted] = useState(false);
  const [score_initial, Setscore_initial] = useState(0);
  const [ShowModalSucces, SetShowModalSucces] = useState(false);
  const [ShowModalMessage, SetShowModalMessage] = useState(false);
  const [showGeneralModal, SetshowGeneralModal] = useState(false);
  let errornumber = "";
  let showerrornumber = false;
  const [opinion_data, Setopiniondata] = useState({
    score: "",
    comment: "",
    userId: user_profile.id ? user_profile.id : "",
    user_name: user_profile.name ? user_profile.name : "",
    user_lastName: user_profile.lastName ? user_profile.lastName : "",
    user_img: !user_profile.imageProfile
      ? "https://res.cloudinary.com/dwgufqzjd/image/upload/v1708357485/Proyecto_animaladas/default/perfil_default_iorirl.png"
      : user_profile.imageProfile,
    id: "",
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
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const resp = await axios.post(
      `${urlBaseAxios}/review/createReviews`,
      opinion_data,
      config
    );
    const { data } = resp;
    if (data) {
      dispatch(get_allreviews(""));
      Setposted(true);
      SetMessageModal(
        "¡Bien! se ha registrado tu opinion. En breve un administrador la revisara para su aprobación."
      );
      SetShowModalSucces(true);
      remove_content();
    }
  };
  const edit_review = (review) => {
    Setopiniondata({
      ...opinion_data,
      score: review.score,
      comment: review.comment,
      id: review.id,
    });
    SetshowGeneralModal(true);
  };
  const update_review = async (review) => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const resp = await axios.put(
      `${urlBaseAxios}/review/putReviews/${review.id}`,
      opinion_data,
      config
    );
    const { data } = resp;
    if (data.message === "Revisión actualizada correctamente") {
      dispatch(get_allreviews());
    }
  };
  const equals = (item) => {
    if (item.userId == user_profile.id) {
      return true;
    } else {
      return false;
    }
  };
  const remove_content = () => {
    Setopiniondata({
      score: "",
      comment: "",
      userId: user_profile.id,
      user_name: user_profile.name,
      user_lastName: user_profile.lastName,
      user_img: user_profile.imageProfile,
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

  useEffect(() => {
    dispatch(get_allreviews());
  }, [dispatch]);
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
                  <img
                    src={
                      user_profile.imageProfile === null
                        ? default_img_user
                        : user_profile.imageProfile
                    }
                  />
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
        <section id="testimonials" style={{ paddingTop: "45px" }}>
          <div className="testimonial-heading">
            <span>Comentarios</span>
            <h1>Las personas dicen</h1>
          </div>
          <div className="testimonial-box-container">
            {allreviews.data &&
              allreviews.data.map((review) => (
                <div className="testimonial-box">
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img
                          src={
                            `${review.user_img}` === null
                              ? default_img_user
                              : `${review.user_img}`
                          }
                        />
                      </div>
                      <div className="name-user">
                        <strong>
                          {review.user_name} {review.user_lastName}
                        </strong>
                        <span>
                          @{review.user_name}
                          {review.user_lastName}
                        </span>
                      </div>
                    </div>
                    <div className="reviews">
                      {ArrayStarts.map((start, index) => {
                        return index < review.score ? (
                          <i
                            className="bi bi-star-fill"
                            style={{ cursor: "pointer" }}
                          ></i>
                        ) : (
                          <i className="bi bi-star"></i>
                        );
                      })}
                    </div>
                  </div>
                  <div className="user-comment">
                    <p>{review.comment}</p>
                  </div>

                  {equals(review) && (
                    <i
                      className="bi bi-pencil-square"
                      style={{ float: "right", fontSize: "20px" }}
                      onClick={(e) => edit_review(review)}
                    ></i>
                  )}
                </div>
              ))}
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
          </div>
        </section>
        <GeneralModal
          SetShowModalMessage={SetshowGeneralModal}
          ShowModalMessage={showGeneralModal}
        >
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
                    return index < opinion_data.score ? (
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
                  Estas editando un comentario
                </label>
                {showerrornumber && (
                  <div
                    class="input-group mb-1 alert alert-warning"
                    role="alert"
                  >
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
                  value={opinion_data.comment}
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
                  onClick={(e) => update_review(opinion_data)}
                  disabled={disabled}
                >
                  Actualizar
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
        </GeneralModal>
        <SuccesModal
          MessageModal={MessageModal}
          ShowModalMessage={ShowModalSucces}
          SetShowModalMessage={SetShowModalSucces}
        ></SuccesModal>
      </div>
    </>
  );
}
