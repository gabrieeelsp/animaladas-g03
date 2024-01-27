import Cards from "../../Components/Cards/Cards";
import "./Adoptar.css";
import React from "react";

export default function Rescatado() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-100">
            <img
              className="banner-img"
              src="https://lh3.googleusercontent.com/pw/ABLVV85khLo7smP1e3tYqHno2gOI73OD4m8eogn4NHnHK2o5lJ-jOU0pS3-wWprO1MUTKLifFsGiQMdWe5U7XG_1rTyLbYQichHXNGR7QSspFWynDWZxTGJZ1itHBGbggXGDiDHlSw6LTnrkawXM0tFt8jyBSsqa1HOiH9rhm7IXsZToMxgjWyLAjHZIjwB2JRxBTiHDgdfj1rKN3Fbtyv_yLw7G7p-oYMOpZ_SXDJxmVBMsBqTOmKzaRO74DAxDOuTym-J2gKiqczdpxOW6kATwG_wiemwHYeEPwVB_lez6lkb_X376eiwKJPXgTLfRuLCi-ZdK1Ipv34mdbxB64wZjyEx3GJ_I0fFd7rCyyfjpusMPmGjhpPOCkcZHmsd-AYPigBeaMTZn2XsvkBb5QzgJFiRLOknAZWNF1_KAkAXs85ZS16gfmlbbYVzQYoz7bGzmkxYWFPgAGDERsuj5w7prLRY3oiom52Jwb9ld1nBnzlidwptanTQG8ya6t0Q0IQpud_3264qgezpQTv_yDtUF9DqzWEIMTZyUr06Z8WD_aQSGeg0X7AAUnxNDz0IJ0q6Rf0NZna1NtV2B24OjU1Xfe8C8jRNtbiq7i3XZDXLCMUU_BpKilS8ve1L0nd-MdO4Vfyg44bHuZ3LafyUN3uevsKVbRCXZQzb9OjLltw8sk6OW08l6TTXaGUFlUTTlxyRY39z_tjgUFEKK6fQ5OEaanZoJGQu4Z-4Ox9ipeBwDLNnC07WIW2k_2Q3s1HUn4CM4aZzdjMu7q6TnvoU78UMgAN9YWDAmVdmPeaT_lXMU8CcOFG0Q_zmPmu5jfm3HzJ4-Y2meajG8NZWjfB1antKXCUaKPVTsEEK95A8yXA7M2AHCWo-rSpBC5hsDFRqLiKGuJED6x8GiY0_n9jYHVCd09cHWUfr6=w3841-h484-s-no-gm?authuser=0"
              alt="dogs-image"
            />
          </div>
          <div class="col-10">
            <div className="row w-100">
              <div className="col-6">
                <Cards />
              </div>
              <div className="col-6">
                <Cards />
              </div>
              <div className="col-6">
                <Cards />
              </div>
              <div className="col-6">
                <Cards />
              </div>
            </div>
          </div>
          <div
            className="bg-dark col-1 my-3 d-flex flex-column justify-content-center"
            style={{ width: "auto", height: "700px", borderRadius: "20px" }}
          >
<span className="text-warning btn-sm m-3">
              Ordenar por tamaño
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de tamaño
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Chico</a></li>
                <li><a class="dropdown-item" href="#">Mediano</a></li>
                <li><a class="dropdown-item" href="#">Grande</a></li>
               </ul>
            </div>
            <span className="text-warning btn-sm m-3">
            Ordenar por edad
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rango de edad
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Cachorro</a></li>
                <li><a class="dropdown-item" href="#">Joven</a></li>
                <li><a class="dropdown-item" href="#">Adulto</a></li>
               </ul>
            </div>
            <p></p>
            <hr className="col-12" style={{ backgroundColor: "yellow", height: "2px" }} />
            <span className="text-warning btn-sm m-3">
              Filtrar por tamaño
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de tamaño
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Chico</a></li>
                <li><a class="dropdown-item" href="#">Mediano</a></li>
                <li><a class="dropdown-item" href="#">Grande</a></li>
               </ul>
            </div>
            <span className="text-warning btn-sm m-3">
                  Filtrar por edad
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rango de edad
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Cachorro</a></li>
                <li><a class="dropdown-item" href="#">Joven</a></li>
                <li><a class="dropdown-item" href="#">Adulto</a></li>
               </ul>
            </div>
            <span className="text-warning btn-sm m-3">
              Filtrar por tipo
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tipo de animal
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Perro</a></li>
                <li><a class="dropdown-item" href="#">Gato</a></li>
               </ul>
            </div>
            <span className="text-warning btn-sm m-3">
              Comportamiento
            </span>
            <div class="dropdown">
               <button class="btn btn-warning btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Amistoso
               </button>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">Si</a></li>
                <li><a class="dropdown-item" href="#">No</a></li>
               </ul>
            </div>
            
            <button type="button" className="btn btn-warning btn-sm m-5">
              Reset Filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
