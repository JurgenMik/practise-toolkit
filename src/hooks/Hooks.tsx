import React, { useCallback, useState } from 'react';

function Hooks() {

    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const handleTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }, []);

    return (
        <>
            <p>{count}</p>
            <input type="text" onChange={handleTextChange} value={text} />
            <button onClick={handleClick}>Increment</button>
            <ChildComponent text={text} handleClick={handleClick} />
        </>
    );
    }

function ChildComponent({text, handleClick}: any) {
    return (
        <>
            <p>{text}</p>
            <button onClick={handleClick}>Increment from Child</button>
        </>
    );
}
export default Hooks;