import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemCount = () => {
<<<<<<< HEAD
    const [number, setNumber] = useState(0)

    const add = () => {
        setNumber(number + 1)
=======
    const  [number, setNumber] = useState(0)

    const add = () => {
        number === 0 ? setNumber(1) : setNumber(number + 1)
>>>>>>> 5640ff0fa84e7431f3c22620e1229f5900e1820b
    }

    const remove = () => {
        number === 0 ? setNumber(0) : setNumber(number - 1)
    }

    return (
        <div className="card shadow w-25 m-3">
            <div className="row d-flex justify-content-between">
<<<<<<< HEAD
                <button className="btn btn-outline-success col-4 mt-3 ms-3" onClick={add}>+</button>
                <button className="btn btn-outline-danger col-4 mt-3 me-3" onClick={remove}>-</button>
            </div>
            <div className="row d-flex justify-content-center">
                <h1 className="col-12 d-flex justify-content-center">{number}</h1>
=======
                <button className="btn btn-outline-success col-4 mt-3 ms-3" onClick={add}> + </button>
                <button className="btn btn-outline-danger col-4 mt-3 me-3" onClick={remove}> - </button>
            </div>
            <div className="row count d-flex justify-content-center">
                <h1 className="col-12 d-flex justify-content-center">
                    {number}
                </h1>
>>>>>>> 5640ff0fa84e7431f3c22620e1229f5900e1820b
            </div>
        </div>
    )
}

export default ItemCount