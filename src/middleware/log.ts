const logMiddleware = (store: any) => (next: any) => (action: { type: string}) => {
    console.log('dispatching:', action.type);
    console.log('store', store.getState());

    return next(action);
}

export default logMiddleware;