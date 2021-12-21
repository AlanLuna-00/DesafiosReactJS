import React from 'react'
import '../../App.css'
import {database} from '../../database/database'
import ItemList from './ItemList'
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemListContainer = () => {
    const API = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 2000); 
      }
      )
      API
        .then((res) => {
          console.warn('API', res);
        })
        .catch((err) => {
          console.log(err);
        })
    return (
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <h1 className="text-center">Productos!</h1>
              <>
                  <ItemList />
              </> 
          </div>
        </div>
    )
}

export default ItemListContainer