import { ADD_USER, DELETE_USER } from "../constants/users";

export const addUser = (id, name, phone) => {
  return {
    type: ADD_USER,
    id,
    name,
    phone,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id,
  };
};
