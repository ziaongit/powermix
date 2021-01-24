import React from 'react';
import PortfolioSlider from './PortfolioSlider';
import UIUXDesigner from './UIUXDesigner';

const Portfolio = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                <PortfolioSlider />
                </div>
                <div className="col-md-6 text-center">
                    <UIUXDesigner />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
