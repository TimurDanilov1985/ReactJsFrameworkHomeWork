import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWoomensDresses = createAsyncThunk("woomensDresses/fetchWoomensDresses",

    async (_, thunkApi) => {
        try {
            const response = await fetch('https://dummyjson.com/products/category/womens-dresses');
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

const woomensDressesSlice = createSlice({
    name: "woomensDresses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWoomensDresses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWoomensDresses.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchWoomensDresses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default woomensDressesSlice.reducer;