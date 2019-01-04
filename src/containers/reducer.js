import { GET_API_DATA } from "../constants/constants";

const initialState = {
    userName: "",
    images: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_DATA:
      return Object.assign({}, state, { userName: `${action.data.name.first} ${action.data.name.last}`, images: action.data.picture.large });
    default:
      return state;
  }
};
