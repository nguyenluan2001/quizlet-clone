import { configureStore } from "@reduxjs/toolkit";
import CreateSetReducer from "./slices/createSetSlice"
import LearnReducer from "./slices/learnSlice"
export const store=configureStore({
    reducer:{
        "createSet":CreateSetReducer,
        'learn':LearnReducer
    }
})