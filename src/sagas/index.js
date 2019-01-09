import { SagaIterator } from "redux-saga";
import { put, takeEvery, all, call, take } from "redux-saga/effects";

import { startFetchingData, fetchDataSuccess } from "../actions/MainActions";
import { FETCH_DATA } from "../actions/MainActions/MainTypes";

function* watchFetchData() {
    while (true) {
        yield take(FETCH_DATA);
        yield put(startFetchingData());
        yield put(fetchDataSuccess([]));
    }
}

// TODO: Define type
function* rootSaga() {
    yield all([
        watchFetchData(),
    ]);
}

export default rootSaga;
