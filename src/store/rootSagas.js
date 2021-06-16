import { takeLatest } from 'redux-saga/effects'

import fetchDogImageSaga from './modules/dogImages/saga'
import { getDogImage } from './modules/dogImages/slice'
import fetchDogListSaga from './modules/dogList/saga'
import { getDogList } from './modules/dogList/slice'

function* sagas() {
    yield takeLatest(getDogList, fetchDogListSaga)
    yield takeLatest(getDogImage, fetchDogImageSaga)
}
export default sagas
