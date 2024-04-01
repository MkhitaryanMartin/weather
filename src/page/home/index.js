import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/waether/action";
import WeatherBlock from "../../components/home/weather-block";
import { fetchForecast } from "../../store/forecast/action";
import Form from "../../components/form";
import { icons } from "../../components/svg/weather";
import isDaytime from "../../utilits/isDay";
import SelectVariants from "../../components/select";
import { temperatureScale } from "../../assets/data";



function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.weather);
  const { data: forecastData } = useSelector((state) => state.forecast);
  const [value, setValue] = useState({
    searchValue: "",
    temperature: "standard"
  })


const onSetValue = (eventName, newValue)=>{
  console.log(eventName)
  setValue({...value, [eventName]: newValue})
}

  useEffect(() => {
   if(!value.searchValue){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(fetchWeather({ name: "weather", lat: latitude, lon: longitude, units: value.temperature }))
        dispatch(fetchForecast({ name: "forecast", lat: latitude, lon: longitude, units: value.temperature }))
      }, (error) => {
        console.error('Ошибка при получении местоположения:', error);
      });
    } else {
      console.error('Геолокация недоступна в вашем браузере');
    }
   }
  }, [value.temperature])

  useEffect(() => {
    if (value.searchValue) {
      dispatch(fetchWeather({ name: "weather", q: value.searchValue, units: value.temperature }))
      dispatch(fetchForecast({ name: "forecast", q: value.searchValue, units: value.temperature }))
    }
  }, [value.searchValue])


  return (
    <>
      {data && <WeatherBlock data={data} temp={value.temperature}/>}
      <Form onSubmit={onSetValue} eventName={"searchValue"}/>
      {icons["clear sky"](isDaytime(data?.sys?.sunrise, data?.sys?.sunset))}
      <SelectVariants options={temperatureScale} value={value.temperature} eventName="temperature" handleChange={onSetValue}/>
    </>
  )
}


export default Home;