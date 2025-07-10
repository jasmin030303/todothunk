const initialState = {
  todo: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODO":
      return { ...state, todo: action.payload };
    case "ADD_TODO":
      return { ...state, todo: [...state.todo, action.payload] };

    case "DELETE":
      let delTodo = state.todo.filter((el) => el.id !== action.payload.id);
      return { ...state, todo: delTodo };

    default:
      return state;
  }
};
