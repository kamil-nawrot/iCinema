import React from 'react';

import MovieList from './MovieList';
import MovieInfo from './MovieInfo';

class App extends React.Component
{
    render() {
        return (
            <div className="container">
                <MovieList />
                <MovieInfo />
            </div>
        );
    }
};

export default App;