import React from "react";
import { Box } from "@mui/material";
import { tempScale } from "../../../assets/data";

const WeatherBlock = ({
   data,
   temp
})=>{
    return (
       <Box>
         <p>Temperature : {data?.main?.temp} {tempScale[temp]}</p>
      <p>Air humidity : {data?.main?.humidity}</p>
      <p>Visibility : {data?.visibility}</p>
      <div>
      <p>Wind speed in meters per second : {data?.wind?.speed}</p>
      <p>Wind direction in degrees : {data?.wind?.deg}</p>
      </div>
      <p>Weather description : {data?.weather && data?.weather[0]?.description}</p>
       </Box>
    )
}

export default WeatherBlock;