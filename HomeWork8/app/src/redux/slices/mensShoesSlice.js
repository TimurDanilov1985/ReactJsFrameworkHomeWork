import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMensShoes = createAsyncThunk("mensShoes/fetchMensShoes",

    async (_, thunkApi) => {
        try {
            const response = await fetch('https://dummyjson.com/products/category/mens-shoes');
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

const mensShoesSlice = createSlice({
    name: "mensShoes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMensShoes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMensShoes.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchMensShoes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default mensShoesSlice.reducer;