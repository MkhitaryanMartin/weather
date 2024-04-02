import { createAsyncThunk } from "@reduxjs/toolkit";
import WeatherService from "../../service/weatherService";


export const fetchWeather=createAsyncThunk(
    "fetchWeather",
     async (params, thunkApi)=>{
        try {
            const res = await WeatherService.fetchWeather(params);
            return res.data
        } catch (error) {
            if(error.response.status ===  404){
                return thunkApi.rejectWithValue("This location was not found")
            }
            return thunkApi.rejectWithValue(error.message)
        }
    }
)