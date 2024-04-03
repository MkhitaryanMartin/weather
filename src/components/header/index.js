import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {AppBar, Box, Toolbar} from '@mui/material';
import SearchForm from '../search-form';
import SelectVariants from "../../components/select";
import { temperatureScale } from "../../assets/data";
import { dispatchGeoLocation, dispatchRegion, dispatchStaticLoc } from "./utilits";
import { setError, setValue } from '../../store/waether/reducer';


export default function Header() {
    const dispatch = useDispatch();
    const {value, data } = useSelector((state) => state.weather);
   
  const onSetValue = (eventName, newValue) => {
        dispatch(setValue({eventName, newValue}))
        if (eventName === "searchValue" && newValue) {
          dispatch(setError())
          dispatchRegion(dispatch, newValue, value.temperature)
        }else{
          dispatchStaticLoc(dispatch, newValue, data.coord.lon, data.coord.lat,)
        }
      }
    
      useEffect(() => {
        if (!value.searchValue) {
          dispatchGeoLocation(dispatch,  value.temperature)
        }
      }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{background:"rgba(0, 0, 0, 0.4)"}}>
        <Toolbar sx={{display:"flex",justifyContent:"flex-end"}}>
   <Box display="flex" alignItems="center">
   <SelectVariants
        options={temperatureScale}
        value={value.temperature}
        eventName="temperature"
        handleChange={onSetValue}
      />
        <SearchForm onSubmit={onSetValue} eventName={"searchValue"}/>
   </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

