// nơi tạo reducer riêng của từng module
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import shopApi from "api/shopApi";
import axios from "axios";
import { SLICE_INIT } from "modules/collection";

export const getProductList = createAsyncThunk(
    "product/getProductList",
    async ({ offset, limit }: { offset: number, limit: number }) => {
        const result = await shopApi.getAllProduct(offset, limit)
        if (result) return result.data
        else console.log('Error Get data')
    }
);
// tạo slide
const productSlice = createSlice({
    name: "product",
    initialState: SLICE_INIT,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductList.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProductList.fulfilled, (state, action: PayloadAction<Array<any>>) => {
                state.loading = false;
                state.list = action.payload;
                state.err = null;
            })
            .addCase(getProductList.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.list = [];
                state.err = action.payload;
            });
    },
});

// Actions

export const productAction = productSlice.actions;

// Selectors
// export const selecthome = (state: RootState) => state.home;

// Reducer
const productReducer = productSlice.reducer;
export default productReducer;
