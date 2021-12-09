import React from 'react'
import '../../App.css'
import {database} from '../../database/database'
import ItemList from './ItemList'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container row m-3 d-flex justify-content-center align-items-center">
            <>
                <ItemList />
            </> 
        </div>
    )
}

export default ItemListContainer