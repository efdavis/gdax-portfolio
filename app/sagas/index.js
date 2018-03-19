import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchHoldings, fetchPrices, errorMessage } from '../services/actions';
import { HOLDINGS_PATH, PRICES_PATH } from '../services/constants';

function getApiCalls(path) {
  return axios({
    method: 'get',
    url: path,
  });
}

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

export default function* holdingsSaga() {
  yield getHoldings();
  yield getPrices();
}

