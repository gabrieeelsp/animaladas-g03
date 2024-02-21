import React, { useState } from "react";
import Map from "../../Components/Map/Map.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email.trim() === "" ||
      formData.subject.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    console.log("Formulario enviado:", formData);
  };

  return (
    <div
      className="container d-flex justify-content-center my-5"
      style={{ paddingTop: "45px" }}
    >
      <div
        className="row bg-dark p-3 align-items-center justify-content-center"
        style={{ width: "1000px", borderRadius: "30px" }}
      >
        <div className="col p-3">
          <h4 className="text-warning">Nos encontramos en Cerrillos, Salta</h4>
          <h5 className="text-warning">Cómo llegar</h5>
          <Map />
        </div>
        <div className="col p-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-0">
              <h4 className="text-warning">O contáctanos</h4>
              <p></p>
              <label
                htmlFor="email"
                className="form-label text-warning my-2 fs-6"
              >
                Correo electrónico:
              </label>
              <input
                type="email"
                className="form-control text-center"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="subject"
                className="form-label text-warning my-2 fs-6"
              >
                Motivo de contacto:
              </label>
              <input
                type="text"
                className="form-control text-center"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Motivo de contacto"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-warning fs-6">
                Detalle el motivo aquí:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-warning mb-3 my-2 fw-bold fs-7"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
