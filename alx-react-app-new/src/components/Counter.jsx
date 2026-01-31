import React from 'react'
import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const btnStyle = {
        margin: '5px',
        padding: '10px',
        backgroundColor: '#4CAF50',
    };
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px',fontSize: '16px' }}>
    <p>Current Count: {count}</p>
    <button style={btnStyle} onClick={() => setCount(count + 1)}>Increment</button>
    <button style={btnStyle} onClick={() => setCount(count - 1)}>Decrement</button>
    <button style={btnStyle} onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter