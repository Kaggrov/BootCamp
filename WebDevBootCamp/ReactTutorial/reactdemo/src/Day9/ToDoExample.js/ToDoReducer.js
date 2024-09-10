const InitialToDo = {
  todo: [
    {
      id: 1,
      text: "Hello World",
    },
    {
      id: 2,
      text: "Edit this World",
    },
  ],
};

export const ToDoReducer = (state = InitialToDo, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: state.todo.length+1,
            text: action.payload,
          },
        ],
      };
    }
    case "DELETE": {
      const todo = state.todo.filter((val) => {
        return val.id != action.payload;
      });

      return {
        ...state,
        todo: todo,
      };
    }
    default:
      return state;
  }
};
