
import {
  FETCH_HOLDINGS,
  ERROR,
} from './constants';

export const fetchHoldings = (holdings) => ({
  type: FETCH_HOLDINGS,
  holdings,
});

export const errorMessage = (error) => ({
  type: ERROR,
  error,
});
