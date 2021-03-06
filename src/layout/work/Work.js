import React from 'react';

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
                    <a href="https://myles-richard.github.io/Project-0---Simon-game-/">
                        <img src={require('../../images/simon2.jpeg')} alt="simon-game-project" />
                    </a>
                    <a href="https://myles-richard.github.io/Project-0---Simon-game-/" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a href="https://github.com/myles-richard/Project-0---Simon-game-" className="btn-dark">
                        <i className="fab fa-github"></i> Project
                    </a>
                </div>

                <div className="item">
                    <a href="#!">
                        <img src={require('../../images/xrsziphone.jpeg')} alt="xrsz-project" />
                    </a>
                    <a href="https://xrszworkout.herokuapp.com/" className="btn-light">
                        <i className="fas fa-eye"></i> Project
                    </a>
                    <a href="https://github.com/myles-richard/XRSZ-Final-Frontend/tree/master/xrsz-app" className="btn-dark">
                        <i className="fab fa-github"></i> Project
                    </a>
                </div>

                
            </div>
            {/* <Footer /> */}
        </main>
    )
}
