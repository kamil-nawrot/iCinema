import { combineReducers } from 'redux';

const movieReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LIST': return action.payload;
        default: return state;
    }
}

const genreReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_GENRES': return action.payload;
        default: return state;
    }
}

const selectedMovieReducer = (selectedMovie = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED': return action.payload;
        default: return selectedMovie;
    }
}

export default combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    selectedMovie: selectedMovieReducer
});