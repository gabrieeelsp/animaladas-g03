import React, { useState } from 'react';
import Map from '../../Components/Map/Map.jsx'; 

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
    <div className="container d-flex justify-content-center my-5">
      <div className="row bg-dark p-4 align-items-center justify-content-center" style={{ width: "1000px", borderRadius: "30px" }}>
        <h2 className="text-warning mb-4 fs-4">Formulario de Contacto</h2> 
        <div className="col">
          <Map />
        </div>
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-warning fs-5">Correo electrónico:</label>
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
              <label htmlFor="motivo" className="form-label text-warning fs-5">Motivo de contacto:</label>
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
              <label htmlFor="detalle" className="form-label text-warning fs-5">Detalle el motivo aquí:</label>
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
              <button type="submit" className="btn btn-warning mb-3 font-weight-bold fs-7">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
