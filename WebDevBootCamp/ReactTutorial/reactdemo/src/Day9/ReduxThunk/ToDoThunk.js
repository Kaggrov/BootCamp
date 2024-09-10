import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData,DeleteData } from "./ThunkActions.js";

const ToDoThunk = () => {
    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()
  return (
    <div style={{textAlign:'center'}}>
      <div>ToDo App</div>
      <div>
        <button onClick={()=>dispatch(addData())}>Add Todo</button>
        <button onClick={()=>dispatch(DeleteData())} >Delete</button>

      </div>
      <div>
      {todos && <div>{JSON.stringify(todos)}</div>}
      </div>
    </div>
  );
};

export default ToDoThunk;
