import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

export default function Work() {
    return (
        <main id="work">
            <h1 className="lg-heading">
                My <span className="text-secondary">Work</span>
            </h1>
            <h2 className="sm-heading">
                Check out my projects!
            </h2>
            <div className="projects">
                <div className="item">
                    <a href="#!">
                        <img src={require('../../images/xrsz.jpeg')} alt="project" />
                    </a>
                    <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a href="#" className="btn-dark">
                        <i className="fab fa-github"></i> Project
                    </a>
                </div>

                <div className="item">
                    <a href="#!">
                        <img src={require('../../images/xrsz.jpeg')} alt="project" />
                    </a>
                    <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a href="#" className="btn-dark">
                        <i className="fab fa-github"></i> Project
                    </a>
                </div>

                <div className="item">
                    <a href="#!">
                        <img src={require('../../images/xrsz.jpeg')} alt="project" />
                    </a>
                    <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a href="#" className="btn-dark">
                        <i className="fab fa-github"></i> Project
                    </a>
                </div>

                <div className="item">
                    <a href="#!">
                        <img src={require('../../images/xrsz.jpeg')} alt="project" />
                    </a>
                    <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a href="#" className="btn-dark">
                        <i className="fab fa-github"></i> Project
                    </a>
                </div>

                <div className="item">
                    <a href="#!">
                        <img src={require('../../images/xrsz.jpeg')} alt="project" />
                    </a>
                    <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a href="#" className="btn-dark">
                        <i className="fab fa-github"></i> Project
                    </a>
                </div>
            </div>
            <Footer />
        </main>
    )
}
