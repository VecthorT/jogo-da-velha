import React from "react";
import Sobre from "../../objects/Sobre";
import Logo from "../../objects/Logo";
import IconMenu from "../../objects/IconMenu";
import './style.css';


const Header = ()=>{
    return(
      <header className="header">
        <Logo/>
        <Sobre/> 
        <IconMenu/>
      </header>
    )
}

export default Header
