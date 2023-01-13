import React, { useEffect } from 'react';
import {useSelector, connect} from "react-redux";

function User(props : any) {

    const user = useSelector((state : any) => state.user);

    useEffect(() => {
        handleGet();
    }, [])

    const handleGet = (): void => {
        props.dispatch({
            type: 'GET',
            meta: {
                api: {
                    url: 'https://jsonplaceholder.typicode.com/users/5',
                    method: 'get',
                    onSuccess: 'GET_Success',
                    onError: 'GET_Error'
                }
            }
        });
    }

    const handleDeleteUser = (): void => {
        props.dispatch({
            type: 'DELETE',
            meta: {
                api: {
                    url: 'https://jsonplaceholder.typicode.com/users/5',
                    method: 'delete',
                    onSuccess: 'DELETE_Success',
                    onError: ''
                }
            }
        });
    }

    const handleEditUser = (name: string) => {
        props.dispatch({
            type: 'PUT',
            payload: {
                username: name,
                name: user.name
            },
            meta: {
                api: {
                    url: 'https://jsonplaceholder.typicode.com/users/5',
                    method: 'put',
                    onSuccess: 'PUT_Success',
                    onError: '',
                }
            }
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