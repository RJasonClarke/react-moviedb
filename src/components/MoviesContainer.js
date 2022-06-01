import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MoviesContainer extends Component{

    render(){

        const mapMovies = this.state.movies.map(movie => <MovieCard key={movie.title} movie={movie}></MovieCard>)

        return (
            <div>
                <h2>Movie Database</h2>
                <div>
                    <input type="text" placeholder="Search a movie..." />
                    <button>Go</button>
                </div>
                <div>
                    {mapMovies}
                </div>
            </div>
        );
    }
}

export default MoviesContainer;