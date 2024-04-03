import React from "react";
import { Box } from "@mui/material";
import Scroller from "../../scroller";
import ForestBlockItem from "./forest-block-item";

const ForecastBlock = ({
    data,
    temp,
    loader
}) => {
    return (
        <Box textAlign="center">

            <Box display="flex"  sx={{p:{xs:"5px", md:"0 5%"}}}>
             <Scroller>
             {data.list.filter((item,i)=>{
               if(item["dt_txt"].split(" ")[1].includes("12:00")){
                return true
               }
             }).map((data) => {
                    return <ForestBlockItem data={data} temp={temp} key={data?.dt_txt}/>
                })}
             </Scroller>
            </Box>
        </Box>
    )
}

export default ForecastBlock;