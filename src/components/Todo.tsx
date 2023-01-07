import React from 'react';
import {useSelector, connect} from "react-redux";

function Todo(props : any) {

    interface Todo {
       id: number,
       activity: string,
       completed: boolean
    }

    const todos = useSelector((state: any): [] => state.todo);

    const handleNewTodo = (id : number, activity: string, completed : boolean) => {
        props.dispatch({ type: 'AddTodo', id, activity, completed});
    }

    const handleCheckBoxChange = (id : number) => {
        props.dispatch({ type: 'UpdateTodo', id});
    }

    const handleRemoveCompleted = () => {
        props.dispatch({ type: 'RemoveCompleted'});
    }

    return (
        <div>
            {todos.map((todo : Todo) => {
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