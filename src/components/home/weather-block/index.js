import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { tempScale } from "../../../assets/data";

const WeatherBlock = ({
   data,
   temp,
   loader
}) => {
   return (
     <Box display="flex" justifyContent="space-between" p="5%">
      <Typography variant="h1">
         {data.name}
      </Typography>
       <Box display="flex" flexDirection="column" alignItems="flex-start">
         {loader ? <p>loader</p> : <p>Temperature : {data?.main?.temp} {tempScale[temp]}</p>}
         <p>Air humidity in currencies: {data?.main?.humidity}%</p>
         <p>Visibility in meters: {data?.visibility}m</p>
         <p>Wind speed in meters per second : {data?.wind?.speed}m/s</p>
         <p>Wind direction in degrees : {data?.wind?.deg}°</p>
        {data?.weather &&  <Box display="flex">
            <p>Weather description : {data?.weather[0]?.description}</p>
            <img src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="weather" />
         </Box> }
      </Box>
     </Box>
   )
}

export default WeatherBlock;