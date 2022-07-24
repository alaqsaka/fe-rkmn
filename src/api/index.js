import axios from 'axios';

const config = {
  headers: {
    Authorization: `bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODEsImV4cCI6MTY1OTAwODY3N30.Xab7Hbm6PIf4ampV-gmFPiBs1RLtP_HIdGMiYfrBv0c`,
  },
};

const API = axios.create({
  baseURL: 'https://todos-project-api.herokuapp.com/todos',
  ...config,
});

export const fetchTodos = () => API.get('');
