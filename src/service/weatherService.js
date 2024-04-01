import $api from "../http";

export default class WeatherService{
    static fetchWeather(params){
   if(params.lat && params.lon){
    return $api.get(params.name,{
        params: {
            lat: params.lat,
            lon: params.lon,
            units: params.units,
            appid: process.env.REACT_APP_API_KEY
        }
    })
   }else{
    return $api.get(params.name,{
        params: {
            q: params.q,
            units: params.units,
            appid: process.env.REACT_APP_API_KEY
        }
    })
   }
    }
}