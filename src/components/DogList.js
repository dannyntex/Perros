import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { dogListSelector } from '../store/modules/dogList/selectors'
import { getDogList } from '../store/modules/dogList/slice'
import { selectedDog } from '../store/modules/dogImages/slice'

export const DogList = () => {
    const dispatch = useDispatch()
    const [breed, setBreed] = useState('')

    const dogList = useSelector((state) => dogListSelector(state))
    useEffect(() => {
        if (!dogList.length) {
            dispatch(getDogList())
        }
    }, [])
    const handleOnChange = (e) => {
        if (e.target.value) {
            setBreed(e.target.value)
            dispatch(selectedDog(e.target.value))
        }
    }
    return (
        <div className="m-0 vh-100 row justify-content-center align-items-center ">
            <div className="mx-auto col-auto bg-light  border  px-5 py-5 ">
                <div className="row gx-5">
                    <div className="col">
                        <p className="fs-1">RAZA DE PERRO</p>
                        <div className="p-3 ">
                            Por favor , selecione una raza
                        </div>
                        <form>
                            <select
                                onChange={(e) => handleOnChange(e)}
                                className="form-select"
                                value={breed}
                            >
                                {dogList.map((dog) => {
                                    return (
                                        <option key={dog} value={dog}>
                                            {dog}
                                        </option>
                                    )
                                })}
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
