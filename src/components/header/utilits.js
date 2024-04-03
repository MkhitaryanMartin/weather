import { fetchForecast} from "../../store/forecast/action";
import { fetchWeather } from "../../store/waether/action";

export const dispatchGeoLocation=(dispatch, units)=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather({ name: "weather", lat: latitude, lon: longitude, units}))
          dispatch(fetchForecast({ name: "forecast", lat: latitude, lon: longitude, units}))
        }, (error) => {
          console.error('Error getting location:', error);
        });
      } else {
        console.error('Geolocation is not available in your browser');
      }
}

export const dispatchRegion=(dispatch, q, units)=>{
    dispatch(fetchWeather({ name: "weather", q:q, units:units}))
      dispatch(fetchForecast({ name: "forecast", q:q, units:units }))
}

export const dispatchStaticLoc=(dispatch, units,lon, lat)=>{
  dispatch(fetchWeather({ name: "weather", lat, lon, units}))
  dispatch(fetchForecast({ name: "forecast", lat, lon, units}))
}