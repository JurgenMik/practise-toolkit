import React from 'react';
import {useSelector, connect} from "react-redux";

function Counter(props : any) {

    const counter = useSelector((state : any) : { counter: number } => state.counter);

    const handleCounterInc = () => {
        props.dispatch({ type: 'INCREMENT'});
    }

    const handleCounterDec = () => {
        props.dispatch({ type: 'DECREMENT'});
    }

    return (
        <div>
            <h1>{counter.counter}</h1>
            <button onClick={handleCounterInc}>
                +
            </button>
            <button onClick={handleCounterDec}>
                -
            </button>
        </div>
    )
}

const mapStateToProps = ( state: any ): { counter: number } => ({
    counter: state.counter
});

export default connect(mapStateToProps)(Counter);
