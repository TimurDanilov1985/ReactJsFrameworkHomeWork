import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMensWatches = createAsyncThunk("mensWatches/fetchMensWatches",

    async (_, thunkApi) => {
        try {
            const response = await fetch('https://dummyjson.com/products/category/mens-watches');
            if (!response.ok) {
                throw new Error({ message: response.message });
            }
            const data = await response.json();
            return data.products;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const mensWatchesSlice = createSlice({
    name: "mensWatches",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMensWatches.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMensWatches.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchMensWatches.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default mensWatchesSlice.reducer;