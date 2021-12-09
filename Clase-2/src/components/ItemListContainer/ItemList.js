import React from 'react'
import { database } from '../../database/database.js'
import Item from './Item'



const ItemList = () => {
    return (
            database.map((item) => {
                return (
                    <Item key={item.id} item={item} />
                )
            }
    )
    )}


export default ItemList