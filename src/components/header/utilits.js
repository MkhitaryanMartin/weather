

export const dispatchGeoLocation=(dispatch, fetchWeather, fetchForecast, units)=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather({ name: "weather", lat: latitude, lon: longitude, units}))
          dispatch(fetchForecast({ name: "forecast", lat: latitude, lon: longitude, units}))
        }, (error) => {
          console.error('Ошибка при получении местоположения:', error);
        });
      } else {
        console.error('Геолокация недоступна в вашем браузере');
      }
}

export const dispatchRegion=(dispatch, fetchWeather, fetchForecast, q, units)=>{
  console.log(q, units)
    dispatch(fetchWeather({ name: "weather", q:q, units:units}))
      dispatch(fetchForecast({ name: "forecast", q:q, units:units }))
}