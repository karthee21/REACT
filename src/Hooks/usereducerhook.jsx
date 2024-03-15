import React, {useReducer} from 'react'

const UseReducerHook = () => {
    

    const reducer = (currentState, action) => {
        console.log(action)
        switch(action.type){
            case 'INCREMENT':
                return currentState + action.payload;
            case 'DECREMENT':
                return currentState - action.payload;
            case 'Reset':
                return currentState * action.payload;
            default:
                return currentState
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)
    
  return (
    <div>
        <div>
        <h2>UseReducerHook</h2>
        </div>
        <h4>Count: {count}</h4>
        <button className='btn btn-primary me-2'
            onClick={()=>{dispatch({type:"INCREMENT", payload:1})}}
        >Increment</button>
        <button className='btn btn-danger me-2' 
            onClick={()=>{dispatch({type:"DECREMENT", payload:1})}}
        >Decrement</button>
        <button className='btn btn-warning' 
            onClick={()=>{dispatch({type:"Reset", payload:0})}}
        >Reset</button>
    </div>
  )
}
export default UseReducerHook