

export const dispatchGeoLocation=(dispatch, fetchWeather, fetchForecast, units)=>{
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

export const dispatchRegion=(dispatch, fetchWeather, fetchForecast, q, units)=>{
    dispatch(fetchWeather({ name: "weather", q:q, units:units}))
      dispatch(fetchForecast({ name: "forecast", q:q, units:units }))
}

export const dispatchStaticLoc=(dispatch, fetchWeather, fetchForecast, units,lon, lat)=>{
  dispatch(fetchWeather({ name: "weather", lat, lon, units}))
  dispatch(fetchForecast({ name: "forecast", lat, lon, units}))
}