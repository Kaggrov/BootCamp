import React, { useReducer } from "react";

const ReducerExample = () => {
  const InitialBooks = 50;

  const reducer = (state, action) => {
    switch (action.type) {
      case "BuyBook":
        return state + 1;
      case "SellBook":
        return state - 1;
      case "LostBook":
        return state - 1;
      case "Buy10Books":
        return state + 10;
    }
  };
  const [state, dispatch] = useReducer(reducer, InitialBooks);

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',background:'lightgrey'}}>
      <h3>
        {"Number of Books => "}
        {state}{" "}
      </h3>
      <div style={{display:'flex',flexDirection:'row',gap:'12px'}}>
        <button onClick={() => dispatch({ type: "BuyBook" })}>BuyBook</button>
        <button onClick={() => dispatch({ type: "SellBook" })}>SellBook</button>
        <button onClick={() => dispatch({ type: "LostBook" })}>LostBook</button>
        <button onClick={() => dispatch({ type: "Buy10Books" })}>
          Buy10Books
        </button>
      </div>
    </div>
  );
};

export default ReducerExample;
