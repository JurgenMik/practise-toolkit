import React from 'react';
import {useSelector, connect} from "react-redux";

function Cart(props : any) {

    const cartItems = useSelector((state: any) => state.cart);

    const handleAddToCart = (itemId : number, price : number, quantity : number) => {
        props.dispatch({ type: 'AddToCart', itemId, price, quantity});
    }

    const handleRemoveFromCart = (itemId : number) => {
        props.dispatch({ type: 'RemoveFromCart', itemId});
    }

    return (
        <div>
            {cartItems.map((item : any) => {
                return (
                    <div key={item.id}>
                        <p>
                            id:{item.id}
                        </p>
                        <p>
                            qnt:{item.quantity}
                        </p>
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
        </div>
    )
}

export default connect()(Cart);
