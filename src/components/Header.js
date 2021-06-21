import React from 'react'
import {Link} from "react-router-dom"
const Header = ()=>{
    return(
        <header className="header">
            <h1>Data History of Covid</h1>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/corona">corona</Link>

            </div>
        </header>
    )
}
export default Header;