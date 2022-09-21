import { ADDTODO, REMOVETODO, UPDATETODO } from "./action";

const initialState = [];

const Todo = (state = initialState, action) => {
  console.log("@VA action.payload", action.payload);

  switch (action.type) {
    case ADDTODO:
      console.log("@VA initialState", state);
      return (state = [...state, action.todo]);

    case REMOVETODO:
      let filteredTodo = state.filter((elem) => {
        if (elem.id !== action.item) {
          return elem;
        }
      });
      console.log("@VA filteredTodo", filteredTodo);
      return filteredTodo;

    case UPDATETODO:
      const { id, updatedTodo } = action.payload;
      console.log("id,updatedTodo", id, updatedTodo);
      let newState = [];
      for (let i = 0; i < state.length; i++) {
        const currentElem = { ...state[i] };
        if (id === currentElem.id) {
          console.log("state.title", state.title);
          currentElem.title = updatedTodo;
        }
        newState.push(currentElem);
      }
      console.log("state", state);
      return newState;

    default:
      return state;
  }
};
export default Todo;
