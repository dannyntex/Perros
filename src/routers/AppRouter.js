import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { DogImages } from '../components/DogImages'
import { DogList } from '../components/DogList'
import { useSelector } from 'react-redux'
import { dogBreedSelector } from '../store/modules/dogImages/selectors'
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
            <Route path="/:dog" component={DogImages} />
            <Route exact path="/" component={DogList} />
        </Switch>
    )
}
