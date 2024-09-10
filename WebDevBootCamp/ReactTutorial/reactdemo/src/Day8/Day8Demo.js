import React from 'react'
import TestClassDemo from './TestClassDemo.js'
import Counter from './Counter.js'
import ApiTestDemo from './ApiTestDemo.js'
import ContextParent from './ContextParent.js'
import ReducerDemo from './ReducerDemo.js'
import ReducerExample from './ReducerExample.js'
import TodoApp from './TodoApp.js'
const Day8Demo = () => {
  return (
    <div>Day8Demo
        <TestClassDemo/>
        <Counter/>
        {/* <ApiTestDemo/> */}
        <ContextParent/>
        <ReducerDemo/>
        <ReducerExample/>
        <TodoApp/>
    </div>
  )
}

export default Day8Demo