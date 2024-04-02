import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./action";

const initialState = {
    data:{},
    loader: false,
    error:"",
    value: {
        searchValue: "",
        temperature: "standard"
      }
}

const weatherReducer = createSlice({
    name:"weather",
    initialState: initialState,
    reducers:{
        setValue : (state, action)=>{
            state.value = {...state.value, [action.payload.eventName]: action.payload.newValue}
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchWeather.fulfilled, (state, action)=>{
            state.data = action.payload
            state.loader = false
                   
        })
        .addCase(fetchWeather.pending, (state, action)=>{
            state.loader = true
                   
        })
    }
});

export const {setValue} = weatherReducer.actions
export default weatherReducer.reducer;