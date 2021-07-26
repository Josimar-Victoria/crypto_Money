import { configureStore } from "@reduxjs/toolkit";
import crytoReducer from "../Features/CryptoSlice"

export default configureStore({
    reducer: {
        crypto: crytoReducer,
    }
})