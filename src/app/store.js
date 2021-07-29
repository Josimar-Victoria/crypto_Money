import { configureStore } from "@reduxjs/toolkit";
import crytoReducer from "../Features/CryptoSlice"
import freqReducer from '../Features/FreqSlice'
export default configureStore({
    reducer: {
        crypto: crytoReducer,
        freq: freqReducer
    }
})