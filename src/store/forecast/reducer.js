import { createSlice } from "@reduxjs/toolkit";
import { fetchForecast } from "./action";

const initialState = {
    data:{},
    loader: false,
    error:"",
}

const forecastReducer = createSlice({
    name:"forecast",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchForecast.fulfilled, (state, action)=>{
            state.data = action.payload
                   
        })
    }
});


export default forecastReducer.reducer;