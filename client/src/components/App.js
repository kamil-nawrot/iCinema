import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegionSelection from './RegionSelection';
import MovieSelection from './MovieSelection';
import ScheduleSelection from './ScheduleSelection';
import PlaceSelection from './PlaceSelection';
import PersonalInfo from './PersonalInfo';
import Navigation from './Navigation';

class App extends React.Component
{
    render() {
        return (
            <div>
                <Switch>
                  <Route path="/" exact component={RegionSelection} />
                  <Route path="/movies" exact component={MovieSelection} />
                  <Route path="/schedule" exact component={ScheduleSelection} />  
                  <Route path="/seats" exact component={PlaceSelection} />
                  <Route path="/personal-details" exact component={PersonalInfo} />                  
                </Switch>
                <Navigation />
            </div>
        );
    }
};

export default App;