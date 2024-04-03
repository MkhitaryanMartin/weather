import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./action";

const initialState = {
    data:null,
    loader: false,
    error:"",
    value: {
        searchValue: "",
        temperature: "metric"
      }
}

const weatherReducer = createSlice({
    name:"weather",
    initialState: initialState,
    reducers:{
        setValue : (state, action)=>{
            state.value = {...state.value, [action.payload.eventName]: action.payload.newValue}
        },
        setError : (state, action)=>{
            state.error = ""
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchWeather.fulfilled, (state, action)=>{
            state.data = action.payload
            state.loader = false
            state.error = ""
                   
        })
        .addCase(fetchWeather.pending, (state, action)=>{
            state.loader = true
                   
        })
        .addCase(fetchWeather.rejected, (state, action)=>{
            state.error = action.payload;
            state.loader = false
                   
        })
    }
});

export const {setValue, setError} = weatherReducer.actions
export default weatherReducer.reducer;