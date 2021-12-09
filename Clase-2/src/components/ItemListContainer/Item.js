import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { database } from '../../database/database'

const Item = () => {
    return (
        database.map((item) => {
            return (
            <div className="card shadow col-4" category={item.category} id={item.id}>
                <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                    
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text text-weight">$ {item.precio}</p>
                        <button className="btn btn-outline-dark" id={item.id}>Comprar</button>
                    </div>
            </div>
        )})
    )
}


export default Item