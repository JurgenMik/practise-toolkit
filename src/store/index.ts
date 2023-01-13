import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import rootReducer from "../reducers";
import thunk from 'redux-thunk';
import apiMiddleware from "../middleware/api";

const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware));

export default store;