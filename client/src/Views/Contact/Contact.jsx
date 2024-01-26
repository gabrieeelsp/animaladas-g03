import React from 'react';

export default function Contact() {
  return (
    <div className="container d-flex align-items-center justify-content-center my-5">
      <div className="row bg-dark p-4 align-items-center justify-content-center" style={{ width: "1000px", borderRadius: "30px" }}>
      <div class="col">
      <img src="https://cdn.pixabay.com/photo/2018/03/06/03/57/jelly-carpet-ghz-3202485_1280.jpg" className="card-img p-2" alt="..." style={{ borderRadius: "30px" }} />
        </div>
        <div class="col">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">Correo electrónico</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">Motivo de contacto</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Motivo de contacto"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Detalle el motivo aquí:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <div class="col-auto">
        <button type="submit" className="btn btn-warning mb-3 font-weight-bold">Enviar</button>
  </div>
      </div>
      </div>
    </div>
  );
}
