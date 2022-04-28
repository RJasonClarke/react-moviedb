import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../api';

class MoviesContainer extends Component{

    state = {
        movies: []
    }

    componentDidMount(){
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=efef40b6")
        .then(resp => resp.json())
        .then(movies => this.setState({
            movies: movies
        }))
    }

    render(){
        const movieObjs = movies.map((movie) => <MovieCard key={movie.title} movie={movie}></MovieCard>)

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
}

export default MoviesContainer;