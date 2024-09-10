import React, { useState } from "react";
import Cart from "./cart.js";



const Shopping = () => {
  const [total, setTotal] = useState(0);
  let items = [
    {
      name: "Mobile",
    },
    {
      name: "Laptop",
    },
    {
      name: "Fruits",
    },
  ];

  const priceMap = {
    "Mobile" : 100,
    "Laptop" : 200,
    "price":300
  }

  const generate = (arr) => {
    let curr = 0;
    arr.map((i) => {
      curr += (i.quantity*priceMap[i.name])
      setTotal(curr)
    });
  };
  return (
    <div>
      <p>Total Bill :- {total}</p>
      <Cart generate={generate} showItems={items} />
    </div>
  );
};

export default Shopping;
