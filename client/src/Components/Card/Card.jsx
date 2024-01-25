import { Link } from 'react-router-dom';
const Card = () => {

    return (
  
        <div className="card" style={{backgroundColor: "black", color: "white",width: "250px",height: "500px", borderRadius: "30px", margin: "10px"}}>
        <img src="https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp"style={{ borderRadius: "30px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h3 className="card-title">Rupert</h3>
          <p className="card-text" style={{textAlign: "left"}}>Edad: </p>
          <p className="card-text" style={{textAlign: "left"}}>Tamaño: </p>
          <p className="card-text" style={{textAlign: "left"}}>Peso: </p>
          <p className="card-text" style={{textAlign: "left"}}>Comportamiento: </p>
          <Link><a href="#" className="btn btn-primary">Adoptar</a></Link>
        </div>
      </div>
    );
  };
  
  export default Card;