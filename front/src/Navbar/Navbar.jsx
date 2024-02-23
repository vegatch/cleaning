import React, { useState, useEffect } from "react";
import {NavLink, useLocation} from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import logo from '../pics/logo-red.png'
import Phone from "../components/Phone/Phone";

import './navbar.css';



const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false)
    useEffect( () =>{

    }, [isOpen])
    const toggleNav = () =>{
        setIsOpen((prev) => !prev)
    }

const { pathname } = useLocation();
  useEffect(() =>{
    //   console.log(pathname)
    setIsOpen(false);
  }, [pathname])

  
    const navList = [
        {
            id:1,
            path: '/',
            myUrl:'Home',
            className:'current nav-link'
        },
        {
            id:2,
            path: '/Service',
            myUrl:'Service',
            className:'current nav-link'
        },
        {
            id:3,
            path: '/BookNow',
            myUrl:'Book Now',
            className:'current nav-link'
        },
        {
            id:4,
            path: '/Faq',
            myUrl:'FAQ',
            className:'current nav-link'
        },
        {
            id:5,
            path: '/Contact',
            myUrl:'Contact us',
            className:'current nav-link'
        },
    ]
    return(
        <header>
            <div className="top-nav">    
                            
                <div>
                     <Phone className='light' message='Call us now  ' />
                </div>
            </div>
            <div className="logoAndNav-container">
                <div className="logo-container_header">
                    <NavLink  to='/'> <img src={logo} alt='Benskya logo'/> </NavLink>
                </div>
                
                <nav className="navbar ">
                        <ul className={`menu-nav ${isOpen ? ' show-menu' : 'hide-menu'}`}>
                            
                                {
                                    navList.map((list) =>{
                                    
                                        return (
                                            <li key={list.id} > 
                                            <NavLink end to={list.path} 
                                            onClick={toggleNav}
                                            className={list.className} 
                                            > 
                                            {list.myUrl} 
                                            </NavLink></li>  
                                        
                                        )
                                    
                                    })
                                } 
                            
                        </ul>
                        
                    <div className="nav-hamburger">
                    <button
                            className="toggle"
                            onClick={toggleNav}
                        >
                            {isOpen ? <MdClose /> : <FiMenu />} 
        
                        </button>
                    </div>

                </nav>
                
            </div>
        </header>
    )
}

export default Navbar;