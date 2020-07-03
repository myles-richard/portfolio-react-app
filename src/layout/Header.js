import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../About';

export default function Header() {
    return (
        <header>
            <div className="menu-btn">
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className="menu">
                <div className="menu-branding">
                    <div className="portrait"></div>
                </div>
                
                <ul className="menu-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                </ul>

                <ul className="menu-nav">
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            About Me
                        </a>
                    </li>
                </ul>

                <ul className="menu-nav">
                    <li className="nav-item">
                        <a href="/work" className="nav-link">
                            My Work
                        </a>
                    </li>
                </ul>

                <ul className="menu-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                </ul>

            </nav>
        </header>
    )
}
