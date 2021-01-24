import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const PortfolioSlider = () => {
    return (
        <div>
        <Carousel showArrows={true} className="mt-5">
        <div>
            <img src="img/c1.png" alt="slides" />
        </div>
        <div>
            <img src="img/c1.png" alt="slides" />
        </div>
        <div>
            <img src="img/c1.png" alt="slides" />
        </div>
        <div>
            <img src="img/c1.png" alt="slides" />
        </div>
        <div>
            <img src="img/c1.png" alt="slides" />
        </div>
        <div>
            <img src="img/c1.png" alt="slides" />
        </div>
    </Carousel>
    
    <ul className="list-inline">
    <li className="list-inline-item"><span className="tab-btn">2D Design</span></li>
    <li className="list-inline-item"><span className="tab-btn">Engineering Drawing</span></li>
    <li className="list-inline-item"><span className="tab-btn">Mechanical Engineering</span></li>
    <li className="list-inline-item"><span className="tab-btn">Ruby</span></li>
    <li className="list-inline-item"><span className="tab-btn">2D Design</span></li>
 </ul>
        </div>
       );
}

export default PortfolioSlider;
