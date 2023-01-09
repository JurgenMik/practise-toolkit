import React from 'react';
import {TodoInterface} from '../Interfaces/interface';
import {useSelector, connect} from "react-redux";

function Todo(props : any) {

    const todos = useSelector((state: any): TodoInterface[] => state.todo);

    const handleNewTodo = (id : number, activity: string, completed : boolean) => {
        props.dispatch({ type: 'AddTodo', id, activity, completed});
    }

    const handleCheckBoxChange = (id : number) => {
        props.dispatch({ type: 'UpdateTodo', id});
    }

    const handleRemoveCompleted = () => {
        props.dispatch({ type: 'RemoveCompleted'});
    }

    const handleRemoveTodo = (id : number) => {
        props.dispatch({ type: 'RemoveTodo', id});
    }

    return (
        <div>
            {todos.map((todo : TodoInterface) => {
                return (
                    <div key={todo.id}>
                        <h1>
                            {todo.activity}
                        </h1>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={e => handleCheckBoxChange(todo.id)}
                        />
                        <span onClick ={e => handleRemoveTodo(todo.id)}>
                            X
                        </span>
                    </div>
                )
            })}
            <button onClick={e => handleNewTodo(Math.floor(Math.random() * 10) + 1, "Run for 10 miles", false)}>
                Add New Todo
            </button>
            <button onClick={handleRemoveCompleted}>
                Remove Completed
            </button>
        </div>
    )
}

export default connect()(Todo);