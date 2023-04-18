// nơi tạo reducer riêng của từng module
import { createSlice } from "@reduxjs/toolkit";


// ở đây còn thiếu thunk
// export const getBanner = createAsyncThunk("home/getBanner", async (_, { rejectWithValue, dispatch }) => {
//     try {
//       const homebanner = (await API_HOME.getBanner(EBANNER_TYPE.home)).data;
//       const topickbanner = (await API_HOME.getBanner(EBANNER_TYPE.topick)).data;
//       const middlebanner = (await API_HOME.getBanner(EBANNER_TYPE.middle)).data;

//       return [...homebanner, ...topickbanner, ...middlebanner];
//     } catch (error: any) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response);
//     }
//   });

// tạo slide
const homeSlice = createSlice({
    name: "home",
    initialState: "",


    reducers: {
        resetInitialState(state) { },
    },
    extraReducers: (builder) => {
        //   định nghĩa các actions ở đây

        // builder
        // .addCase(getBanner.pending, (state) => {
        //     state.loading = true;
        //   })
        //   .addCase(getBanner.fulfilled, (state, action: PayloadAction<Array<NHOME_MODEL.IBanner>>) => {
        //     state.loading = false;
        //     state.list = action.payload;
        //     state.error = null;
        //   })
        //   .addCase(getBanner.rejected, (state, action: PayloadAction<any>) => {
        //     // Cookies.remove("br_tk");

        //     state.loading = false;
        //     state.list = [];
        //     state.error = action.payload;
        //   });

    },
});

// Actions

export const homeAction = homeSlice.actions;

// Selectors
// export const selecthome = (state: RootState) => state.home;

// Reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;
