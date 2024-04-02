import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchForm from '../search-form';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/waether/action";
import { fetchForecast } from "../../store/forecast/action";
import SelectVariants from "../../components/select";
import { temperatureScale } from "../../assets/data";
import { dispatchGeoLocation, dispatchRegion } from "./utilits";
import { setValue } from '../../store/waether/reducer';




export default function Header() {
    const dispatch = useDispatch();
    const { data, loader, value } = useSelector((state) => state.weather);
    const { data: forecastData } = useSelector((state) => state.forecast);
 
    const onSetValue = (eventName, newValue) => {
        dispatch(setValue({eventName, newValue}))
        if (eventName === "searchValue" && newValue) {
          dispatchRegion(dispatch, fetchWeather, fetchForecast, newValue, value.units)
        } else {
          dispatchGeoLocation(dispatch, fetchWeather, fetchForecast, value.temperature)
        }
      }
    
      useEffect(() => {
        if (!value.searchValue) {
          dispatchGeoLocation(dispatch, fetchWeather, fetchForecast, value.temperature)
        }
      }, [value.temperature])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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