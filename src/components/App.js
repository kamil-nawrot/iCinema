import React from 'react';

import MovieList from './MovieList';
import MovieInfo from './MovieInfo';

const App = () => {
    return (
        <div className="container">
            <MovieList />
            <MovieInfo />
        </div>
    );
};

export default App;