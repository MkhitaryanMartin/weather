import { Box } from "@mui/material";
import { getDayText } from "../../../utilits/getDay";
import { tempScale } from "../../../assets/data";
import "./style.css"

export default function ForestBlockItem({
    data,
    temp
}) {
    return (
        <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        sx={{ minWidth: "360px", cursor:"pointer",
         background:"#7A54E1",
         '&:hover': {
           transform: "scale(1.1)",
        }}}
        m="10px"
        >
            <p className="p">
                {data?.city?.name} {getDayText(data["dt_txt"])}
                <img src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="weather" />
            </p>
            <p>Temperature : {data?.main?.temp} {tempScale[temp]}</p>
            <p>Air humidity in currencies: {data?.main?.humidity}%</p>
            <p>Visibility in meters: {data?.visibility}m</p>
            <p>Wind speed in meters per second : {data?.wind?.speed}m/s</p>
            <p>Wind direction in degrees : {data?.wind?.deg}°</p>
            {data?.weather && <p>Weather description : {data?.weather[0]?.description}</p>}
        </Box>
    )
}