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

            <Box display="flex" p="5%">
             <Scroller>
             {data.list.map((data) => {
                    return <ForestBlockItem data={data} temp={temp} key={data?.dt_txt}/>
                })}
             </Scroller>
            </Box>
        </Box>
    )
}

export default ForecastBlock;