const InitialStateCount = {
  counter: 0,
};

export const Reducer = (state = InitialStateCount, action) => {
  switch (action.type) {
    case "INC": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case "DEC": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default:
      return state;
  }
};
