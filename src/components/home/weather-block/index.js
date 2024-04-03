import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { tempScale } from "../../../assets/data";
import ItemWeather from "../itemWeather";
import  imiges from "../../../assets/img"

const WeatherBlock = ({
   data,
   temp,
   loader
}) => {
   return (
      <Box
         display="flex"
         alignItems="flex-end"
         p="0 2%"
      >
         <Grid container 
         columnGap="5px"
         rowGap="10px"
         sx={{"& p":{
            color:"white",
         },
         justifyContent:{
            xs:"center",
            sm:"space-around",
            md:"space-between"
         },
         "& > *":{
            padding: "5px 0"
         }
         }}>
            <Grid item md={12} sm={12} xs={12}  container display="flex" alignItems="center" >
            <Typography variant="h1" mr="10px" sx={{color: "white",fontSize:{xs: '2rem',md: '5rem',}, }}>
            {data.country.name.common}
         </Typography>
            <Typography variant="h2"  sx={{color: "white",fontSize: {xs: '2rem', md: '3rem',},"& img":{m:"0 20px", width:{md:"100px", xs:"50px"}}}}>
            {data.name}
            <img src={data.country.flags.png} alt="flag"/>
         </Typography>
            </Grid>
            <ItemWeather>
            <p>Temperature</p>
            <img src={imiges.temperature} alt="" width="30"/>
            <p>{data?.main?.temp} {tempScale[temp]}</p>
            </ItemWeather>
            <ItemWeather> 
            <p>Air humidity</p>
            <img src={imiges.humdity} alt="" width="40"/>
            <p>{data?.main?.humidity}%</p>
            </ItemWeather>
            <ItemWeather>
           <p> Visibility</p>
           <img src={imiges.visibliti} alt="" width="30"/>
           <p>{data?.visibility}m</p>
            </ItemWeather>
            <ItemWeather>
            <p>Wind speed</p>
            <img src={imiges.windSpid} alt="" width="30"/>
            <p>{data?.wind?.speed}m/s</p>
            </ItemWeather>
            <ItemWeather>
            <p>Wind direction</p>
            <img src={imiges.windD} alt="" width="30"/>
            <p>{data?.wind?.deg}°</p>
            </ItemWeather>
            <ItemWeather >
            <p>Description </p>
               <img src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="weather"  width="30"/>
               <p>{data?.weather[0]?.description}</p>
            </ItemWeather>
         </Grid>

         </Box>
   )
}

export default WeatherBlock;

   {/* <ItemWeather data={data} temp={tempScale[temp]}/>
            {
            data?.weather && <Box display="flex">
               <p>Description : {data?.weather[0]?.description}</p>
               <img src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="weather" />
            </Box>
            } */}