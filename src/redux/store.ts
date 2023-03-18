import productSlice from './slices/productSlice';
import totalPriceSlice from './slices/totalPriceSlice';

import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore, combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({ productSlice, totalPriceSlice });

export const Store = createStore(rootReducer, applyMiddleware(thunk));

