import React from 'react';
import SocialMedia from './SocialMedia';

const Profile_View = () => {
    return (
        <div className="container mt-5 mb-4">
            <div className="row">
                <div className="col-md-6 float-right">
                    <flex-container-1>
                        <flex-item><img src="img/profile.png" alt="Profile"/></flex-item>
                        <flex-container-2>
                            <flex-item><span className="name">Michael Preston</span></flex-item>
                            <flex-item><svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 7C13 11.6667 7 15.6667 7 15.6667C7 15.6667 1 11.6667 1 7C1 5.4087 1.63214 3.88258 2.75736 2.75736C3.88258 1.63214 5.4087 1 7 1C8.5913 1 10.1174 1.63214 11.2426 2.75736C12.3679 3.88258 13 5.4087 13 7Z" stroke="#8091A7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" stroke="#8091A7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg> <span className="address">Florida, United States</span></flex-item>
                        </flex-container-2>
                    </flex-container-1>
                    <div className="button-container">
                    <button className="view-profile-btn">View Profile</button>
                    <button className="message-btn">Message</button>
                    </div>
                </div>
                <div className="col-md-6 profile-view-social">
                    <SocialMedia />
                </div>
            </div>
        </div>
    );
}

export default Profile_View;
