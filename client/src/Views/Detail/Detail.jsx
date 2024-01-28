import React from "react";
import { Link } from "react-router-dom";


export default function Detail() {
    return (
        <div className="container d-flex align-items-center justify-content-center my-5">
            <div className="row bg-dark p-4 align-items-center justify-content-center" style={{ width: "2000px", borderRadius: "30px" }}>
                <div className="col">
                    <img src="https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp" className="card-img p-3" alt="..." style={{ borderRadius: "100%",width: "70%" }} />
                </div>
                <div className="col">
                    <div className="row bg-dark p-4 text-warning" style={{ width:"auto", borderRadius: "30px", textAlign:"left" }}>
                    <div className="container " style={{backgroundColor:"#FFC107",marginBottom: "30px", borderRadius:"30px", width:"auto"}}> <h1 className="card-title" style={{textAlign:"center", alignContent:"center", padding:"5px", color:"#212529"}}>Rupert</h1></div>
                        <p className="card-text text-left">Sexo: </p>
                        <p className="card-text text-left">Edad Aprox: </p>
                        <p className="card-text text-left">Tamaño: </p>
                        <p className="card-text text-left">Peso: </p>
                        <p className="card-text text-left">Discapacidad y/o enfermedad crónica: </p>
                        <p className="card-text text-left">Comportamiento: </p>
                    </div>
                    <Link to="/requisitos" className="btn btn-warning btn-block text-dark">Adoptar</Link>
                </div>
            </div>
        </div>
    );
}



