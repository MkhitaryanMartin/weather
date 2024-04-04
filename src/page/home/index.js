import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WeatherBlock from "../../components/home/weather-block";
import ForecastBlock from "../../components/home/forecast-block";
import CustomizedSnackbars from "../../components/snackbar";
import { Box} from "@mui/material";
import Loader from "../../components/loader";


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

return (
    <Box position="relative" minHeight={"93vh"} minWidth="280px">
     <Box
         position="absolute"
         top="0"
         left="0"
         right="0"
         bottom="0"
         zIndex="-10"
         sx={{background:"rgba(0, 0, 0, 0.8)"}}
/>
{loader ? <Loader/> : data && <WeatherBlock data={data} temp={value.temperature} loader={loader}/>}
      {forecastData?.list && <ForecastBlock data={forecastData} temp={value.temperature}/>}
      <CustomizedSnackbars open={open} handleClose={handleClose} text={error}/>
    </Box>
  )
}


export default Home;