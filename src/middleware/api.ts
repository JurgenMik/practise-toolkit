import axios from 'axios';

const apiMiddleware = ({dispatch}: any) => (next: (arg0: any) => any) => (action: { meta: { api: any}, type: string, payload: {username: string, name: string}}) => {
    if (action.type === 'PUT') {

        const { url, method, onSuccess, onError } = action.meta.api;
        const data = action.payload;

        axios({
            url,
            method,
            data
        })
            .then(response => {
                dispatch({ type: onSuccess, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: onError, error });
            });
    } else if (action.type === 'GET') {

        const { url, method, onSuccess, onError } = action.meta.api;

        axios.get(
            url,
            method,
        )
            .then(response => {
                dispatch({ type: onSuccess, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: onError, error });
            });
    } else if (action.type === 'DELETE') {

        const { url, method, onSuccess, onError } = action.meta.api;

        axios({
            url,
            method,
        })
            .then(response => {
                dispatch({ type: onSuccess, payload: response.data });
            })
            .catch(error => {
                dispatch({ type: onError, error });
            });
    }
    return next(action);
};

export default apiMiddleware;