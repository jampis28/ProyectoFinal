import React from "react";
import "./Card.css";
import nieve from "../weather-app-master/weather-app-master/Snow.png";
import lluvia from "../weather-app-master/weather-app-master/Shower.png";
import Clear from "../weather-app-master/weather-app-master/Clear.png";
function Card(props) {
  return (
    <>
      <div className="card">
        <div className="contcard">
          <div className="card-body">
            <h5 className="card-title">{props.nombre},{props.numero} {props.mes}</h5>
          </div>
          <div className="img">
            <img src={props.img} className="card-img-top" alt="..." />
          </div>

          <div className="card-body">
            <p className="card-text">{props.dataDiasmax}<span id="nomenc">{props.checked=="metric"?"°C":"°F"}</span></p>
            <p className="card-text2">{props.dataDiasmin}<span id="nomenc">{props.checked=="metric"?"°C":"°F"}</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
