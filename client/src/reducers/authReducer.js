import { FETCH_USER } from '../actions/types';

const initialState = {
  user: null,
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        user: payload,
        loading: false
      };
    default:
      return state;
  }
};
