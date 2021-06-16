import { combineReducers } from '@reduxjs/toolkit'
import { dogListSlice } from './modules/dogList/slice'
import { dogImageSlice } from './modules/dogImages/slice'

const rootReducer = combineReducers({
    dogListSlice,
    dogImageSlice
})

export default rootReducer
