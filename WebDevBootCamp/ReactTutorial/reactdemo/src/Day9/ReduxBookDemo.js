import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Buy_Book,Sell_Book } from "./BookAction.js";

const ReduxBookDemo = () => {
  const x = useSelector((state) => state.BookReducer.NumberOfBooks);
  const dispatch = useDispatch()
  return (
    <div>
      ReduxBookDemo
      <br />
      Number of Books {x}
      <br/>
      <button onClick={()=>dispatch(Buy_Book())}>Buy Book</button>
      <button onClick={()=>dispatch(Sell_Book())}>Sell Book</button>

    </div>
  );
};

export default ReduxBookDemo;
