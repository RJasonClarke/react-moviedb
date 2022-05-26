import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MoviesContainer extends Component{

    state = {
        movies: []
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1f441d16d9e32be5307f53437c47ba03&language=en-US&page=1")
        .then(resp => resp.json())
        .then(data => this.setState({
            movies: data.results
        }))
    }

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