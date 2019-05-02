import React from 'react';
import { connect } from 'react-redux';

import { selectMovie, fetchGenreList } from '../actions';

class MovieInfo extends React.Component
{   
    componentDidMount() {
        this.props.fetchGenreList();
    }

    findMatchingGenres() {
        const genreList = this.props.genres;
        const movieGenres = this.props.selectedMovie.genre_ids;
        let matchingGenres = [];

        movieGenres.forEach(movieGenre => {
            for (let genre of genreList) {
                if(movieGenre === genre.id) matchingGenres.push(genre.name);
            }
        });

        return matchingGenres.map(genre => {
            return (
                <div className="genre" key={genre}>{genre}</div>
            );
        });
    }
    
    render() {
        if (!this.props.selectedMovie)  return <div className="list-details"></div>;
        return (
            <div className="list-details">
                <div>
                    <img className="poster" 
                         src={`https://image.tmdb.org/t/p/w300/${this.props.selectedMovie.poster_path}`} 
                         alt={this.props.selectedMovie.title} />
                </div>
                <div>
                    <h1 className="title">{this.props.selectedMovie.title}</h1>
                    <div>RELEASE DATE: {this.props.selectedMovie.release_date}</div>
                    <div>AVERAGE SCORE: {this.props.selectedMovie.vote_average}</div>
                    <div>{this.findMatchingGenres()}</div>
                    <div className="overview">{this.props.selectedMovie.overview}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        selectedMovie: state.selectedMovie,
        genres: state.genres
    };
}

export default connect(mapStateToProps, { selectMovie, fetchGenreList })(MovieInfo);