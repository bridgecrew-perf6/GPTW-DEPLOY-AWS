import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"product",
    initialState:{
        productInfo:[],
        pending:false,
        error:false,
    },
    reducers:{
        productupdateStart:(state) => {
            state.pending = true;
        },
        productupdateSuccess:(state,action) => {
            state.pending = false;
            state.productInfo = action.payload;
        },
        productupdateError:(state) => {
            state.error = true;
            state.pending = false;
        }
    },
});

export const {productupdateStart,productupdateSuccess,productupdateError} = productSlice.actions;

export default productSlice.reducer;
