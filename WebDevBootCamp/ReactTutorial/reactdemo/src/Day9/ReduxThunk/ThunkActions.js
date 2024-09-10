import { DELETE,ADD } from "./ThunkTypes.js"

export const DeleteData = () => {
        return {
            type:DELETE
        }
}

// This function includes some async logic,
// hence we can dispatch action manually
export const addData  = ()=>{
  
    // Thunk Function
    return async (dispatch,getState)=>{
  
        // Fetching results from an API : asynchronous action
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
  
        // Dispatching the action when async
        // action has completed.
        dispatch({
            type : ADD,
            payload : data
        });
    }
}