import React from 'react'
import { useDispatch } from 'react-redux'
import { getIsLoading } from '../../store/modules/dogImages/slice'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import '../../styles.css'
export const DogPhoto = (props) => {
    const { urlImage } = props
    const dispatch = useDispatch()

    const handleOnLoad = () => {
        dispatch(getIsLoading(false))
    }

    return (
        <Zoom>
            <img
                src={urlImage}
                width="150"
                className="img-fluid img-thumbnail p-2"
                loading="lazy"
                onLoad={handleOnLoad}
                alt="dog"
            />
        </Zoom>
    )
}
