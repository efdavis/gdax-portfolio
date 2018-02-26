import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { loadHoldings, loadHoldingsFailure, loadHoldingsSuccess } from '../services/actions';


function getHoldings() {
  return axios({
    method: 'get',
    url: '/api/auth',
  });
}

function* workerSaga() {
  try {
    const response = yield call(getHoldings);
    console.log('saga response', response);
    const holdings = response.data.message;

    yield put(loadHoldings(holdings));
  } catch (error) {
    yield put(loadHoldingsFailure(error));
  }
}

// watcher saga
export default function* holdingsSaga() {
  yield takeLatest(getHoldings, workerSaga);
}


// axios.get('/api/auth')
//   .then(({ data }) => {
//     console.log(data, 'Data ');
//     this.setState({
//       wallet: [data],
//     });
//   })
//   .catch((err) => {
//     console.log(err, 'Data not retrieved');
//   });

// function* rootSaga() {
//   yield fork();
// }
