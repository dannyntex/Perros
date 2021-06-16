import { call, put } from 'redux-saga/effects'
import { fecthDogList } from '../../../api/apiDog'
import { getDogListSuccess, getDogListFailed } from './slice'

function* fetchDogListSaga() {
    try {
        const dogs = yield call(fecthDogList)
        yield put(getDogListSuccess(dogs))
    } catch (err) {
        yield put(getDogListFailed(err))
    }
}

export default fetchDogListSaga
