import React from 'react'
import Footer from '../Footer';

export default function About(props) {

    const something = props.location.state
    
    
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
                    <p>I'm a full-stack Software Engineer with an eye for design. Conceptualizing an Idea
                        and bringing it to life through code has become a new passion of mine. I've always been
                        a tech-enthusiast that likes to learn and and tackle new problems daily. My background 
                        includes sales & athletics, which helps me solve problems both anilytically and creatively.</p>
                </div>
                <div className="job job-1">
                    <h3>Adobe</h3>
                    <h5>Front End Developer</h5>
                    <p>Marketing Insights and Operations team.
                        sdfbfdbdfbdfbfdbfdbgfbgfnbgfnfgngfngfngf.
                        sdbdfgbgfbgfbfdbdfbfdbdfdfbdbddbdfbbdfb.</p>
                </div>
                <div className="job job-2">
                    <h3>SoftWare Engeneering Immersive</h3>
                    <h5>Full Stack Developer</h5>
                    <p>Projects:<br/>Title: XRSZ | Date: April 2020 | Description:<br/>
                    ● Designed and developed the frontend and backend of a workout website. Easy to do workouts while in quarantine.<br/>
                    ● Technologies used: HTML, SCSS, JavaScript, React.JS, Semantic-UI-React, Node.JS, Express, MongoDB.<br/>
                    <br/>
                    Title: Simon Game | Date: February 2020 | Description:<br/>
                    ● Designed and developed an online web version of The Simon Game.<br/>
                    ● Technologies used: HTML, CSS, JavaScript.<br/>
                    ● Presented both to a diverse audience of 28 classmates and close friends. Used feedback to improve the game.</p>
                </div>
                <div className="job job-3">
                    <h3>Free Lance Digital Marketing</h3>
                    <h5>Front End Developer</h5>
                    <p>Gamespeed - www.Gamespeed.com - July 2019 - December 2019
                    - Concord,CA<br/>
                    ● Revamped Website with wordpress.<br/>
                    ● SEO optimized and created content for web pages.<br/>
                    ● Set up and executed Facebook ads increasing reach and engagement among targeted demographics and age groups.<br/>
                    3C Hemp - www.3CHemp.com <br/> March 2019
                    Oakley, CA<br/>
                    ● Built Squarespace website, SEO optimized and created content for web pages.<br/>
                    ● Created print/ digital ads, blog and flyers, with a consistent look across platforms for all digital/ social media platforms.</p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
