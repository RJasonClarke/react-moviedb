import React from 'react';
import MovieCard from './MovieCard';
import movies from '../api';

function MoviesContainer(props) {

    const movieObjs = movies.map((movie) => <MovieCard movie={movie}></MovieCard>)

    return (
        <div>
            <h2>Movie Database</h2>
            <div>
                <input type="text" placeholder="Search a movie..." />
                <button>Go</button>
            </div>
            {movieObjs}
        </div>
    );
}

export default MoviesContainer;