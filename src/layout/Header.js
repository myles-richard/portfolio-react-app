import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import { Link } from 'react-scroll';
// import About from './about/About';

export default function Header() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');
    


    // Set Initial State Of Menu 
    //add component level state
    const [showMenu, setMenu] = useState(false);

    useEffect(() => {
        setMenu(false)
        // eslint-disable-next-line
    }, [])

    const toggleMenu = (e) => {
        e.preventDefault();
        if(!showMenu){
            // Set Menu State
            setMenu(true);
            return
        } else {
            setMenu(false);
        }
    };
    const dontShow = (
        <header>
            <div className="menu-btn" onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className="menu">
                <div className="menu-branding">
                    <div className="portrait"></div>
                </div>
                
                <ul className="menu-nav current">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                
                    <li className="nav-item">
                   
                        
                        {/* <a href="/about" className="nav-link">
                            About Me
                        </a> */}
                    </li>
            
                    <li className="nav-item">
                        <a href="/work" className="nav-link">
                            My Work
                        </a>
                    </li>
                
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                </ul>
            </nav>
            
        </header>
    )

    const showLinks = (
        <header>
            <div className="menu-btn close" onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className="menu show">
                <div className="menu-branding show">
                    <div className="portrait"></div>
                </div>
                
                <ul className="menu-nav show current">
                    <li className="nav-item show">
                    <Link to="/" className="nav-link" >Home</Link>
                        {/* <a href="/" className="nav-link">
                            Home
                        </a> */}
                    </li>
               
                    <li className="nav-item show">
                    {/* <Link
                        className="nav-link"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        onClick={toggleMenu}
                    >About Me</Link> */}
                    <Link to="/about" className="nav-link">About Me</Link>
                        {/* <a href="/about" className="nav-link">
                            About Me
                        </a> */}
                    </li>
            
                    <li className="nav-item show">
                        <a href="/work" className="nav-link">
                            My Work
                        </a>
                    </li>
            
                    <li className="nav-item show">
                        <a href="/contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>

            </nav>
            {/* <div>
                <Switch>
                    <Route exact path="/about" component={About} />
                </Switch>
            </div> */}
        </header>

    )

    return (
        <>
            {showMenu ? showLinks : dontShow }
        </>
    )
}
