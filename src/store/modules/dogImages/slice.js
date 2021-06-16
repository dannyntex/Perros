import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    error: null,
    pending: true,
    dogImage: [],
    isLoading: false,
    breed: ''
}

const slice = createSlice({
    name: 'dogImage',
    initialState,
    reducers: {
        selectedDog(state, action) {
            state.breed = action.payload
        },
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
        }
    }
})

export const dogImageSlice = slice.reducer

export const {
    selectedDog,
    getDogImage,
    getDogImageSuccess,
    getDogImageFailed
} = slice.actions
