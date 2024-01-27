import React from "react";


export default function Requisitos() {
  return (

    <div className="container text-center">
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{ backgroundColor: "#212529", marginTop: "50px", borderRadius: "30px" }}>
            <img src="https://www.purina.co.uk/sites/default/files/2023-03/Hero%20Pedigree%20Cats.jpg" class="card-img-top" alt="..." style={{ borderRadius: "30px" }} />
            <div className="card-body">
              <h3 className="card-title" style={{ color: "white" }}>¿Puedo adoptar?</h3>
              <p className="card-text" style={{ color: "white" }}>¿Te estás planteando adoptar un perro o un gato? Muchas personas quieren adoptar un animal pero no saben cómo. Lo cierto es que debemos cumplir una serie de requisitos y prepararnos de una determinada manera para recibir a un nuevo miembro en la familia. ¡Conoce cuáles son los pasos que debes seguir! Adoptar implica asumir la responsabilidad de su bienestar y felicidad a lo largo de su vida.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{ backgroundColor: "#212529", borderRadius: "100%", padding: "2px" }}>
            <img src="https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp" className="card-img p-3" alt="..." style={{ borderRadius: "100%", width: "100%" }} />
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{ backgroundColor: "#212529", borderRadius: "100%", padding: "2px" }}>
            <img src="https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp" className="card-img p-3" alt="..." style={{ borderRadius: "100%", width: "100%" }} />
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{ backgroundColor: "#212529", borderRadius: "100%", padding: "2px" }}>
            <img src="https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp" className="card-img p-3" alt="..." style={{ borderRadius: "100%", width: "100%" }} />
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{ backgroundColor: "#212529", borderRadius: "100%", padding: "2px" }}>
            <img src="https://savehomelessanimals.org/wp-content/uploads/Home-Adopt-a-Dog-image-1024x1024.jpg.webp" className="card-img p-3" alt="..." style={{ borderRadius: "100%", width: "100%" }} />
          </div>
        </div>

      </div>

      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{ backgroundColor: "#212529", borderRadius: "30px", height: "500px" }}><h2 className="text-warning">Cachorro</h2 ><h5 className="text-warning">Menos de 1 año</h5 ><p style={{ color: "white", textAlign: "left" }}>Es adorable y es gratificante ver su crecimiento hasta la edad adulta pero demanda tiempo y esfuerzo. Requiere alimentación frecuente, hace sus necesidades muchas veces por día, rompe objetos y acostumbra a llorar en las noches si se queda solo. La paciencia y la educación son esenciales durante su primer año y no se puede garantizar su tamaño final.</p></div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{ backgroundColor: "#212529", borderRadius: "30px", height: "500px" }}><h2 className="text-warning">Joven</h2 ><h5 className="text-warning">1-5 años</h5 ><p style={{ color: "white", textAlign: "left" }}>Es juguetón pero más adulto. Son más hábiles para aprender y adaptarse. Come dos veces al día. Ya tiene el tamaño definitivo, no cambiará de aspecto, ya tiene rasgos de personalidad desarrollados y estará esterilizado.</p></div>
        </div> <div className="col">
          <div className="card mb-3" style={{ backgroundColor: "#212529", borderRadius: "30px", height: "500px" }}><h2 className="text-warning">Adulto</h2><h5 className="text-warning">5-9 años</h5 ><p style={{ color: "white", textAlign: "left" }}>No genera problemas por quedarse solo durante períodos razonables de tiempo y son grandes compañeros. Se adaptan fácilmente a un nuevo entorno familiar.</p></div>
        </div> <div className="col">
          <div className="card mb-3" style={{ backgroundColor: "#212529", borderRadius: "30px", height: "500px" }}><h2 className="text-warning">Abuelo</h2 ><h5 className="text-warning">+ de 10 años</h5 ><p style={{ color: "white", textAlign: "left" }}>Nos brinda la ventaja de disponer de mucho tiempo para nosotros. Suelen ser tranquilos y sedentarios. Aunque el período de compañía compartida posiblemente sea más breve, puedes ofrecerles durante los años que les quedan una vida digna y agradable. Estos abuelos, que esperaron durante mucho tiempo un hogar, muestran una gratitud sincera y son pura entrega.</p></div>
        </div>

      </div>


      <div className="card mb-3" style={{ borderRadius: "30px", backgroundColor: "#212529" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://dnamydog.com/wp-content/uploads/Hazel_Green_Ball.png" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title text-warning">Requisitos</h2>
              <p className="card-text text-warning">Los animales serán entregados tras una entrevista telefónica con nuestro equipo de adopción.
                Los adoptantes deberán suscribir un contrato de adopción, comprometiéndose a garantizar una tenencia responsable a lo largo de la vida del animal.
                Los animales mayores de 6 meses se entregarán castrados. En el caso de adoptar un cachorro más joven, el adoptante se compromete a castrarlo entre los 6 meses y el primer año de edad, de manera obligatoria.
                Las adopciones están restringidas a la zona de Capital Federal y Gran Buenos Aires, Argentina, sujeto a consideración.
                Nos reservamos el derecho de aprobar o rechazar una postulación según los criterios y valores de nuestra organización.
                Los datos proporcionados por el postulante son confidenciales y se utilizan exclusivamente para el proceso de adopción, sin transferirse a terceros en ningún caso.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
