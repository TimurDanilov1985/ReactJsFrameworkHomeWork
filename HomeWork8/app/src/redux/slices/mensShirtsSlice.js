import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMensShirts = createAsyncThunk("mensShirts/fetchMensShirts",

    async (_, thunkApi) => {
        try {
            const response = await fetch('https://dummyjson.com/products/category/mens-shirts');
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

const mensShirtsSlice = createSlice({
    name: "mensShirts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMensShirts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMensShirts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchMensShirts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default mensShirtsSlice.reducer;