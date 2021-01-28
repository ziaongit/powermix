import React from 'react';
import Router from './routes';
import Header from './components/Pages/SharedComponents/Header';
import Footer from './components/Pages/SharedComponents/Footer';

const App = () => {
    return (
        <div id="outer-container">
            <Header />
            <div className="container" id="page-wrap">
                <Router />
            </div>
            <Footer />
        </div>
    );
};

export default App;
