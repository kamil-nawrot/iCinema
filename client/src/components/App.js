import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegionSelection from './RegionSelection';
import MovieSelection from './MovieSelection';
import Navigation from './Navigation';

class App extends React.Component
{
    render() {
        return (
            <div>
                <Switch>
                  <Route path="/region" exact component={RegionSelection} />
                  <Route path="/movies" exact component={MovieSelection} />                    
                </Switch>
                <Navigation />
            </div>
        );
    }
};

export default App;