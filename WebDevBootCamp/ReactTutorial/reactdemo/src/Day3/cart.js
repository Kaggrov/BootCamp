import React, { useState } from "react";

const Cart = ({showItems,generate}) => {
    const cart = []
    const [selectedItem,setSelectedItem] = useState({})
    const [quant,setQuant] = useState(0)
  return (
    <div>
      <div style={{display:"flex",flexDirection:'row',gap:'15px'}}>
        <select placeholder="Item" onChange={(e)=>setSelectedItem(e.target.value)}>
          {
            showItems.map((i)=>{
                return <option>{i.name}</option>
            })
          }
        </select>
        <select onChange={(e)=>setQuant(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>5</option>
          <option>10</option>
        </select>
      </div>
      <button onClick={()=>{
        const obj = {
            name:selectedItem,
            quantity:quant
        }
        cart.push(obj)
      }}>Add to Cart</button>
      <button onClick={()=>{generate(cart)}}>Generate Bill</button>
    </div>
  );
};

export default Cart;
