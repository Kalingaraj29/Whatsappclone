import React from 'react'
import { useState } from 'react';
import { useErrorBoundary } from "react-error-boundary";

function Home() {
    const [count, setCount] = useState(1);
    const  {showBoundary}  = useErrorBoundary();
try {
    
    if (count === 3) {
        throw new Error("danger");
      }
} catch (error) {
    console.log(error);
    showBoundary(error);
}

    return (
      <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </>
    );
}

export default Home
