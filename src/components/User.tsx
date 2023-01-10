import React, { useEffect } from 'react';
import axios from 'axios';
import {useSelector, connect} from "react-redux";

function User(props : any) {

    const user = useSelector((state : any) => state.user);

    useEffect(() => {
        handleGet();
    }, [])

    const handleGet = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/5')
            .then((response => {
                props.dispatch({ type: 'GET_Success', payload: response.data});
            }))
            .catch(error => {
                props.dispatch({ type: 'GET_Error', error: error});
            });
    }

    return (
        <div>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.error}</p>
        </div>
    )
}

export default connect()(User);