import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import StartEarning from '../components/Pages/StartEarning/StartEarning';


const Routes = () => {

    return (
        <div id="appCapsule">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/start-earning" component={StartEarning} />
            </Switch>
        </div>
    );
};

export default Routes;
