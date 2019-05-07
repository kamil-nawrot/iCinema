import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
                        for (let child=0; child<e.target.parentElement.children.length; child++) {
                            e.target.parentElement.children[child].classList.remove("active");
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

export default withRouter(connect(mapStateToProps, { fetchMovieList, selectMovie })(MovieList));