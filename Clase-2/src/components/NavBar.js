import React from 'react'
import '../App.css'
import CartWidget from './CartWidget.js'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/"className="navbar-brand marca-nombre">SportShoes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse barra-nav" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/informal" className="nav-link">Informales</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category/deportivas" className="nav-link" href="#">Deportivas</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/cart" className="nav-link"><CartWidget /></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
    )
    
}



export default NavBar;
