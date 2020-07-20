import React from 'react'

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
                    <p>I’m a full stack software developer with a background in sales and marketing. My specialty is frontend development, I enjoy being able to creatively solve problems through code and design. I have experience engineering, designing, testing, and building new applications.  

                    <br/>I’m  inspired by how technology is changing the world, disrupting industries and igniting change. I want to be a part of that.</p>
                </div>
                <div className="job job-1">
                    <h3>Adobe</h3>
                    <h4>Software Developer Intern</h4>
                    <p>Digital Academy Intern joining a team of 5, woring as a Remote Solutions Developer on the Marketing Insights and Operations
                        Team. <br/>My project is to make a Content Classification Application using Adobe's React Spectrum.<br/>
                         It makes the process of capturing meta data and 
                        benefiting from that information easier and more streamlined by:</p>
                        {/* <ul>
                            <li>storing those classifications in a central location.</li>
                            <li>allowing anyone to add additional metadata to that content through a UI and even a browser extension.</li>
                            <li>routing that data to the appropriate downstream systems.</li>
                            <li>Some downstream systems that will benefit from my projects are things like Facebook pixel tracking, Adobe Analytics reporting and segmentation, and signals to Audience Manager for building and populating segments.</li>
                            <li>Eventually this can be used for personalization at scale and better reporting and analysis.</li>
                        </ul> */}
                </div>
                <div className="job job-2">
                    <h3>Software Engeneering Immersive</h3>
                    <h4>Adobe Digital Academy Schollarship Award Winner | <a href="https://generalassemb.ly/how-we-work/social-impact/adobe-digital-academy">Adobe Digital Academy</a></h4>
                    <p>12 week immersive web development course includes Full-stack app development learning key programming languages, algorithms, data structures, design patterns, APIs, and more.</p>
                        <ul>
                            <li>Created & Developed projects focusing on full-stack front-end and back-end web development, problem solving, and collaboration skills.</li>
                            <li>Gained skills using Javascript, Node JS, Express, Python, React, MongoDB, Mongoose, Bootstrap,Semantic-UI, SASS, HTML, CSS</li>
                        </ul>
                </div>
                <div className="job job-3">
                    <h3>Free Lance Digital Marketing/ Web Design</h3>
                    <h4>Digital Marketing</h4><br/>
                    <p>Gamespeed - www.Gamespeed.com - Concord,CA</p>
                    <ul>
                        <li>Revamped Website with wordpress.</li>
                        <li>SEO optimized and created content for web pages.</li>
                        <li>Set up and executed Facebook ads increasing reach and engagement among targeted demographics and age groups.</li>
                    </ul><br/>
                    {/* ● <br/>
                    <br/> */}
                    <p>
                    3C Hemp - www.3CHemp.com - Oakley, CA</p>
                    <ul>
                        <li>Built Squarespace website, SEO optimized and created content for web pages.</li>
                        <li>Created print/ digital ads, blog and flyers, with a consistent look across platforms for all digital/ social media platforms.</li>
                    </ul>
                    <br/>
                </div>
            </div>
        </main>
    )
}
