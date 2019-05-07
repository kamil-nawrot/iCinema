import React from 'react';
import { connect } from 'react-redux';

import MovieList from './MovieList';
import MovieInfo from './MovieInfo';

class MovieSelection extends React.Component
{
    render() {
        return (
            <div className="container">
                <MovieList />
                <MovieInfo />
            </div>
        );
    }
}

export default connect(null)(MovieSelection);