import { Box } from "@mui/material";
import { getDayText } from "../../../utilits/getDay";
import { tempScale } from "../../../assets/data";
import rain from "../../../assets/img/rain.jpg"

export default function ForestBlockItem({
    data,
    temp
}) {
    return (
        <Box
            position="relative"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
                minWidth: { xs: "80%", sm: "300px", md: "350px" },
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",'& p': {m: "10px 0",color: "white"},
                m:"10px 5px"
            }}
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                zIndex="-10"
                sx={{
                    backgroundImage: `url(${rain})`,
                    backgroundSize: "cover",
                    filter: "blur(2px)",
                }}
            />

            <Box component="p" display="flex" alignItems="center">
                <img src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="weather" />
            </Box>
            <p> {getDayText(data["dt_txt"])}</p>
            <p>Temperature : {data?.main?.temp} {tempScale[temp]}</p>
            <p>Air humidity: {data?.main?.humidity}%</p>
            <p>Visibility: {data?.visibility}m</p>
            <p>Wind speed: {data?.wind?.speed}m/s</p>
            <p>Wind direction: {data?.wind?.deg}°</p>
            {data?.weather && <p>Description : {data?.weather[0]?.description}</p>}
        </Box>
    )
}