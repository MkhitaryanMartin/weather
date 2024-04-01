import { createAsyncThunk } from "@reduxjs/toolkit";
import WeatherService from "../../service/weatherService";


export const fetchWeather=createAsyncThunk(
    "fetchWeather",
     async (params, thunkApi)=>{
        try {
            const res = await WeatherService.fetchWeather(params);
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)