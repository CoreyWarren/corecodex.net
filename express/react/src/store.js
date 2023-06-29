// This code creates a Redux store for an e-commerce application built with Django and React.
// It imports several reducer functions that manage slices of the application state.
// The 'configureStore' function from the '@reduxjs/toolkit' library is used to create the store.
import { configureStore } from '@reduxjs/toolkit'

//import myReducer from 'slices/mySlice';

import { combineReducers } from '@reduxjs/toolkit'

/*
const rootReducer = combineReducers({
    user:                       userReducer,
    products:                   productsReducer,
    product_size:               productSizeReducer,
    cart:                       cartReducer,
    cart_items:                 cartItemsReducer,
    stripe_payments:            stripePaymentsReducer,
    checkout_stock_validation:  checkoutStockValidationReducer,
});
*/

// The resulting combined reducer is passed to the 'configureStore' function.
// This function creates a store with the specified reducer and optional dev tools for development purposes.

/*
export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
});
*/

import counterReducer from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

