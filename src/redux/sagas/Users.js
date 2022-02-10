import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {
    FETCH_USERS,
} from '../constants/Users';
import {
} from "../actions/Users";
import { requestUsersError, requestUsersSuccess, requestUsers } from 'redux/actions/Users';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

 function* watchFetchUsers() {
    yield takeEvery(FETCH_USERS, fetchUsersAsync);
  }
  
   function* fetchUsersAsync() {
    yield call(delay, 2000);
    try {
      yield put(requestUsers());
      const data = yield call(() => {
        return fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
        }
      );
      yield put(requestUsersSuccess(data));
    } catch (error) {
      yield put(requestUsersError(error));
    }
  }


export default function* rootSaga() {
  yield all([
		fork(watchFetchUsers),
        fork(fetchUsersAsync),
  ]);
}
