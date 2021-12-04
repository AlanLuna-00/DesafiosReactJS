import React from 'react'
import '../App.css'
const Productos = ['Zapatos', 'Camisas', 'Pantalones', 'Bolsos', 'Accesorios'] 

const ItemList = (props) => {
    return (
        <div className="card-body">
            <h4 className="card-title"> {props.title} </h4>
            <ul>
            {Productos.map(producto => <li style={{listStyle:'none'}}>{producto}</li>)}
            </ul>
        </div>
    )
    
}

const ItemListContainer = () => {
    return (
        <div className="itemListContainer card shadow w-25 m-3">
            <ul>
                <ItemList title="Productos" />
            </ul>
        </div>
    )
}

export default ItemListContainer