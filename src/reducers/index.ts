import { combineReducers } from "redux";

const reducerCounter = (state : any = { counter : 0 }, action : any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
};

const reducerCart = (state : any = [], action : any ) => {
    switch (action.type) {
        case 'AddToCart':
            let item : any = {id : action.itemId, price: action.price, quantity: action.quantity};
            return state.concat(item);
        case 'RemoveFromCart':
            return state.filter((item : any) => item.id !== action.itemId);
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: reducerCounter,
    cart: reducerCart
})

export default rootReducer;