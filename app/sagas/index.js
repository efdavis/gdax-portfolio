import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchHoldings, errorMessage } from '../services/actions';


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
    yield put(fetchHoldings(holdings));
  } catch (error) {
    const loadingError = 'There was an issue loading your holdings';
    yield put(errorMessage(loadingError));
  }
}

// watcher saga
export default function* holdingsSaga() {
  yield takeLatest(getHoldings, workerSaga);
}

