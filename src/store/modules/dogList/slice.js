import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    error: null,
    pending: true,
    dogList: [],
    isLoading: false,
    breed: ''
}

const slice = createSlice({
    name: 'dogList',
    initialState,
    reducers: {
        selectedDog(state, action) {
            state.breed = action.payload
        },
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

export const { selectedDog, getDogList, getDogListSuccess, getDogListFailed } =
    slice.actions
