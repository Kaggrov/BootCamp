import React from "react";
import ThunkDemo from "./ThunkDemo.js";
import { Provider } from "react-redux";
import { store } from "./store.js";

const Day10Demo = () => {
  return (
    <div>
      <div>Day10Demo</div>
      <Provider store={store}>
      <ThunkDemo/>
        
      </Provider>
    </div>
  );
};

export default Day10Demo;
