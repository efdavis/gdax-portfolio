import { fromJS } from 'immutable';

import {
  LOAD_HOLDINGS,
  FETCH_HOLDINGS,
} from './constants';

const initialState = fromJS({
  holdings: {
    loading: false,
    error: false,
    errorMessage: '',
    data: null,
  },
});

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOLDINGS:
      return state
      .setIn(['holdings', 'data'], action.payload);
    case LOAD_HOLDINGS:
      return state
      .setIn(['holdings', 'data'], action.holdings);
    default:
      return state;
  }
};

export default portfolioReducer;
