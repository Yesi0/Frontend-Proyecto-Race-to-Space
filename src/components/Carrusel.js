import React from 'react';
import adalovelace from "../assets/img/ada-lovelace.png";
import hadylamarr from "../assets/img/hady-lamar.png";
import margarethamilton from "../assets/img/margaret-hamilton.png";
import "./Style.css"

function Carrusel() {
  return (

    <div className="contenido-total">

      <div class="texto-titulos">
        <h2>¿Sabes quiénes son?</h2>
        <h5>Pioneras de la tecnología que te acompañarán en cada aprendizaje</h5>
      </div>

      <div class="conteiner-cards">
        <div class="card">
          <div class="cover">
            <img src={adalovelace} alt='' />
            <div class="img-back"></div>

          </div>
          <div class="descripcion">
            <h2>
              Ada Lovelace
            </h2>
            <p>
              Madre de la programación e informática. Diseñó
              una máquina analística mecánica, capaz de calcular
              funciones algebraicas.
            </p>
            <input type="button" value="leer más" />
          </div>
        </div>

        <div class="card">
          <div class="cover">
            <img src={margarethamilton} alt='' />
            <div class="img-back"></div>

          </div>
          <div class="descripcion">
            <h2>
              Margaret Hamilton
            </h2>
            <p>
              Dirigió desde el MIT el equipo que desarrolló
              el "software" de navegación del Programa Espacial Apolo
            </p>
            <input type="button" value="leer más" />
          </div>
        </div>

        <div class="card">
          <div class="cover">
            <img src={hadylamarr} alt='' />
            <div class="img-back"></div>

          </div>
          <div class="descripcion">
            <h2>
              Hady Lamarr
            </h2>
            <p>
              Famosa actriz de Hollywood e inventora. Creó
              un sistema inálambrico para misiles que inspiró el WiFi.
            </p>
            <input type="button" value="leer más" />
          </div>
        </div>


      </div>
    </div>

  );
}

export default Carrusel
