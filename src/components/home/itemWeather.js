import { Grid } from "@mui/material";

export default function ItemWeather({children}) {
    return (
        <Grid
        height="100px"
         container
        item 
        sx={{background:"rgba(0, 0, 0, 0.5)", borderRadius:"10px"}} 
        md={1.9}
        sm={5.9}
        xs={10}
        display="flex" 
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        >
        {children}
        </Grid>
    )
}