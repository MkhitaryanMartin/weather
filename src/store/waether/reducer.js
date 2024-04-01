import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./action";

const initialState = {
    data:{},
    loader: false,
    error:"",
}

const weatherReducer = createSlice({
    name:"weather",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchWeather.fulfilled, (state, action)=>{
            state.data = action.payload
                   
        })
    }
});


export default weatherReducer.reducer;