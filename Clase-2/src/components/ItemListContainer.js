import React from 'react'
import '../App.css'
import {database} from '../database/database'

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
        <div className="itemListContainer card shadow w-25 m-3">
            <ul>
                
            </ul>
        </div>
    )
}

export default ItemListContainer