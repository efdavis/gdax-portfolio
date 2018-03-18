import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchHoldings, fetchPrices, errorMessage } from '../services/actions';
import { HOLDINGS_PATH, PRICES_PATH, FETCH_HOLDINGS, FETCH_PRICES } from '../services/constants';

function getApiCalls(path) {
  return axios({
    method: 'get',
    url: path,
  });
}

// TODO: stop saga from firing off

function* getHoldings() {
  try {
    const response = yield call(getApiCalls, HOLDINGS_PATH);
    const holdings = response.data;
    yield put(fetchHoldings(holdings));
  } catch (error) {
    const loadingError = 'There was an issue loading your holdings';
    yield put(errorMessage(loadingError));
  }
}

function* getPrices() {
  try {
    const response = yield call(getApiCalls, PRICES_PATH);
    console.log('response: ', response);

    const prices = response.data;
    console.log('prices: ', prices);
    yield put(fetchPrices(prices));
  } catch (error) {
    const loadingError = 'There was an issue loading the currency prices';
    yield put(errorMessage(loadingError));
  }
}

// watcher saga
export default function* holdingsSaga() {
  // yield takeLatest(FETCH_HOLDINGS, getHoldings);
  yield takeLatest(FETCH_HOLDINGS, getPrices);
}
