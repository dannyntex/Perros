import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import sagas from './rootSagas'
import rootReducer from './rootReducer'

let sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const store = configureStore({ reducer: rootReducer, middleware })

sagaMiddleware.run(sagas)

export default store
