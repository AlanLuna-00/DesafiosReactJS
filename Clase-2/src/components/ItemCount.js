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
        <div className="">
                <div className="d-flex">
                    <button className="btn btn-outline-danger" onClick={remove}> - </button>
                        <h5 className="font-weight m-3">
                            {number}
                        </h5>
                    <button className="btn btn-outline-success" onClick={add}> + </button>
                </div>
        </div>
    )
}

export default ItemCount