import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import CartWidget from './cartWidget.js'

const NavBar = () => {
    const stylesNavbar = {
        backgroundColor: '#333',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    }
    
    const stylesLogoNav = {
        width: '60px',
        height: '60px',
    }

    const stylesUl = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    const stylesLi = {
        listStyle: 'none',
    }

    const stylesA = {
        color: '#fff',
        textDecoration: 'none',
        padding: '0px 10px',
        fontSize: '20px',
    }
    return (
        <div className="navbar"> 
            <nav style={stylesNavbar}>
                <img src={logo} className="logoNav" style={stylesLogoNav} alt="Logo" />
                <ul style={stylesUl}>
                    <li style={stylesLi}>
                        <a style={stylesA} href="/">Home</a>
                    </li>
                    <li style={stylesLi}>
                        <a style={stylesA} href="/about">About</a>
                    </li>
                    <li style={stylesLi}>
                        <a style={stylesA} href="/contact">Contact</a>
                    </li>
                    <li style={stylesLi}>
                        <a style={stylesA} href="/cart">
                        <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav> 
        </div>
    )
    
}

export default NavBar;
