import MovieDatabase from '../apis/MovieDatabase';

export const fetchMovieList = () => async dispatch => {
    const response = await MovieDatabase.get('/movie/now_playing');
    dispatch({ type: 'FETCH_LIST', payload: response.data.results });
};

export const fetchGenreList = () => async dispatch => {
    const response = await MovieDatabase.get('/genre/movie/list');
    dispatch({ type: 'FETCH_GENRES', payload: response.data.genres });
}

export const selectMovie = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
}