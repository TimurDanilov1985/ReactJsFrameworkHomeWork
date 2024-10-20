import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWoomensShoes = createAsyncThunk("woomensShoes/fetchWoomensShoes",

    async (_, thunkApi) => {
        try {
            const response = await fetch('https://dummyjson.com/products/category/womens-shoes');
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

const woomensShoesSlice = createSlice({
    name: "woomensShoes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWoomensShoes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWoomensShoes.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchWoomensShoes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default woomensShoesSlice.reducer;