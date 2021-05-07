import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show,handelShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100) {
                handelShow(true);
            }else handelShow(false);      
        });
            return ()=>{
                window.removeEventListener("scroll");
            };
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
