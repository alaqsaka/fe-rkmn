import { FETCH } from '../constants/actionTypes';

export default (todos = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    default:
      return todos;
  }
};
