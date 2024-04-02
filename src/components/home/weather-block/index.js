import React from "react";
import { Box, Typography } from "@mui/material";
import { tempScale } from "../../../assets/data";

const WeatherBlock = ({
   data,
   temp,
   loader
}) => {
   return (
     <Box 
     display="flex" 
     flexDirection="column"
     alignItems="flex-start"
     p="5%" 
     sx={{ background:"rgba(0, 0, 0, 0.5)"}}
     >
      <Typography variant="h1" sx={{
         color:"white",
         fontSize: {
            xs: '2rem', 
            md: '5rem',
          }
         }} >
         {data.name}
      </Typography>
       <Box 
       display="flex"
        flexDirection="column" 
        alignItems="flex-start" 
        sx={{ '& p': {
      whiteSpace: 'nowrap',
      m:"15px 0",
      color:"white",
    }}}
        >
        <p>Temperature : {data?.main?.temp} {tempScale[temp]}</p>
         <p>Air humidity: {data?.main?.humidity}%</p>
         <p>Visibility: {data?.visibility}m</p>
         <p>Wind speed: {data?.wind?.speed}m/s</p>
         <p>Wind direction: {data?.wind?.deg}°</p>
        {data?.weather &&  <Box display="flex">
            <p>Weather description : {data?.weather[0]?.description}</p>
            <img src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="weather" />
         </Box> }
      </Box>
     </Box>
   )
}

export default WeatherBlock;