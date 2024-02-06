import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    motivo: '',
    detalle: '',
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
    if (formData.email.trim() === '' || formData.motivo.trim() === '' || formData.detalle.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center my-5">
      <div className="row bg-dark p-4 align-items-center justify-content-center" style={{ width: "1000px", borderRadius: "30px" }}>
        <div className="col">
          <img src="https://cdn.pixabay.com/photo/2018/03/06/03/57/jelly-carpet-ghz-3202485_1280.jpg" className="card-img p-2" alt="..." style={{ borderRadius: "30px" }} />
        </div>
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-warning">Correo electrónico</label>
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
              <label htmlFor="motivo" className="form-label text-warning">Motivo de contacto</label>
              <input
                type="text"
                className="form-control text-center"
                id="motivo"
                name="motivo"
                value={formData.motivo}
                onChange={handleInputChange}
                placeholder="Motivo de contacto"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="detalle" className="form-label text-warning">Detalle el motivo aquí:</label>
              <textarea
                className="form-control"
                id="detalle"
                name="detalle"
                rows="6"
                value={formData.detalle}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-warning mb-3 font-weight-bold">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
