import React from "react"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import Weathertab from "./Weathertab"

export default function Navbar(){
    return (
        <div>
            <nav className="nav">
                <h1 className="nav--title">Pogodynka</h1>
                <Link to="/" style={{ textDecoration: 'none', color: "inherit"}}><h4 className="nav--buttons">Strona Główna</h4></Link>
                <Link to="/search" style={{ textDecoration: 'none', color: "inherit"}}><h4 className="nav--buttons">Wybierz miasto</h4></Link>
            </nav>      
            <Outlet />
        </div>       
    )
}