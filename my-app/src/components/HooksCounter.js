import React, { useState }from "react";

export default function HooksCounter(props) {
    // count: a new state property
    // setCount: a method to update count
    // useState(0): initialize count to 0
    const [count, setCount] = useState(0);

    return (
        <div className="greeting">
            <h2>Hello {props.name}! I'm a functional component with hooks!</h2>
            <h3>You've clicked this totally useless counter {count} times</h3>
            <button onClick={() => setCount(count => count + 1)}>Increment Useless Counter</button>
        </div>
    );
}