import { configureStore } from "@reduxjs/toolkit";
import CreateSetReducer from "./slices/createSetSlice"
export const store=configureStore({
    reducer:{
        "createSet":CreateSetReducer
    }
})