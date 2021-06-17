import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { dogListSelector } from '../../store/modules/dogList/selectors'
import { getDogList, selectedDog } from '../../store/modules/dogList/slice'
import { dogBreedSelector } from '../../store/modules/sharedSelect'

export const DogSelect = () => {
    const dispatch = useDispatch()

    const breed = useSelector((state) => dogBreedSelector(state))
    const dogList = useSelector((state) => dogListSelector(state))
    useEffect(() => {
        if (!dogList.length) {
            dispatch(getDogList())
        }
    }, [])
    const handleOnChange = (e) => {
        if (e.target.value) {
            dispatch(selectedDog(e.target.value))
        }
    }
    return (
        <select
            onChange={(e) => handleOnChange(e)}
            className="form-select"
            value={breed && undefined}
        >
            {dogList.map((dog) => {
                return (
                    <option key={dog} value={dog}>
                        {dog}
                    </option>
                )
            })}
        </select>
    )
}
