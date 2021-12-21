import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { NavLink } from 'react-router-dom'


const Item = ({ item }) => {
            return (
                <>
            <div className="card shadow col-lg-4 col-md-4 col-sm-12 col-xs-12" category={item.category}>
                <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text text-weight">$ {item.precio}</p>
                        <NavLink to={`/item/${item.id}`} className="btn btn-outline-dark" id={item.id}>Comprar</NavLink>
                    </div>
            </div>
            </>
    )
}


export default Item