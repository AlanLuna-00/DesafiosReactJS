import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CartWidget = () => {
    const stylesWidgetCart = {
        color: 'white',
        fontSize: '26px',
        padding: '0',
    }
    return ( 
            <FontAwesomeIcon icon={faShoppingCart} style={stylesWidgetCart} />
    )
}

export default CartWidget