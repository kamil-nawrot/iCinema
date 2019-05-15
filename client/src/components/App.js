import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegionSelection from './RegionSelection';
import MovieSelection from './MovieSelection';
import ScheduleSelection from './ScheduleSelection';
import PlaceSelection from './PlaceSelection';
import PersonalInfo from './PersonalInfo';
import Navigation from './Navigation';
import Confirmation from './Confirmation';
import TicketSelection from './TicketSelection';

class App extends React.Component
{
    render() {
        return (
            <div>
                <Switch>
                  <Route path="/" exact component={RegionSelection} />
                  <Route path="/movies" exact component={MovieSelection} />
                  <Route path="/schedule" exact component={ScheduleSelection} />
                  <Route path="/tickets" exact component={TicketSelection} />
                  <Route path="/seats" exact component={PlaceSelection} />
                  <Route path="/personal-details" exact component={PersonalInfo} />  
                  <Route path="/confirmation" exact component={Confirmation} />                
                </Switch>
                <Navigation />
            </div>
        );
    }
};

export default App;