
import {
  FETCH_HOLDINGS,
  ERROR,
  FETCH_PRICES,
} from './constants';

export const fetchHoldings = (holdings) => ({
  type: FETCH_HOLDINGS,
  holdings,
});

export const fetchPrices = (prices) => ({
  type: FETCH_PRICES,
  prices,
});


export const errorMessage = (error) => ({
  type: ERROR,
  error,
});
