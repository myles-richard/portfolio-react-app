import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
                        <a href="/about" className="nav-link">
                            About Me
                        </a>
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
    const changeMenu = () => {
        setMenu(false)
    }

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
                        <Link to="/portfolio-react-app" onClick={changeMenu} className="nav-link" >Home</Link>
                    </li>
               
                    <li className="nav-item show">
                        <Link to="/about" onClick={changeMenu} className="nav-link">About Me</Link>
                    </li>
            
                    <li className="nav-item show">
                    <Link to="/work" onClick={changeMenu} className="nav-link">My Work</Link>
                    </li>
            
                    <li className="nav-item show">
                    <Link to="/contact" onClick={changeMenu} className="nav-link">Contact Me</Link>
                    </li>
                </ul>

            </nav>
        </header>

    )

    return (
        <>
            {showMenu ? showLinks : dontShow }
        </>
    )
}
