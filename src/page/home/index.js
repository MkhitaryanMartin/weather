import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/waether/action";
import WeatherBlock from "../../components/home/weather-block";
import { fetchForecast } from "../../store/forecast/action";



function Home() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.weather)
    const {data: forecastData} = useSelector((state)=> state.forecast)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
              const { latitude, longitude } = position.coords;
              dispatch(fetchWeather({ name: "weather", lat: latitude, lon:longitude,  units: "metric" }))
              dispatch(fetchForecast({ name: "forecast", lat: latitude, lon:longitude,  units: "metric" }))
            }, (error) => {
              console.error('Ошибка при получении местоположения:', error);
            });
          } else {
            console.error('Геолокация недоступна в вашем браузере');
          }
    }, [])

   console.log(forecastData)
    return (
        <>
{data && <WeatherBlock data={data}/>}
        </>
    )
}


export default Home;