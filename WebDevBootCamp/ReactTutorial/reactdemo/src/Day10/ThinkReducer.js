const InitialState = {
  balance: 0,
};

export const ThunkReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'SET_BALANCE':{
        return {
            ...state,
            balance:action.payload
        }
    }
    case "BUY_PRODUCT": {
      return {
        ...state,
        balance: action.payload,
      };
    }
    default:
      return state;
  }
};
