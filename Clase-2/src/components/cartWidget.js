import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CartWidget = () => {
    const stylesWidgetCart = {
        color: 'white',
        fontSize: '25px',
        padding: '0',
        marginTop: '5px'
    }
    return ( 
            <FontAwesomeIcon icon={faShoppingCart} style={stylesWidgetCart} />
    )
}

export default CartWidget