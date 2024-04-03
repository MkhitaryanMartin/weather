import { createAsyncThunk } from "@reduxjs/toolkit";
import WeatherService from "../../service/weatherService";


export const fetchForecast=createAsyncThunk(
    "fetchForecast",
     async (params, thunkApi)=>{
        try {
            const res = await WeatherService.fetchWeather(params);
            console.log(res.data)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)