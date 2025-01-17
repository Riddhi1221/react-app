import { configureStore } from "@reduxjs/toolkit";
import  CounterSlice  from "./CountSlice";

export default configureStore({
    reducer : {
        "demo" : CounterSlice
    }
})