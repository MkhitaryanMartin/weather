import { createAsyncThunk } from "@reduxjs/toolkit";
import WeatherService from "../../service/weatherService";
import axios from "axios";


export const fetchWeather=createAsyncThunk(
    "fetchWeather",
     async (params, thunkApi)=>{
        try {
            const res = await WeatherService.fetchWeather(params);
            
            if(res.data.sys.country){
                let countriRes= await axios.get(`https://restcountries.com/v3.1/alpha/${res.data.sys.country}?fields=name,flags`)
              return {...res.data, country:countriRes.data}
            
            }else{
                return res.data
            }
            
        } catch (error) {
            if(error.response.status ===  404){
                return thunkApi.rejectWithValue("This location was not found")
            }
            return thunkApi.rejectWithValue(error.message)
        }
    }
)