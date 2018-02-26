import axios from 'axios';

import {
  FETCH_HOLDINGS,
  LOAD_HOLDINGS,
  LOAD_HOLDINGS_SUCCESS,
  LOAD_HOLDINGS_FAILURE,
} from './constants';

export const loadHoldings = (holdings) => ({ type: LOAD_HOLDINGS, holdings });
export const loadHoldingsSuccess = (holdings) => ({ type: LOAD_HOLDINGS_SUCCESS, holdings });
export const loadHoldingsFailure = (error) => ({ type: LOAD_HOLDINGS_FAILURE, error });

export function fetchHoldings() {
  const request = axios({
    method: 'get',
    url: '/api/auth',
  });

  return {
    type: FETCH_HOLDINGS,
    payload: request,
  };
}
