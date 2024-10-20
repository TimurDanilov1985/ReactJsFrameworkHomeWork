import { configureStore } from "@reduxjs/toolkit";
import mensShirtsReducer from "./slices/mensShirtsSlice";
import mensShoesReducer from "./slices/mensShoesSlice";
import mensWatchesReducer from "./slices/mensWatchesSlice";
import woomensShoesReducer from "./slices/womensShoesSlice";
import woomensDressesReducer from "./slices/womensDressesSlice";
import allProductsReducer from "./slices/allProductsSlice";
import cartProductsReducer from "./slices/cartSlice";

const store = configureStore({
    reducer : {
        mensShirts : mensShirtsReducer,
        mensShoes : mensShoesReducer,
        mensWatches: mensWatchesReducer,
        woomensShoes: woomensShoesReducer,
        woomensDresses: woomensDressesReducer,
        allProducts: allProductsReducer,
        cartProducts: cartProductsReducer,
    }
})

export default store;