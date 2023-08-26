import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setcount] = useState(0);
    

   useEffect(()=>
   {
    console.log("render");
    const a=setInterval(() => {
        setcount((prev)=>prev+1)
    }, 1000);

    return ()=>{
        clearInterval(a)
    }
},[])


  return (
    <div>
       <h1>{count}abcde</h1>
    </div>
  )
}
