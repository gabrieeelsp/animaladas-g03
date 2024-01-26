import React from 'react';

export default function CardR() {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img
              src="https://www.portalveterinaria.com/upload/20190924100048ar2409_apego_gatos_1200.jpg"
              className="card-img p-0"
              alt="..."
              style={{width: "340px"}}
            />
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://fotos.perfil.com/2023/07/27/trim/987/555/kefir-el-gato-mas-grande-del-mundo-1619431.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Jazmín</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://www.adiosmascota.es/wp-content/uploads/2022/09/Quien_es_el_dueno_legal_de_un_perro.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title 2</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://media.gq.com.mx/photos/61ddd7609258e7e2edc6518a/16:9/w_2560%2Cc_limit/GettyImages-1300658241.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title 3</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
