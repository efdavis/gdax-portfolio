import { fromJS } from 'immutable';

import {
  FETCH_HOLDINGS,
  FETCH_PRICES,
  ERROR,
} from './constants';

const initialState = fromJS({
  holdings: {
    errorMessage: '',
    data: null,
  },
});

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRICES:
      return state
      .setIn(['holdings', 'data'], action.holdings);
    case FETCH_HOLDINGS:
      return state
        .setIn(['holdings', 'prices'], action.prices);
    case ERROR:
      return state
        .setIn(['holdings', 'errorMessage'], action.error);
    default:
      return state;
  }
};

export default portfolioReducer;
