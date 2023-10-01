import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div style={{backgroundColor:"balck", color: "tomato"}}>
             <NavLink to="/">Home</NavLink>
             <NavLink to="/cart">Cart</NavLink>
        </div>
    )
}

export default Navbar;