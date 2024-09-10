import React from 'react'
import ReduxBookDemo from './ReduxBookDemo.js'
import { Provider } from 'react-redux'
import {BookStore} from './BookStore.js'
import Counter from './CounterExample/Counter.js'
import ToDo from './ToDoExample.js/ToDo.js'
import ToDoThunk from './ReduxThunk/ToDoThunk.js'
import { ThunkStore } from './ReduxThunk/ThunkStore.js'
const Day9Demo = () => {
  return (
    <div>Day9Demo<br/>
      <Provider store={BookStore}>
      <ReduxBookDemo/>
      <Counter/>
      <ToDo/>
      </Provider>
      <Provider store={ThunkStore}>
        <ToDoThunk/>
      </Provider>
    </div>
  )
}

export default Day9Demo