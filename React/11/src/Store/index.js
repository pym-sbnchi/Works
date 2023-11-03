import { configureStore } from "@reduxjs/toolkit";
import cakeSliceReducer from "./Slices/cakeSlice";
import iceCreamSliceReducer from './Slices/iceCream';
import AuthSliceReducer from "./Slices/AuthSlice";

const store = configureStore({
    reducer:{
        cake:cakeSliceReducer,
        iceCream:iceCreamSliceReducer,
        authSlice:AuthSliceReducer
    }
})
export default store