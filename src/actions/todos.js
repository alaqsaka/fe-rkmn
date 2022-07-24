import * as api from '../api';
import { FETCH } from '../constants/actionTypes';

export const getTodos = () => async dispatch => {
  try {
    const { data } = await api.fetchTodos();
    console.log('data from actions ', data);
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
