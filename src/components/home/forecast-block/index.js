import React from "react";
import { Box } from "@mui/material";
import { tempScale } from "../../../assets/data";
import { getDayText } from "../../../utilits/getDay";

const ForecastBlock = ({
   data,
   temp,
   loader
}) => {
   return (
     <Box display="flex">
{data.list.map((data)=>{
   return  <Box display="flex" flexDirection="column" alignItems="flex-start" flex={1} key={data.dt_txt} sx={{minWidth:"500px"}}>
     <p>Temperature : {data?.main?.temp} {tempScale[temp]}</p>
     <p>{getDayText(data["dt_txt"])}</p>
      <p>Air humidity in currencies: {data?.main?.humidity}%</p>
      <p>Visibility in meters: {data?.visibility}m</p>
      <p>Wind speed in meters per second : {data?.wind?.speed}m/s</p>
      <p>Wind direction in degrees : {data?.wind?.deg}°</p>
     {data?.weather &&  <Box display="flex">
         <p>Weather description : {data?.weather[0]?.description}</p>
         <img src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="weather" />
      </Box> }
   </Box>
})}
     </Box>
   )
}

export default ForecastBlock;