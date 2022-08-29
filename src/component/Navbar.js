import React from 'react'
import {   Link } from "react-router-dom";


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark  ">
    <div className="container-fluid">
        <Link  className="navbar-brand" to="/">
            <h1> <span>THOR</span> GYM</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                   <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link" to="/about">About</Link>
                </li> 
                <li className="nav-item">
                   <Link className="nav-link" to="/trainers">Trainers</Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
            <button className="btn btn-primary" type="button">Free Trial</button>

        </div>
    </div>
</nav> 
  </>
  )
}

export default Navbar
