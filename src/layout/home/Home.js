import React from 'react'

export default function Home() {
    return (
        <main id="home">
            <h1 className="lg-heading">
                Myles <span className="text-secondary">Richard</span>
            </h1>
            <h2 className="sm-heading">
                Web Developer, Programmer, Designer & Digital Marketing
            </h2>

            <div className="icons">
                <a href="#!">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                
                <a href="#!">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/myles-richard/">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/myles-richard">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </div>
        </main>
    )
}
