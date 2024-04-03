import $api from "../http";

export default class WeatherService{
    static fetchWeather(params){
        return $api.get(params.name,{
            params: {
                lat: params.lat,
                lon: params.lon,
                q: params.q,
                units: params.units,
                appid: process.env.REACT_APP_API_KEY
            }
        })
    }
}