import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBook, DeleteBook } from "./ToDoActions.js";

const ToDo = () => {
    const [text,setText] = useState("")
    const todos = useSelector((state) => state.ToDoReducer.todo)
    const dispatch = useDispatch()
  return (
    <div style={{textAlign:'center'}}>
      <div>ToDo App</div>
      <div>
        <input type="text" placeholder="Enter todo"  value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={()=>dispatch(AddBook(text))}>Add Todo</button>
      </div>
      <div>
        {
            todos.map((val)=>{
                return <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <p>{val.text}</p>
                    <button onClick={()=>dispatch(DeleteBook(val.id))} >Delete</button>
                </div>
            })
        }
      </div>
    </div>
  );
};

export default ToDo;
