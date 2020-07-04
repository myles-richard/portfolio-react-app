import React from 'react';
import Footer from '../Footer';

export default function Contact() {
    return (
        <main id="contact">
            <h1 className="lg-heading">
                Contact <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
                This is how you can reach me...
            </h2>
            <div className="boxes">
                <div>
                    <span className="text-secondary">Email:</span>
                    myrich22@gmail.com
                </div>

                <div>
                    <span className="text-secondary">Phone:</span>
                    (503)-384-8818
                </div>

                <div>
                    <span className="text-secondary">Location:</span>
                    Bay Area, CA
                </div>
            </div>
            
        </main>
    )
}
