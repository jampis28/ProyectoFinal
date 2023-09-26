import { useEffect, useState } from "react";
import "./App.css";
import Services from "./Services/Services";
import App2 from "./components/App2/App2";
import Shower from "../weather-app-master/weather-app-master/Shower.png";
import bg from "../weather-app-master/weather-app-master/Cloud-background.png";
import Snow from "../weather-app-master/weather-app-master/Snow.png";
import Clouds from "../weather-app-master/weather-app-master/HeavyCloud.png";
import Clear from "../weather-app-master/weather-app-master/Clear.png";
import Rain from "../weather-app-master/weather-app-master/HeavyRain.png";
import Sleet from "../weather-app-master/weather-app-master/Sleet.png";
import Hail from "../weather-app-master/weather-app-master/Hail.png";
import Haze from "../weather-app-master/weather-app-master/Hail.png";
import Thunderstorm from "../weather-app-master/weather-app-master/Thunderstorm.png";
import LightCloud from "../weather-app-master/weather-app-master/LightCloud.png";
import LightRain from "../weather-app-master/weather-app-master/LightRain.png";

import location from "../weather-app-master/weather-app-master/my_location.svg";
import search from "../weather-app-master/weather-app-master/search.png";
import close from "../weather-app-master/weather-app-master/close.svg";
import navigation from "../weather-app-master/weather-app-master/navigation.svg";

function App() {
  const {
    data,
    data2,
    handleClick,
    busqueda,
    city,
    setCity,
    getLocationAndWeather,
    fechas,
    chekeado,
    checked,
  } = Services();
  const clima = [
    { name: "Snow", img: Snow },
    { name: "Shower", img: Shower },
    { name: "Clouds", img: Clouds },
    { name: "Clear", img: Clear },
    { name: "Rain", img: Rain },
    { name: "Sleet", img: Sleet },
    { name: "Hail", img: Hail },
    { name: "Thunderstorm", img: Thunderstorm },
    { name: "LightCloud", img: LightCloud },
    { name: "LightRain", img: LightRain },
    { name: "Haze", img: Haze },
  ];
  return (
    <>
      {data2 && (
        <App2
          bg={bg}
          data={data}
          data2={data2}
          click={handleClick}
          submit={busqueda}
          location={location}
          input={city}
          aginput={setCity}
          fnLocation={getLocationAndWeather}
          fechas={fechas}
          buscar={search}
          modalcerrar={close}
          fnChekeado={chekeado}
          checked={checked}
          navigation={navigation}
          climaimg={clima}
        />
      )}
    </>
  );
}

export default App;
