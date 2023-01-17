import { combineReducers } from "redux";
import {TodoInterface, CartInterface} from '../Interfaces/interface';

const reducerCounter = (state: { counter: number } = { counter : 0 }, action : any | object) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
};

const reducerCart = (state: CartInterface[] = [], action: {type: string, itemId: number, price: number, quantity: number, operation: string}): CartInterface[] => {
    switch (action.type) {
        case 'AddToCart':
            let item = {id : action.itemId, price: action.price, quantity: action.quantity};
            return [...state, item];
        case 'RemoveFromCart':
            return state.filter((item ) => item.id !== action.itemId);
        case 'RemoveAllFromCart':
            return [];
        case 'UpdateItemQnt':
            let items = [...state];
            items.map((item : CartInterface) => {
                if (item.id === action.itemId) {
                    return action.operation === 'increment' ? item.quantity++ : item.quantity--;
                }
                return items;
            })
            return state;
        default:
            return state;
    }
};

const reducerTodo = (state: TodoInterface[] = [], action: { type: string, id: number, activity: string, completed: boolean}): TodoInterface[] => {
    switch(action.type) {
        case 'AddTodo':
            let todo = {id : action.id, activity: action.activity, completed: action.completed};
            return [...state, todo];
        case 'UpdateTodo':
            let todos = [...state];
            todos.map((todo : TodoInterface) => {
                if (todo.id === action.id) { return todo.completed = true;}
                return todos;
            })
            return state;
        case 'RemoveCompleted':
            return state.filter((todo) => !todo.completed);
        case 'RemoveTodo':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

const reducerUser = (state = {id: 0, name: '', username: '', error: ''}, action: {type: string, error: any | object, payload: {id?: number, name?: string, username?: string}}) => {
    switch(action.type) {
        case 'GET_Success':
            return {...state, id: action.payload.id, name: action.payload.name, username: action.payload.username};
        case 'GET_Error':
            return {...state, error: action.error.message};
        case 'DELETE_Success':
            return action.payload;
        case 'PUT_Success':
            return {...state, username: action.payload.username};
        default:
            return state;
    }
}

const reducerRocket = (state: { name: string, error: string } = {name: '', error: ''}, action: { type: string, data: { rocket: {name: string }}, error: any}) => {
    switch (action.type) {
        case 'query_Rocket':
            return {...state, name: action.data.rocket.name};
        case 'query_Rocket_Error':
            return {...state, error: JSON.stringify(action.error)};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: reducerCounter,
    cart: reducerCart,
    todo: reducerTodo,
    user: reducerUser,
    rocket: reducerRocket
})

export default rootReducer;