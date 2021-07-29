import { createSlice } from "@reduxjs/toolkit";

export const cryptoSlice = createSlice({
    name: "crypto",
    initialState: {
        crypto: ["bitcoin", "ethereum", "cardano", "litecoin"]
    },
    reducers: {
        SET_CRYPTO: (state, action) => {
            state.crypto = action.payload;
        },
        DELETE_CRYPTO: (state, action) => {
            state.crypto = action.payload;
        },
        ADD_CRYPTO: (state, action) => {
            state.crypto = action.payload;
        }
        
    },
})

export const { SET_CRYPTO, DELETE_CRYPTO, ADD_CRYPTO } = cryptoSlice.actions
export const selectCrypto = (state) => state.crypto.crypto

export default cryptoSlice.reducer