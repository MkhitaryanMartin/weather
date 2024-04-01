import {configureStore, combineReducers } from "@reduxjs/toolkit";
import weather from "./waether/reducer";
import forecast from "./forecast/reducer";


const rootReducer = combineReducers({weather, forecast});

const store = configureStore({reducer: rootReducer})

export default store