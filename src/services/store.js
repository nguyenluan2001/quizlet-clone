import { configureStore } from "@reduxjs/toolkit";
import CreateSetReducer from "./slices/createSetSlice"
import LearnReducer from "./slices/learnSlice"
import WriteReducer from "./slices/writeSlice"
export const store=configureStore({
    reducer:{
        "createSet":CreateSetReducer,
        'learn':LearnReducer,
        "write":WriteReducer
    }
})