import { useEffect, useState } from "react";
import { format } from "date-fns";
function Services() {
  const [city, setCity] = useState("esmeraldas");
  const [cambio, setCambio] = useState(false);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [location, setLocation] = useState([]);
  const [fechas, setFechas] = useState([]);
  const [checked, setchecked] = useState("metric");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          cambio
            ? `&lat=${location.latitude}&lon=${location.longitude}`
            : `${city}`
        }&units=${checked}&appid=f884dfb11487f89e30a14b7d1d9d2d5c`
      );
      const datos = await res.json();
      setData(datos);
    };
    Fechas();
    getData();
  }, [city, location,checked]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          cambio
            ? `&lat=${location.latitude}&lon=${location.longitude}`
            : `${city}`
        }&units=${checked}&appid=f884dfb11487f89e30a14b7d1d9d2d5c`
      );
      const datos = await res.json();
      setData2(datos);
    };
    Fechas();
    getData();
  }, [city, location,checked]);
  const busqueda = (e) => {
    setCambio(false);
    e.preventDefault();
    const ciudad = e.target[0].value;
    setCity(ciudad.toLowerCase());
  };

  const handleClick = (e) => {
    setCambio(false);
    const ciudad = e.target.value;
    setCity(ciudad.toLowerCase());
  };
  const getLocationAndWeather = () => {
    setCambio(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation({ latitude, longitude });
        setCity(data.name);
        console.log(location);
        
      });
    }
  };
  const Fechas = () =>{

      const fechanumero = data2&&(data2.list[1].dt_txt)
      const fecha = new Date(fechanumero)
      const nombreDelDia1 = format(fecha, "EE")
      const numeroDelDia1 = fecha.getDate()
      const Mes = fecha.toLocaleDateString("es-ES", { month: "short" })
  
      const fechanumero2 = data2&&(data2&&(data2.list[9].dt_txt))
      const fecha2 = new Date(fechanumero2)
      const nombreDelDia2 = format(fecha2, "EE")
      const numeroDelDia2 = fecha2.getDate()
      const Mes2 = fecha2.toLocaleDateString("es-ES", { month: "short" })
  
      const fechanumero3 = data2&&(data2.list[17].dt_txt)
      const fecha3 = new Date(fechanumero3)
      const nombreDelDia3 = format(fecha3, "EE")
      const numeroDelDia3 = fecha3.getDate()
      const Mes3 = fecha3.toLocaleDateString("es-ES", { month: "short" })
  
      const fechanumero4 = data2&&(data2.list[25].dt_txt)
      const fecha4 = new Date(fechanumero4)
      const nombreDelDia4 = format(fecha4, "EE")
      const numeroDelDia4 = fecha4.getDate()
      const Mes4 = fecha4.toLocaleDateString("es-ES", { month: "short" })
  
      const fechanumero5 = data2&&(data2.list[33].dt_txt)
      const fecha5 = new Date(fechanumero5)
      const nombreDelDia5 = format(fecha5, "EE")
      const numeroDelDia5 = fecha5.getDate()
      const Mes5 = fecha5.toLocaleDateString("es-ES", { month: "short" })
  
      const fecha6 = new Date();
      const nombreDelDia6 = format(fecha6, "EE")
      const numeroDelDia6 = fecha6.getDate()
      const Mes6 = fecha6.toLocaleDateString("es-ES", { month: "short" })
      const hora = fecha6.getHours();

    return (setFechas({
      nombreDelDia1,numeroDelDia1,Mes,
      nombreDelDia2,numeroDelDia2,Mes2,
      nombreDelDia3,numeroDelDia3,Mes3,
      nombreDelDia4,numeroDelDia4,Mes4,
      nombreDelDia5,numeroDelDia5,Mes5,
      nombreDelDia6,numeroDelDia6,Mes6,hora
      
    }));
  };
  const chekeado = (e) =>{
    e.preventDefault()
    console.log("hola");
    const chekeador = e.target.checked
    if (chekeador==true) {
      setchecked("imperial")
      console.log("listo");
    }else{
      setchecked("metric")
      console.log("mal");
    }
  };
  return {
    data,
    data2,
    busqueda,
    handleClick,
    city,
    setCity,
    getLocationAndWeather,
    fechas,
    Fechas,
    chekeado,
    checked,
  };
}

export default Services;
