import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import DogContainer from '../components/DogShow'
import { DogList } from '../components/DogBox/DogBox'
import { useSelector } from 'react-redux'
import { dogBreedSelector } from '../store/modules/sharedSelect'
import { NoFound } from '../components/NoFound'

export const AppRouter = () => {
    let history = useHistory()

    let breed = useSelector((state) => dogBreedSelector(state))
    useEffect(() => {
        if (!!breed) {
            history.push(`/${breed}`)
        }
    }, [breed])
    return (
        <Switch>
            <Route path="/:dog" component={DogContainer} />
            <Route exact path="/" component={DogList} />
            <Route path="*" component={NoFound} />
        </Switch>
    )
}
