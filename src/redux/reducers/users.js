import { ADD_USER, DELETE_USER } from "../constants/users";

const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          { id: action.id, name: action.name, phone: action.phone },
        ],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

export default users;
