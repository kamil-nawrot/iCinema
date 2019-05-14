import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import MovieList from './MovieList';
import MovieInfo from './MovieInfo';

class MovieSelection extends React.Component
{
    render() {
        return (
            <div className="container">
            <NavLink exact className = "arrowleft" to="/"> <i className = "fas fa-angle-double-left"> </i></NavLink>
                <MovieList />
                <MovieInfo />
            <NavLink className = "arrowright" to="/schedule"> <i className = "fas fa-angle-double-right"> </i></NavLink>
            </div>
        );
    }
}

export default connect(null)(MovieSelection);