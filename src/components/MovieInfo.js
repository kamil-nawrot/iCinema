import React from 'react';
import { connect } from 'react-redux';

import { selectMovie, fetchGenreList, fetchExternalId } from '../actions';

class MovieInfo extends React.Component
{   
    componentDidMount() {
        this.props.fetchGenreList();
    }

    componentDidUpdate(prevProps) {
        if (!this.props.selectedMovie) return;
        if (this.props.selectedMovie.id !== prevProps.selectedMovie.id) {
            this.props.fetchExternalId(this.props.selectedMovie.id);
            console.log(this.props.externalId);
        }
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
        if (!this.props.selectedMovie)  return (
            <div className="empty"></div>);

        return (
            <div className="list-details">
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w400/${this.props.selectedMovie.poster_path}`} 
                         alt={this.props.selectedMovie.title} />
                </div>
                <div className="info">
                    <h1 className="title"> {this.props.selectedMovie.title} </h1>
                    <hr />
                    <div className="additional-info"> RELEASE DATE: <strong>{this.props.selectedMovie.release_date}</strong> </div>
                    <div className="additional-info"> 
                        AVERAGE SCORE: <strong>{this.props.selectedMovie.vote_average}</strong> (based on {this.props.selectedMovie.vote_count} votes) 
                    </div>
                    <div> {this.findMatchingGenres()} </div>
                    <div className="overview"> {this.props.selectedMovie.overview} </div>
                    <a href={`https://www.imdb.com/title/${this.props.externalId.imdb_id}/`} 
                       alt={this.props.selectedMovie.title}
                       target="_blank" rel="noopener noreferrer">
                        <div className="imdb">See on IMDb</div>
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        selectedMovie: state.selectedMovie,
        genres: state.genres,
        externalId: state.externalId
    };
}

export default connect(mapStateToProps, { selectMovie, fetchGenreList, fetchExternalId })(MovieInfo);