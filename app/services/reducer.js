import { fromJS } from 'immutable';

import {
  LOAD_HOLDINGS,
  LOAD_HOLDINGS_SUCCESS,
  LOAD_HOLDINGS_FAILURE,
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
      .setIn(['holdings', 'loading'], true);
    case LOAD_HOLDINGS_SUCCESS:
      return state
        .setIn(['holdings', 'loading'], false)
        .setIn(['holdings', 'data'], action.error);
    case LOAD_HOLDINGS_FAILURE:
      return state
        .setIn((['holdings', 'error'], true))
        .setIn(['holdings', 'errorMessage'], action.error);
    default:
      return state;
  }
};

export default portfolioReducer;
