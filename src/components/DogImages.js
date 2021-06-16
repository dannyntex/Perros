import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
    dogImageSelector,
    isLoadingSelector
} from '../store/modules/dogImages/selectors'
import { getDogImage } from '../store/modules/dogImages/slice'

export const DogImages = () => {
    const dogImage = useSelector((state) => dogImageSelector(state))
    const isLoading = useSelector((state) => isLoadingSelector(state))

    let { dog } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDogImage(dog))
    }, [dog])
    return (
        <div className="container">
            <h1>{dog}</h1>
            <div className=" d-flex flex-wrap  align-content-between">
                {dogImage.map((urlImage, index) => {
                    return isLoading ? (
                        <div>Cargando</div>
                    ) : (
                        <LazyLoadImage
                            key={index}
                            src={urlImage}
                            width={200}
                            className="img-fluid img-thumbnail p-2"
                            alt={dog}
                            effect="blur"
                            delayTime={300}
                        />
                    )
                })}
            </div>
        </div>
    )
}
