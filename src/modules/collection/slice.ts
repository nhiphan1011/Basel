// nơi tạo reducer riêng của từng module
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import shopApi from "api/shopApi";
import { SLICE_INIT } from "modules/collection";

export const getProductList = createAsyncThunk(
    "product/getProductList",
    async ({ offset, limit }: { offset: number, limit: number }) => {
        try {
            const result = await shopApi.getAllProduct({ offset, limit })
            if (result) {
                return result
            }
        } catch (error) {
            console.log('Error Get data')
        }
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
                state.loading = true
            })
            .addCase(getProductList.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.list = action.payload.products;
                state.total = action.payload.total;
                state.err = null;
            })
            .addCase(getProductList.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.list = [];
                state.total = 0;
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
