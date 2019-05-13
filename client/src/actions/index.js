import MovieDatabase from '../apis/MovieDatabase';
import LocalServer from '../apis/LocalServer';

export const selectRegion = (region, lang) => {
    return {
        type: 'REGION_SELECTED',
        payload: { region, lang }
    }
} 

export const fetchMovieList = (locale) => async dispatch => {
    const response = await MovieDatabase.get('/movie/now_playing', {
        params: {
            region: locale.region,
            language: locale.lang
        }
    });
    dispatch({ type: 'FETCH_LIST', payload: response.data.results });
};

export const fetchGenreList = () => async dispatch => {
    const response = await MovieDatabase.get('/genre/movie/list');
    dispatch({ type: 'FETCH_GENRES', payload: response.data.genres });
}

export const fetchExternalId = (movieId = null) => async dispatch => {
    const response = await MovieDatabase.get(`/movie/${movieId}/external_ids`);
    dispatch({ type: 'FETCH_EXTERNAL_IDS', payload: response.data });
}

export const selectMovie = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
}

export const selectPlace = (place) => {
    return {
        type: 'PLACE_SELECTED',
        payload: place
    }
}

export const fetchSchedule = (movieId = null) => async dispatch => {
    const response = await LocalServer.get(`/schedule/${movieId}`);
    dispatch({ type: 'FETCH_SCHEDULE', payload: response.data });
}

export const selectShowing = (showing) => {
    return {
        type: 'SHOWING_SELECTED',
        payload: showing
    }
}

export const confirmBooking = (booking) => async dispatch => {
    await LocalServer.post('/bookings', {
            movie: {
                title: booking.selectedMovie.title,
                id: booking.selectedMovie.id,
                poster: booking.selectedMovie.poster_path,
                genres: booking.selectedMovie.genre_ids,
                release_date: booking.selectedMovie.release_date,
                average_score: booking.selectedMovie.vote_average,
                overview: booking.selectedMovie.overview
            },
            region: {
                region: booking.region.region,
                lang: booking.region.lang
            },
            showing: booking.selectedShowing
        });
    dispatch({ type: 'BOOKING_CONFIRMED', payload: booking });
}