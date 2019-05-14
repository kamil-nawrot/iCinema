import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

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

const scheduleReducer = (schedule = [], action) => {
    switch (action.type) {
        case 'FETCH_SCHEDULE': return action.payload;
        default: return schedule;
    }
}

const selectedShowingReducer = (selectedShowing = '', action) => {
    switch (action.type) {
        case 'SHOWING_SELECTED': return action.payload;
        default: return selectedShowing;
    }
}

const selectedSeatsReducer = (selectedSeats = [], action) => {
    switch (action.type) {
        case 'SEATS_SELECTED': return action.payload;
        default: return selectedSeats;
    }
}

const bookingReducer = (booking = {}, action) => {
    switch (action.type) {
        case 'BOOKING_CONFIRMED': return action.payload;
        default: return booking;
    }
}

const findBookingsReducer = (bookings = [], action) => {
    switch (action.type) {
        case 'BOOKINGS_FOUND': return action.payload;
        default: return bookings;
    }
}

const personReducer = (person = {}, action) => {
    switch (action.type) {
        case 'PERSON_ADDED': return action.payload;
        default: return person;
    }
}

export default combineReducers({
    region: regionReducer,
    movies: movieReducer,
    genres: genreReducer,
    externalId: externalIdReducer,
    selectedMovie: selectedMovieReducer,
    schedule: scheduleReducer,
    selectedShowing: selectedShowingReducer,
    selectedSeats: selectedSeatsReducer,
    booking: bookingReducer,
    foundBookings: findBookingsReducer,
    form: formReducer,
    person: personReducer
});