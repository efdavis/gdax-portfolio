import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { loadHoldings, loadHoldingsFailure, loadHoldingsSuccess } from '../services/actions';


function getHoldings() {
  return axios({
    method: 'get',
    url: '/api/auth',
  });
}

// TODO: stop saga from firing off

function* workerSaga() {
  try {
    const response = yield call(getHoldings);
    // console.log('saga response', response.data);
    const holdings = response.data;

    yield put(loadHoldings(holdings));
  } catch (error) {
    yield put(loadHoldingsFailure(error));
  }
}

// watcher saga
export default function* holdingsSaga() {
  yield takeLatest(getHoldings, workerSaga);
}

