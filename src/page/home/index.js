import { useDispatch, useSelector } from "react-redux";
import WeatherBlock from "../../components/home/weather-block";
import ForecastBlock from "../../components/home/forecast-block";


function Home() {
  const { data, loader, value } = useSelector((state) => state.weather);
  const { data: forecastData } = useSelector((state) => state.forecast);
console.log(forecastData)
return (
    <>
      {data && <WeatherBlock data={data} temp={value.temperature} loader={loader} />}
      {forecastData?.list && <ForecastBlock data={forecastData} temp={value.temperature}/>}
    </>
  )
}


export default Home;