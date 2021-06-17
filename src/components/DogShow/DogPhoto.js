import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getIsLoading } from '../../store/modules/dogImages/slice'
import Modal from 'react-modal'
import '../../styles.css'
export const DogPhoto = (props) => {
    const { urlImage } = props
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const handleOnLoad = () => {
        dispatch(getIsLoading(false))
    }

    useEffect(() => {
        Modal.setAppElement('body')
    }, [showModal])
    return (
        <Fragment>
            <img
                src={urlImage}
                width="150"
                className="img-fluid img-thumbnail p-2"
                loading="lazy"
                onLoad={handleOnLoad}
                onClick={() => setShowModal(true)}
                alt="dog"
            />
            <div className="modal fade">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <Modal isOpen={showModal} className="modal-custon">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cerrar
                                </button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src={urlImage}
                                    width="375"
                                    loading="lazy"
                                    alt="dog"
                                />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
