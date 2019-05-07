import React from 'react';
import { connect } from 'react-redux';

import { fetchMovieList, selectMovie } from '../actions';

class MovieList extends React.Component
{
    componentDidMount() {
        this.props.fetchMovieList();
    }
    
    renderList() {
        return this.props.movies.map(movie => {
            return (
                <div className="item" key={movie.id} onClick={e => {
                        this.props.selectMovie(movie);
                        e.persist();
                        for (let child of e.target.parentElement.children) {
                            child.classList.remove("active");
                        }
                        e.target.classList.add("active");
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
    return { movies: state.movies }; 
};

export default connect(mapStateToProps, { fetchMovieList, selectMovie })(MovieList);