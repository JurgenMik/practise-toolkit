import React from 'react';
import {CartInterface} from "../Interfaces/interface";
import {useSelector, connect} from "react-redux";

function Cart(props : any) {

    const cartItems = useSelector((state : any): CartInterface[] => state.cart);

    const handleAddToCart = (itemId : number, price : number, quantity : number) => {
        props.dispatch({ type: 'AddToCart', itemId, price, quantity});
    }

    const handleUpdateItemQnt = (itemId : number, operation : string) => {
        props.dispatch({ type: 'UpdateItemQnt', operation: operation, itemId});
    }

    const handleRemoveFromCart = (itemId : number) => {
        props.dispatch({ type: 'RemoveFromCart', itemId});
    }

    const handleRemoveAll = () => {
        props.dispatch({ type: 'RemoveAllFromCart' });
    }

    return (
        <div>
            {cartItems.map((item : CartInterface) => {
                return (
                    <div key={item.id}>
                        <p>
                            id:{item.id}
                        </p>
                        <span onClick={e => handleUpdateItemQnt(item.id, 'decrement')}>-</span>
                        <p>
                            qnt: {item.quantity}
                        </p>
                        <span onClick={e => handleUpdateItemQnt(item.id, 'increment')}>+</span>
                        <p>
                            price:${item.price}
                        </p>
                        <button onClick={e => handleRemoveFromCart(item.id)}>
                            Remove from Cart
                        </button>
                    </div>
                )
            })}
            <button onClick={e => handleAddToCart(Math.floor(Math.random() * 10) + 1, 10, 5)}>
                add To cart
            </button>
            <button onClick={handleRemoveAll}>
                remove all
            </button>
        </div>
    )
}

export default connect()(Cart);
