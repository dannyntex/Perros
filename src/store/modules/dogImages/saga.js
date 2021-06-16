import { call, put } from 'redux-saga/effects'
import { fecthDogImage } from '../../../api/apiDog'

import { getDogImageFailed, getDogImageSuccess } from './slice'

function* fetchDogImageSaga({ payload }) {
    try {
        const images = yield call(fecthDogImage, payload)

        yield put(getDogImageSuccess(images))
    } catch (err) {
        yield put(getDogImageFailed(err))
    }
}

export default fetchDogImageSaga
