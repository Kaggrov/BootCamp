import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Incremnet } from './Action.js';

const Counter = () => {
    const x = useSelector((state) => state.Reducer.counter)
    const dispatch = useDispatch();
  return (
    <div>Counter

        <h1>Counter : {x}</h1>
        <button onClick={()=>dispatch(Incremnet())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default Counter