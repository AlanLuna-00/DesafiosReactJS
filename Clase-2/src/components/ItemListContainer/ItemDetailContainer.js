import React, { useState, useEffect} from 'react'
import { ItemDetail } from './ItemDetail'
import { useParams  } from 'react-router-dom'
import { database } from '../../database/database'

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})

    useEffect(() => {
        const mostrarProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(database)
            },1000)
        });
        mostrarProductos
        .then((res) => {
            const product = res.find(product => product)
            setItem(product)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    return (
        <div className="detailContainer container">
            <ItemDetail item={ item }/>
        </div>
    )
}
