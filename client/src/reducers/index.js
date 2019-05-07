import { combineReducers } from 'redux';

const regionReducer = (region = {}, action) => {
    switch(action.type) {
        case 'REGION_SELECTED': return action.payload;
        default: return region;
    }
}

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

const externalIdReducer = (selectedMovie = '', action) => {
    switch (action.type) {
        case 'FETCH_EXTERNAL_IDS': return action.payload;
        default: return selectedMovie;
    }
}

const selectedMovieReducer = (selectedMovie = '', action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED': return action.payload;
        default: return selectedMovie;
    }
}

export default combineReducers({
    region: regionReducer,
    movies: movieReducer,
    genres: genreReducer,
    externalId: externalIdReducer,
    selectedMovie: selectedMovieReducer
});