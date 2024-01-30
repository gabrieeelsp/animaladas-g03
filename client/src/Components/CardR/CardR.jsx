import React from 'react';

export default function CardR(props) {

  const { id, name } = props;

  return (
    <div className="row row-cols-md">
      <div className="col">
        <div className="card">
          <img
            src="https://www.portalveterinaria.com/upload/20190924100048ar2409_apego_gatos_1200.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
