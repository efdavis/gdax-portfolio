import axios from 'axios';

import {
  FETCH_HOLDINGS,
  LOAD_HOLDINGS,
} from './constants';

export const loadHoldings = (holdings) => ({ type: LOAD_HOLDINGS, holdings });

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
