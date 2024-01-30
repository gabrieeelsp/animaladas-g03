import React from 'react';

export default function CardR(props) {

  const { id, name, image1, rescued_story } = props;

  return (
    <div className="row row-cols-md">
      <div className="col">
        <div className="card">
          <img
            src={image1 ? image1: "https://i.pinimg.com/originals/48/cf/7f/48cf7fff6428fe2b9665c4f6f6d20975.jpg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {rescued_story ? rescued_story: "Ejemplo de Historia de rescatos" }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
