import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    error: null,
    pending: true,
    dogList: [],
    isLoading: false
}

const slice = createSlice({
    name: 'dogList',
    initialState,
    reducers: {
        getDogList(state) {
            state.error = null
            state.pending = false
            state.dogList = []
            state.isLoading = true
        },
        getDogListSuccess(state, action) {
            state.error = null
            state.pending = false
            state.dogList = action.payload
            state.isLoading = false
        },
        getDogListFailed(state, action) {
            state.error = action.payload.status
            state.pending = false
            state.dogList = []
            state.isLoading = false
        }
    }
})

export const dogListSlice = slice.reducer

export const { getDogList, getDogListSuccess, getDogListFailed } = slice.actions
