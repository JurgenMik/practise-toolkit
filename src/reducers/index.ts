import { combineReducers } from "redux";

const reducerCounter = (state : any = { counter : 0 }, action : any | object) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
};

const reducerCart = (state : any = [], action: any | object) => {
    switch (action.type) {
        case 'AddToCart':
            let item : object = {id : action.itemId, price: action.price, quantity: action.quantity};
            return state.concat(item);
        case 'RemoveFromCart':
            return state.filter((item : any) => item.id !== action.itemId);
        case 'RemoveAllFromCart':
            return [];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: reducerCounter,
    cart: reducerCart
})

export default rootReducer;