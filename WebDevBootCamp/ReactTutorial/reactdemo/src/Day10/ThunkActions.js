import axios from "axios";

export const setBalance = (amt) => {
  return {
    type: "SET_BALANCE",
    payload: amt,
  };
};
export const BuyProduct = (amt) => {

  return async (dispatch, getState) => {
    // Fetching results from an API : asynchronous action
    const { balance } = getState();
    console.log(balance)
    if (balance < amt) {
      alert("Insufficient Balance");
    } else {
      const newUser = {
        name: "Karttekay",
        balance: balance - amt,
      };
     await axios.put("http://localhost:8000/user", newUser).then(() => {
        alert("Product added Succesfully");
      });

      dispatch({
        type: "BUY_PRODUCT",
        payload: balance-amt,
      });
    }
  };

  
};
