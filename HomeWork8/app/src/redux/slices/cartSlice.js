import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
    count: 0,
    grandTotal: 0,
};

const cartSlice = createSlice({
    name: "cartProducts",
    initialState,
    reducers: {
        addProduct: (state, action) => {

            const object = {
                cartId: Date.now(),
                product: action.payload,
                quantity: 1,
            };

            state.cartProducts.push(object);

            state.grandTotal = Math.round((state.grandTotal + action.payload.price) * 100) / 100;

            state.count = state.count + 1;
        },

        deleteProduct: (state, action) => {

            const element = state.cartProducts.find((element) => element.cartId === action.payload);

            state.grandTotal = Math.round((state.grandTotal - element.product.price * element.quantity) * 100) / 100;

            state.cartProducts = state.cartProducts.filter(
                (element) => element.cartId !== action.payload
            );

            state.count = state.count - element.quantity;
        },

        changeQuantityPlus: (state, action) => {

            const element = state.cartProducts.find((element) => element.cartId === action.payload);

            element.quantity = element.quantity + 1;

            state.grandTotal = Math.round((state.grandTotal + element.product.price) * 100) / 100;

            state.count = state.count + 1;
        },

        changeQuantityMinus: (state, action) => {

            const element = state.cartProducts.find((element) => element.cartId === action.payload);

            if (element.quantity !== 1) {

                element.quantity = element.quantity - 1;

                state.grandTotal = Math.round((state.grandTotal - element.product.price) * 100) / 100;

                state.count = state.count - 1;
            }
        },

        clear: (state) => {
            state.cartProducts = [];
            state.count = 0;
            state.grandTotal = 0;
        }
    }
});

export const { addProduct, deleteProduct, changeQuantityMinus, changeQuantityPlus, clear } = cartSlice.actions;
export default cartSlice.reducer;