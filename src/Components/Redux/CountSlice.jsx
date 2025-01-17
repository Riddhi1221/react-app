import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name : "demo",
    initialState : {
        count : 0,
    },
    reducers : {
        ince : (state) => {
            state.count = state.count + 1
        },
        dec : (state) => {
            state.count -= 1
        },
        inceByValue : (state ,action) => {
            console.log(action.payload);
            state.count += action.payload
        }
    }
})

export const {ince , dec , inceByValue} = CounterSlice.actions
export default CounterSlice.reducer
