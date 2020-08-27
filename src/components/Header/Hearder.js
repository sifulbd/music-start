import React from 'react';
import './Header.css';

function Hearder() {
    return (
        <div className="header">
            <h2><img className="logo" src="https://www.brandcrowd.com/gallery/brands/pictures/picture13892699412008.jpg" alt="bae"/> Music Star</h2>
            <nav className="nav">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-left">
                            <a href="/review">Review</a>
                            <a href="/contact">Contact</a>
                        </div>                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Hearder;
