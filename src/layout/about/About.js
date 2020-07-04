import React from 'react'
import Footer from '../Footer';

export default function About() {
    return (
        
        <main id="about">
            <h1 className="lg-heading">
                About <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
                Let me tell you a few things...
            </h2>
            <div className="about-info">
                <img src={require('../../images/profile.jpeg')} alt="myles rich"
                className="bio-image" />
                <div className="bio">
                    <h3 className="text-secondary">Bio</h3>
                    <p>lorem;lasdjlkajlfdsjmflkasfmjlds;vsld
                    lorem;lasdjlkajlfdsjmflkasfmjlds;vsld
                    lorem;lasdjlkajlfdsjmflkasfmjlds;vsld
                    lorem;lasdjlkajlfdsjmflkasfmjlds;vsld</p>
                </div>
                <div className="job job-1">
                    <h3>Adobe</h3>
                    <h6>Front End Developer</h6>
                    <p>Marketing Insights and Operations team.
                        sdfbfdbdfbdfbfdbfdbgfbgfnbgfnfgngfngfngf.
                        sdbdfgbgfbgfbfdbdfbfdbdfdfbdbddbdfbbdfb.</p>
                </div>
                <div className="job job-2">
                    <h3>SoftWare Engeneering Immersive</h3>
                    <h6>Front End Developer</h6>
                    <p>Marketing Insights and Operations team.
                        sdfbfdbdfbdfbfdbfdbgfbgfnbgfnfgngfngfngf.
                        sdbdfgbgfbgfbfdbdfbfdbdfdfbdbddbdfbbdfb.</p>
                </div>
                <div className="job job-3">
                    <h3>Free Lance Digital Marketing</h3>
                    <h6>Front End Developer</h6>
                    <p>Marketing Insights and Operations team.
                        sdfbfdbdfbdfbfdbfdbgfbgfnbgfnfgngfngfngf.
                        sdbdfgbgfbgfbfdbdfbfdbdfdfbdbddbdfbbdfb.</p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
