import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMovieList, selectMovie, selectRegion } from '../actions';

class MovieList extends React.Component
{
    componentDidMount() {
        this.props.fetchMovieList(this.props.region);
    }

    renderList() {
        return this.props.movies.map(movie => {
            return (
                <div className={`item ${movie.id === this.props.selectedMovie.id ? 'active' : ''}`} key={movie.id} onClick={() => {
                        this.props.selectMovie(movie);
                    }}>
                    {movie.title}
                </div>
            );
        })
    }

    render() {
        return (
            <div className="list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return { 
        movies: state.movies,
        selectedMovie: state.selectedMovie,
        region: state.region
    }; 
};

export default withRouter(connect(mapStateToProps, { fetchMovieList, selectMovie, selectRegion })(MovieList));