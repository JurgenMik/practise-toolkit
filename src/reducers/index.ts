import { combineReducers } from "redux";
import {TodoInterface} from '../Interfaces/interface';

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
};

const reducerTodo = (state : TodoInterface[] = [], action: { type: string, id : number, activity: string, completed: boolean}): TodoInterface[] => {
    switch(action.type) {
        case 'AddTodo':
            let todo = {id : action.id, activity: action.activity, completed: action.completed};
            return state.concat(todo);
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

const rootReducer = combineReducers({
    counter: reducerCounter,
    cart: reducerCart,
    todo: reducerTodo
})

export default rootReducer;