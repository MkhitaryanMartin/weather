import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WeatherBlock from "../../components/home/weather-block";
import ForecastBlock from "../../components/home/forecast-block";
import CustomizedSnackbars from "../../components/snackbar";
import { Box, Button} from "@mui/material";
import Loader from "../../components/loader";
import Map from "../../components/map";


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
    <Map/>
{loader ? <Loader/> : data && <WeatherBlock data={data} temp={value.temperature} loader={loader}/>}
      {forecastData?.list && <ForecastBlock data={forecastData} temp={value.temperature}/>}
      <CustomizedSnackbars open={open} handleClose={handleClose} text={error}/>
    </Box>
  )
}


export default Home;