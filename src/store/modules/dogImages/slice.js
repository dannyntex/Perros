import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    error: null,
    pending: true,
    dogImage: [],
    isLoading: false
}

const slice = createSlice({
    name: 'dogImage',
    initialState,
    reducers: {
        getDogImage(state) {
            state.error = null
            state.pending = false
            state.dogImage = []
            state.isLoading = true
        },
        getDogImageSuccess(state, action) {
            state.error = null
            state.pending = false
            state.dogImage = action.payload
            state.isLoading = false
        },
        getDogImageFailed(state, action) {
            state.error = action.payload
            state.pending = false
            state.dogImage = []
            state.isLoading = false
        },
        getIsLoading(state, action) {
            state.isLoading = action.payload
        }
    }
})

export const dogImageSlice = slice.reducer

export const {
    getDogImage,
    getDogImageSuccess,
    getDogImageFailed,
    getIsLoading
} = slice.actions
