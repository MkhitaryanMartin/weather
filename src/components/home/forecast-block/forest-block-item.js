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
            sx={{
                minWidth: {xs:"280px", md:"360px"},
                cursor: "pointer",
                background: "rgba(0, 0, 0, 0.9)",
                '&:hover': {
                    transform: "scale(1.1)",
                },
                '& p': {
                    m: "15px 0",
                    color: "white"
                },
            }}

            m="10px 20px 0 0"
        >
            <Box component="p" display="flex" alignItems="center">
                {getDayText(data["dt_txt"])}
                <img src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="weather" />
            </Box>
            <p>Temperature : {data?.main?.temp} {tempScale[temp]}</p>
            <p>Air humidity: {data?.main?.humidity}%</p>
            <p>Visibility: {data?.visibility}m</p>
            <p>Wind speed  : {data?.wind?.speed}m/s</p>
            <p>Wind direction : {data?.wind?.deg}°</p>
            {data?.weather && <p>Weather description : {data?.weather[0]?.description}</p>}
        </Box>
    )
}