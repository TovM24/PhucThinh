import React, { useState, useRef } from "react";
import { User, ChevronDown  } from "lucide-react"
import { Link } from "react-router-dom";
// import logo from "../Assets/logo.png";
// import nav_dropdown from "../Assets/nav-dropdown.png

import './Navbar.css'

const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const menuRef = useRef()

    return (
        <div className="navbar">
            <p className="name">demo</p>

            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => {setMenu("home")}}><Link className="nav-link" to='/'>Home</Link> {menu === "home" ? <hr/> : <></>} </li>
                <li onClick={() => {setMenu("store")}}><Link className="nav-link" to='/store'>Store</Link> {menu === "store" ? <hr/> : <></>} </li>
                <li onClick={() => {setMenu("news")}}><Link className="nav-link" to='/news'>News</Link> {menu === "news" ? <hr/> : <></>} </li>
                <li onClick={() => {setMenu("pre-orders")}}><Link className="nav-link" to='/pre-orders'>Pre-Orders</Link> {menu === "pre-orders" ? <hr/> : <></>} </li>
                <li onClick={() => {setMenu("comming-soon")}}><Link className="nav-link" to='/comming-soon'>Comming Soon</Link> {menu === "comming-soon" ? <hr/> : <></>} </li>
            </ul>

            <div className="nav-login-cart">
                <Link style={{ textDecoration: 'none' }} to='/login'><button style={{ background: '#8262d2' }}><User/><p>Login/Register</p></button></Link>
            </div>
        </div>
    )
}


export default Navbar;