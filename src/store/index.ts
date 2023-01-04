import { createStore } from '@reduxjs/toolkit';
import reducerCounter from "../reducers";

const store = createStore(reducerCounter);

export default store;