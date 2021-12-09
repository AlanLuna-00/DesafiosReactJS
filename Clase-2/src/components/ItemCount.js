import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemCount = () => {

    const [number, setNumber] = useState(0)

    const add = () => {
        setNumber(number + 1)
    }

    const remove = () => {
        number === 0 ? setNumber(0) : setNumber(number - 1)
    }

    return (
        <div className="card shadow w-25 m-3">
            <div className="row d-flex justify-content-between">
                    <button className="btn btn-outline-danger col-4 mt-3 ms-3" onClick={remove}> - </button>
                    <button className="btn btn-outline-success col-4 mt-3 me-3" onClick={add}> + </button>
                </div>
                <div className="row count d-flex justify-content-center">
                        <h1 className="col-12 d-flex justify-content-center">
                            {number}
                        </h1>
                </div>
        </div>
    )
}

export default ItemCount