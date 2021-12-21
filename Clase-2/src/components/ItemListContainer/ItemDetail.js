import React from 'react'
import ItemCount from '../ItemCount'

export const ItemDetail = ({item}) => {
    return (
        <div className="card mb-3">
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={item.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title textoCuerpo--fontFamily textoCuerpo--fontSize">{item.name}</h5>
                    <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize">5% de descuento pagando por transferencia bancaria o efectivo</p>
                    <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontSize">Envío gratis a todo el país a partir de $20.000</p>
                    <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontSize">Talle: 37 / 38 / 39 / 40</p>
                    <p className="card-text textoCuerpo--fontFamily textoCuerpo--fontWeight textoCuerpo--fontSize">Precio: ${item.precio}</p>
                    <p className="textoCuerpo--fontFamily textoCuerpo--fontSize">Stock disponible: {item.stock} unidades</p>
                    <p className="textoCuerpo--fontFamily textoCuerpo--fontSize"><ItemCount /></p>
                </div> 
            </div>
        </div>
        </div>
    )
}
