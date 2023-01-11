import React, { useEffect } from 'react';
import axios from 'axios';
import {useSelector, connect} from "react-redux";

function User(props : any) {

    const user = useSelector((state : any) => state.user);

    useEffect(() => {
        handleGet();
    }, [])

    const handleGet = (): void => {
        axios.get('https://jsonplaceholder.typicode.com/users/5')
            .then((response => {
                props.dispatch({ type: 'GET_Success', payload: response.data});
            }))
            .catch(error => {
                props.dispatch({ type: 'GET_Error', error: error});
            });
    }

    const handleDeleteUser = (): void => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/5`)
            .then((response => {
                props.dispatch({ type: 'DELETE_Success', payload: response.data});
            }))
            .catch(error => {
                console.log(error);
            });
    }

    const handleEditUser = (name: string) => {
        axios.put(`https://jsonplaceholder.typicode.com/users/5`, { username: name, name: user.name })
            .then(response => {
                props.dispatch( { type: 'PUT_Success', payload: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.error}</p>
            <button onClick={handleDeleteUser}>
                Delete
            </button>
            <button onClick={ e => handleEditUser('Karl999')}>
                Edit
            </button>
        </div>
    )
}

export default connect()(User);