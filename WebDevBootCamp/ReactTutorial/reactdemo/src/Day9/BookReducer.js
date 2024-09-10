const InitialStateBooks = {
  NumberOfBooks: 50,
};

export const BookReducer = (state = InitialStateBooks, action) => {
  switch (action.type) {
    case "BOOK_BUY": {
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks - 1,
      };
    }
    case "BOOK_SELL": {
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks + 1,
      };
    }
    default:
      return state;
  }
};
