import React from 'react'
import '../../App.css'
import {database} from '../../database/database'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const API = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(database);
        }, 2000);
      }
      )
      API
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
    return (
        <div className="itemListContainer row m-3 container d-flex justify-content-center">
            <>
                <ItemList />
            </> 
        </div>
    )
}

export default ItemListContainer