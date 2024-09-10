import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BuyProduct, setBalance } from "./ThunkActions.js";

const ThunkDemo = () => {
  const bal = useSelector(state => state.balance);
  const dispatch = useDispatch()

  const [currentAmount,setCurrentAmount] = useState({
    movie:0,
    recharge:0,
    food:0
  })
  const fetchBalance = async () => {
    const response = await fetch("http://localhost:8000/user");
    const data = await response.json();

    console.log(data)
    dispatch(setBalance(data.balance))
    
  };
  useEffect(() => {
    fetchBalance();
  }, []);
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ textAlign: "center" }}>ThunkDemo</div>
      <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "600" }}>
        Wallet Balance :-{bal}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            background: "lightgrey",
            padding: "10px",
          }}
        >
          <div>Movie Tickets</div>
          <div><input type="text" value={currentAmount.movie} onChange={(e)=>{
            setCurrentAmount((prev)=>({
                ...prev,
                movie:e.target.value
            }))
          }} /></div>
          <button onClick={()=>dispatch(BuyProduct(currentAmount.movie))}>Buy Tickets</button>
        </div>
        <div
          style={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            background: "lightgrey",
            padding: "10px",
          }}
        >
          <div>Recharge</div>
          <div><input type="text" value={currentAmount.recharge} onChange={(e)=>{
            setCurrentAmount((prev)=>({
                ...prev,
                recharge:e.target.value
            }))
          }} /></div>
          <button onClick={()=>dispatch(BuyProduct(currentAmount.recharge))}>Buy</button>
        </div>
        <div
          style={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            background: "lightgrey",
            padding: "10px",
          }}
        >
          <div>Food Court</div>
          <div><input type="text" value={currentAmount.food} onChange={(e)=>{
            setCurrentAmount((prev)=>({
                ...prev,
                food:e.target.value
            }))
          }} /></div>
          <button onClick={()=>dispatch(BuyProduct(currentAmount.food))}>Buy </button>
        </div>
      </div>
    </div>
  );
};

export default ThunkDemo;
