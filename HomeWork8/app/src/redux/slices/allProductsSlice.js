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
    indexImg: 1,
    loading: false,
    error: null,
};

const allProductsSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMensShirts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMensShirts.fulfilled, (state, action) => {
                state.products.push(...action.payload);
                state.loading = false;
            })
            .addCase(fetchMensShirts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchMensShoes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMensShoes.fulfilled, (state, action) => {
                state.products.push(...action.payload);
                state.loading = false;
            })
            .addCase(fetchMensShoes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchMensWatches.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMensWatches.fulfilled, (state, action) => {
                state.products.push(...action.payload);
                state.loading = false;
            })
            .addCase(fetchMensWatches.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchWoomensDresses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWoomensDresses.fulfilled, (state, action) => {
                state.products.push(...action.payload);
                state.loading = false;
            })
            .addCase(fetchWoomensDresses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchWoomensShoes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWoomensShoes.fulfilled, (state, action) => {
                state.products.push(...action.payload);
                for (let i = state.products.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [state.products[i], state.products[j]] = [state.products[j], state.products[i]];
                  }
                state.loading = false;
            })
            .addCase(fetchWoomensShoes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default allProductsSlice.reducer;