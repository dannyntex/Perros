import React from 'react'
import { DogSelect } from '../DogSelect/DogSelect'

export const DogList = () => {
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
                            <DogSelect />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
