import React from 'react'
import { Provider } from 'react-redux'

import { MemoryRouter } from 'react-router-dom'

import '@testing-library/jest-dom'
// import { render } from './test-utils'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { DogList } from '../components/DogList'
import createSagaMiddleware from 'redux-saga'

const initState = {
    dogListSlice: {
        error: null,
        pending: true,
        dogList: [],
        isLoading: false
    }
}

let sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const mockStore = configureStore(middlewares)
let store = mockStore(initState)
store.dispatch = jest.fn()

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <DogList />
        </MemoryRouter>
    </Provider>
)
describe('DogList', () => {
    // beforeEach(() => {

    //     jest.clearAllMocks();

    // })

    it('Deberia esta un titulo', () => {
        expect(wrapper.contains('RAZA DE PERRO')).toEqual(true)
    })
})
