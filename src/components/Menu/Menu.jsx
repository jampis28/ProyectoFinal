import "./Menu.css";
function Menu(props) {
  return (
    <>
      <div id="menus">
        <div className="wind">
          <p id="windstatus">Wind Status</p>
          <h1 id="temper">
            {Math.round(props.dataDias.wind.speed)} <p id="nomen">mph</p>
          </h1>
          <div className="navigationc">
            <div className="navigation">
            <img id="navigation" src={props.navigation} alt="" />
            </div>
            <p id="temper2">WSW</p>
          </div>
        </div>
        <div className="humidity">
          <p id="windstatus">Humidity</p>
          <h1 id="temper">
            {Math.round(props.dataDias.main.humidity)} <p id="nomen">%</p>
          </h1>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: props.dataDias.main.humidity + "%" }}
              aria-valuenow={props.dataDias.main.humidity}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {props.dataDias.main.humidity} %
            </div>
          </div>
        </div>
        <div className="visibility">
          <p id="windstatus">Visibility</p>
          <h1 id="temper">
            {Number(props.dataDias.visibility.toFixed(2))}{" "}
            <p id="nomen">{props.checked == "metric" ? "m" : "mi"}</p>
          </h1>
        </div>
        <div className="Air">
          <p id="windstatus">Air Pressure</p>
          <h1 id="temper">
            {props.dataDias.main.pressure} <p id="nomen">mb</p>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Menu;
