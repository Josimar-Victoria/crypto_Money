import { createSlice } from "@reduxjs/toolkit";

export const FreqSlice = createSlice({
    name: "freq",
    initialState: {
        freq:'24'
    },
    reducers: {
        SET_FREQ: (state, action) =>{
            state.freq = action.payload;
        }
    }
})
export const {SET_FREQ} = FreqSlice.actions;
export const seelectFreq = (state) => state.freq.freq;

export default FreqSlice.reducer;