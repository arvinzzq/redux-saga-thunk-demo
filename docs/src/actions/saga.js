import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CHANGE_BROTHER_COLOR, BALA_CHANGE_BROTHER_COLOR, CHANGE_BROTHER_COLOR_SUCCESS } from '../constant/brother';

// worker saga
function* changeBrotherColor(action) {
  console.log('action within saga -> ', action);
  try {
    yield put({
      type: CHANGE_BROTHER_COLOR_SUCCESS,
      color: action.color
    });
  } catch (error) {
    console.error(error);
  }
}

// wacther saga
function* watchColorChange() {
  yield takeLatest(CHANGE_BROTHER_COLOR, changeBrotherColor);
}

// root saga
export default function* rootSaga() {
  yield watchColorChange()
} 