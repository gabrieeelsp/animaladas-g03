import React from 'react';

export default function CardR(props) {

  const { id, name, image3, adoption_story } = props;

  return (
    <div className="row row-cols-md">
      <div className="col">
        <div className="card">
          <img
            src={image3 ? image3: "https://i.pinimg.com/originals/48/cf/7f/48cf7fff6428fe2b9665c4f6f6d20975.jpg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {adoption_story ? adoption_story: "Ejemplo de historia de adopcion"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
