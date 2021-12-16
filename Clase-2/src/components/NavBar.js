import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import CartWidget from './CartWidget.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const stylesNavbar = {
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alingItems: 'center',
}

const stylesLogoNav = {
    width: '60px',
    height: '60px',
}

const stylesUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alingItems: 'center',
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

const NavBar = () => {
    return (
        <div className="navbar" style={{margin:0, padding:0}}> 
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

const RoutesNav = () => {
    return (
        <div className="container-fluid" style={{margin:0, padding:0}}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/home" element={<NavBar />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
    
}

export default RoutesNav;
