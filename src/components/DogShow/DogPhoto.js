import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getIsLoading } from '../../store/modules/dogImages/slice'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import '../../styles.css'
export const DogPhoto = (props) => {
    const { urlImage } = props
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const handleOnLoad = () => {
        dispatch(getIsLoading(false))
    }

    // useEffect(() => {
    //     Modal.setAppElement('body')
    // }, [showModal])
    return (
        <Zoom>
            <img
                src={urlImage}
                width="150"
                className="img-fluid img-thumbnail p-2"
                loading="lazy"
                onLoad={handleOnLoad}
                onClick={() => setShowModal(true)}
                alt="dog"
            />
        </Zoom>
    )
}
