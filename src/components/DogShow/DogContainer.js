import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { dogImageSelector } from '../../store/modules/dogImages/selectors'

import { isLoadingSelector } from '../../store/modules/sharedSelect'
import { getDogImage } from '../../store/modules/dogImages/slice'

import { DogPhoto } from './DogPhoto'
import { DogSelect } from '../DogSelect/DogSelect'

const DogContainer = () => {
    const dogImage = useSelector((state) => dogImageSelector(state))
    const isLoading = useSelector((state) => isLoadingSelector(state))

    let { dog } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogImage(dog))
    }, [dog])

    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Inicio
                    </Link>

                    <form>
                        <DogSelect />
                    </form>
                </div>
            </nav>
            {isLoading ? (
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
                <div>
                    <h1>{dog}</h1>
                    <div className=" d-flex flex-wrap  align-content-between">
                        {dogImage.map((urlImage, i) => {
                            return <DogPhoto urlImage={urlImage} key={i} />
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DogContainer
