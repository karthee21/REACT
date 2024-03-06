import React, { useState } from "react"
export function CounterF (){
    const [count,setCount] = useState(0)
    return(
        <>
            <h1>USE STATE IN FUNCTION COMPONENT</h1>
            <h3>count :{count}</h3>
            <button 
            className="btn btn-success" 
            onClick={() => {setCount(count +1)}}
            >Increment</button>
            <button 
            className="btn btn-danger mx-3" 
            onClick={() => {setCount(count -1)}}
            >Decrement</button>
            <button 
            className="btn btn-primary" 
            onClick={() => {setCount(count * 0)}}
            >Reset</button>
        </>
    )
}