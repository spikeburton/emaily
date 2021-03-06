import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/auth/current_user');

      dispatch({
        type: FETCH_USER,
        payload: res.data
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const handleToken = token => {
  return async dispatch => {
    try {
      const res = await axios.post('/api/stripe', token);

      dispatch({
        type: FETCH_USER,
        payload: res.data
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};
