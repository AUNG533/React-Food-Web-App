import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>HOME</Link>
        <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu === "menu"? "active" : ""}>MENU</a>
        <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>MOBILE-APP</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>CONTACT US</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=> setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
