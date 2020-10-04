import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    return (
    <div className="p-3">
        <h1>
            Count: {count}
        </h1> 
        <h2 onClick={() => setCount(count + 1)}>
            Add
        </h2>
        <h2 onClick={() => setCount(count - 1)}>
            Subtract
        </h2>
    </div>
    )
}

export default Counter;