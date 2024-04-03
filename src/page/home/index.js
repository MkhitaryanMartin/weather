import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WeatherBlock from "../../components/home/weather-block";
import ForecastBlock from "../../components/home/forecast-block";
import CustomizedSnackbars from "../../components/snackbar";
import { Box } from "@mui/material";
import background from "../../assets/img/background.jpg";
import rain from "../../assets/img/rain.jpg";
import rough from "../../assets/img/rough.avif"


function Home() {
  const { data, loader, value, error } = useSelector((state) => state.weather);
  const { data: forecastData } = useSelector((state) => state.forecast);
  const [open, setOpen] = useState(!!error);
  
  const handleClose = () => {
    setOpen(false);
  };

useEffect(()=>{
if(error){
  setOpen(!!error)
 
}
},[error])
console.log(data)
return (
    <Box position="relative" minHeight={"93vh"}>
     <Box
         position="absolute"
         top="0"
         left="0"
         right="0"
         bottom="0"
         zIndex="-10"
         
         sx={{
          //  backgroundImage: `url(${rough})`,
          //  backgroundSize: "cover",
          //  filter: "blur(2px)", 
           background:"rgba(0, 0, 0, 0.8)"
         }}
/>
{data && <WeatherBlock data={data} temp={value.temperature} loader={loader}/>}
      {forecastData?.list && <ForecastBlock data={forecastData} temp={value.temperature}/>}
      <CustomizedSnackbars open={open} handleClose={handleClose} text={error}/>
    </Box>
  )
}


export default Home;