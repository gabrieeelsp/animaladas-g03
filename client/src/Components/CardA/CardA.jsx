import React from 'react';

export default function CardA(props) {

  const {id, name} = props;

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
              <h5 className="card-title">{name}</h5>
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
