import React, { useReducer, useState } from "react";

const TodoApp = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("Normal");
  const [editId, setEditId] = useState(-1);
  const [editText,setEditText] =  useState("")

  const todo = [
    {
      id: 1,
      name: "Hello",
    },
    {
      id: 2,
      name: "Hi World",
    },
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD": {
        setText("");
        return [
          ...state,
          {
            id: state.length + 1,
            name: action.text,
          },
        ];
      }
      case "DELETE": {
        return state.filter((val) => {
          return val.id !== action.id;
        });
      }

      case "EDIT": {

        const ele = state.find(txt => txt.id == editId);
        ele.name = action.text
        setMode('Normal')
        return state;

      }
    }
  };

  const [state, dispatch] = useReducer(reducer, todo);
  console.log(state)
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To Do App</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <>
          <label>Enter To Do Entry</label>
          <input
            type="text"
            placeholder="Enter text ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </>
        <button onClick={() => dispatch({ type: "ADD", text: text })}>
          Add ToDo
        </button>

        {state.map((val) => {
          return mode == "Edit" && val.id == editId ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input type="text" placeholder="Edit text" onChange={(e)=>{setEditText(e.target.value)}}/>
              <button onClick={()=>dispatch({type:"EDIT",text:editText})}>Save</button>
              <button onClick={() =>{setMode("Normal");setEditId(-1)}}>
                Cancel
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>{val.name}</p>
              <button onClick={() =>{setMode("Edit");setEditId(val.id)}}>Edit</button>
              <button onClick={() => dispatch({ type: "DELETE", id: val.id })}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
